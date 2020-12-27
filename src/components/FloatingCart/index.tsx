// Modules
import React, { useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

// Contexts & Utils
import { useCart } from '../../hooks/cart';
import cartTotal from '../../utils/cartTotal';
import totalItensInCart from '../../utils/totalItensInCart';

// Styles
import {
  Container,
  CartPricing,
  CartButton,
  CartButtonText,
  CartTotalPrice,
} from './styles';

const FloatingCart: React.FC = () => {
  const { products } = useCart();

  const navigation = useNavigation();

  const handleCartTotal = useMemo(() => cartTotal(products), [products]);

  const handleTotalItensInCart = useMemo(() => totalItensInCart(products), [
    products,
  ]);

  return (
    <Container>
      <CartButton onPress={() => navigation.navigate('Cart')}>
        <FeatherIcon name="shopping-cart" size={24} color="#fff" />
        <CartButtonText>{`${handleTotalItensInCart} itens`}</CartButtonText>
      </CartButton>

      <CartPricing onPress={() => navigation.navigate('Cart')}>
        <CartTotalPrice>{handleCartTotal}</CartTotalPrice>
      </CartPricing>
    </Container>
  );
};

export default FloatingCart;
