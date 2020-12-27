// Modules
import React, { useMemo } from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Contexts & Utils
import { useCart } from '../../hooks/cart';
import { useTheme } from '../../hooks/theme';
import cartTotal from '../../utils/cartTotal';
import totalItensInCart from '../../utils/totalItensInCart';

// Components
import CartItem from '../../components/CartItem';

// Styles
import {
  Container,
  ProductContainer,
  ProductList,
  ActionButton,
  TotalProductsContainer,
  TotalProductsText,
  SubtotalValue,
} from './styles';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

const Cart: React.FC = () => {
  const { products } = useCart();

  const { theme } = useTheme();

  const navigation = useNavigation();

  const handleCartTotal = useMemo(() => cartTotal(products), [products]);

  const handleTotalItensInCart = useMemo(() => totalItensInCart(products), [
    products,
  ]);

  return (
    <Container>
      {products.length === 0 ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ fontSize: 18, color: theme.texts.primary }}>
            Seu carrinho está vazio!
          </Text>

          <ActionButton
            style={{ marginTop: 10 }}
            onPress={() => navigation.goBack()}
          >
            <FeatherIcon
              name="chevron-left"
              color={theme.colors.primary}
              size={16}
            />
            <Text style={{ marginLeft: 5, color: theme.texts.primary }}>
              Voltar às compras
            </Text>
          </ActionButton>
        </View>
      ) : (
        <ProductContainer>
          <ProductList
            data={products}
            keyExtractor={item => item.id}
            ListFooterComponent={<View />}
            ListFooterComponentStyle={{
              height: 80,
            }}
            renderItem={({ item }: { item: Product }) => (
              <CartItem key={item.id} data={item} />
            )}
          />
        </ProductContainer>
      )}

      <TotalProductsContainer>
        <FeatherIcon name="shopping-cart" color="#fff" size={24} />
        <TotalProductsText>{`${handleTotalItensInCart} itens`}</TotalProductsText>
        <SubtotalValue>{handleCartTotal}</SubtotalValue>
      </TotalProductsContainer>
    </Container>
  );
};

export default Cart;
