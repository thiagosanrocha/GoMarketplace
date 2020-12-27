// Modules
import React, { useState, useEffect } from 'react';
import { View, Dimensions } from 'react-native';

// Services
import api from '../../services/api';

// Components
import ProductItem from '../../components/ProductItem';
import FloatingCart from '../../components/FloatingCart';
import ShimmerProduct from '../../components/ShimmerProduct';

// Styles
import { Container, ProductContainer, ProductList } from './styles';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
}

const screenWidth = Dimensions.get('screen').width;

const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async function loadProducts(): Promise<void> {
      const { data } = await api.get<Product[]>('products');

      setProducts(data);

      setLoading(false);
    })();
  }, []);

  return (
    <Container>
      <ProductContainer>
        {loading ? (
          <ShimmerProduct />
        ) : (
          <ProductList
            data={products}
            keyExtractor={item => item.id}
            ListFooterComponent={<View />}
            ListFooterComponentStyle={{
              height: 80,
            }}
            numColumns={screenWidth > 600 ? 3 : 2}
            renderItem={({ item }) => <ProductItem key={item.id} data={item} />}
          />
        )}
      </ProductContainer>
      <FloatingCart />
    </Container>
  );
};

export default Dashboard;
