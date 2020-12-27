// Modules
import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

interface CartContext {
  products: Product[];
  addToCart(item: Omit<Product, 'quantity'>): void;
  deleteFromCart(id: string): void;
  increment(id: string): void;
  decrement(id: string): void;
  cleanCart(): void;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async function loadProducts(): Promise<void> {
      const response = await AsyncStorage.getItem('@GoMarketplace:products');

      if (response) setProducts([...JSON.parse(response)]);
    })();
  }, []);

  const increment = useCallback(
    async (id: string) => {
      const stateProducts = products;

      const productIndex = stateProducts.findIndex(
        product => product.id === id,
      );

      if (productIndex >= 0) {
        const { quantity } = stateProducts[productIndex];

        const newStateProducts = [
          ...stateProducts.fill(
            { ...stateProducts[productIndex], quantity: quantity + 1 },
            productIndex,
            productIndex + 1,
          ),
        ];

        setProducts(newStateProducts);

        await AsyncStorage.setItem(
          '@GoMarketplace:products',
          JSON.stringify(newStateProducts),
        );
      }
    },
    [products],
  );

  const decrement = useCallback(
    async (id: string) => {
      const stateProducts = products;
      let newStateProducts: Product[] = [];

      const productIndex = stateProducts.findIndex(
        product => product.id === id,
      );
      const stateWithoutProduct = stateProducts.filter(
        product => product.id !== id,
      );

      if (productIndex >= 0) {
        const { quantity } = stateProducts[productIndex];

        if (quantity > 1) {
          newStateProducts = [
            ...stateProducts.fill(
              {
                ...stateProducts[productIndex],
                quantity: quantity - 1,
              },
              productIndex,
              productIndex + 1,
            ),
          ];

          setProducts(newStateProducts);
        } else {
          newStateProducts = stateWithoutProduct;

          setProducts(newStateProducts);
        }
      }

      await AsyncStorage.setItem(
        '@GoMarketplace:products',
        JSON.stringify(newStateProducts),
      );
    },
    [products],
  );

  const addToCart = useCallback(
    async (product: Omit<Product, 'quantity'>) => {
      const productIndex = products.findIndex(
        productItem => productItem.id === product.id,
      );

      if (productIndex >= 0) {
        increment(product.id);
      } else {
        const newStateProducts = [...products, { ...product, quantity: 1 }];

        setProducts(newStateProducts);

        await AsyncStorage.setItem(
          '@GoMarketplace:products',
          JSON.stringify(newStateProducts),
        );
      }
    },
    [products, increment],
  );

  const deleteFromCart = useCallback(
    async (id: string) => {
      const stateProducts = [...products];

      const newStateProducts = stateProducts.filter(
        product => product.id !== id,
      );

      setProducts(newStateProducts);

      await AsyncStorage.setItem(
        '@GoMarketplace:products',
        JSON.stringify(newStateProducts),
      );
    },
    [products],
  );

  const cleanCart = useCallback(async () => {
    setProducts([]);

    AsyncStorage.removeItem('@GoMarketplace:products');
  }, []);

  const value = useMemo(
    () => ({
      addToCart,
      deleteFromCart,
      cleanCart,
      increment,
      decrement,
      products,
    }),
    [addToCart, deleteFromCart, cleanCart, increment, decrement, products],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
