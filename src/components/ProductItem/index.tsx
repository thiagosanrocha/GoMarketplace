// Modules
import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

// Contexts & Utils
import { useTheme } from '../../hooks/theme';
import { useCart } from '../../hooks/cart';
import formatValue from '../../utils/formatValue';

// Styles
import {
  ProductContainer,
  ProductImage,
  ProductTitle,
  PriceContainer,
  ProductPrice,
  ProductButton,
} from './styles';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
}

interface ProductItemProps {
  data: Product;
}

const CartItem: React.FC<ProductItemProps> = ({ data }) => {
  const { theme } = useTheme();

  const { addToCart } = useCart();

  return (
    <ProductContainer>
      <ProductImage source={{ uri: data.image_url }} />
      <ProductTitle>{data.title}</ProductTitle>
      <PriceContainer>
        <ProductPrice>{formatValue(data.price)}</ProductPrice>
        <ProductButton onPress={() => addToCart(data)}>
          <FeatherIcon
            size={20}
            name="plus"
            color={theme.shapesBackgrounds.quartiary}
          />
        </ProductButton>
      </PriceContainer>
    </ProductContainer>
  );
};

export default CartItem;
