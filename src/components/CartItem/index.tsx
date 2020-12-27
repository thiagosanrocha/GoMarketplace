// Modules
import React, { useCallback } from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Swipeable from 'react-native-gesture-handler/Swipeable';

// Contexts & Utils
import { useTheme } from '../../hooks/theme';
import { useCart } from '../../hooks/cart';
import formatValue from '../../utils/formatValue';

// Styles
import {
  Container,
  CartItemImage,
  CartItemTitleContainer,
  CartItemTitle,
  CartItemPriceContainer,
  CartItemSinglePrice,
  CartItemTotalContainer,
  CartItemQuantity,
  CartItemPrice,
  CartItemActionContainer,
  CartItemActionButton,
  SwipeLeftContainer,
  SwipeLeftButton,
} from './styles';

interface CartItemProps {
  data: {
    id: string;
    title: string;
    image_url: string;
    price: number;
    quantity: number;
  };
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const { theme } = useTheme();

  const { increment, decrement, deleteFromCart } = useCart();

  const handleLeftSwipe = useCallback(
    (progress, dragX) => {
      const scale = dragX.interpolate({
        inputRange: [0, 120],
        outputRange: [0.8, 1],
        extrapolate: 'clamp',
      });

      const opacity = dragX.interpolate({
        inputRange: [0, 120],
        outputRange: [0.5, 1],
        extrapolate: 'clamp',
      });

      return (
        <SwipeLeftContainer style={{ transform: [{ scale }], opacity }}>
          <SwipeLeftButton onPress={() => deleteFromCart(data.id)}>
            <FeatherIcon name="trash-2" color="#FFF" size={24} />
          </SwipeLeftButton>
        </SwipeLeftContainer>
      );
    },
    [data.id, deleteFromCart],
  );

  return (
    <Swipeable renderLeftActions={handleLeftSwipe}>
      <Container>
        <CartItemImage source={{ uri: data.image_url }} />
        <CartItemTitleContainer>
          <CartItemTitle>{data.title}</CartItemTitle>
          <CartItemPriceContainer>
            <CartItemSinglePrice>{formatValue(data.price)}</CartItemSinglePrice>

            <CartItemTotalContainer>
              <CartItemQuantity>{`${data.quantity}x`}</CartItemQuantity>

              <CartItemPrice>
                {formatValue(data.price * data.quantity)}
              </CartItemPrice>
            </CartItemTotalContainer>
          </CartItemPriceContainer>
        </CartItemTitleContainer>
        <CartItemActionContainer>
          <CartItemActionButton onPress={() => increment(data.id)}>
            <FeatherIcon name="plus" color={theme.colors.primary} size={16} />
          </CartItemActionButton>
          <CartItemActionButton onPress={() => decrement(data.id)}>
            <FeatherIcon name="minus" color={theme.colors.primary} size={16} />
          </CartItemActionButton>
        </CartItemActionContainer>
      </Container>
    </Swipeable>
  );
};

export default CartItem;
