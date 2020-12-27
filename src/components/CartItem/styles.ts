import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled.View`
  background: ${props => props.theme.shapesBackgrounds.secondary};
  padding: 15px 10px;
  border-radius: 5px;
  margin: 5px;
  flex-direction: row;
`;

export const CartItemImage = styled.Image`
  height: 92px;
  width: 92px;
`;

export const CartItemTitleContainer = styled.View`
  font-size: 16px;
  margin-left: 5px;
`;

export const CartItemTitle = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.texts.primary};
`;

export const CartItemPriceContainer = styled.View`
  flex-direction: column;
`;

export const CartItemTotalContainer = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

export const CartItemSinglePrice = styled.Text`
  font-size: 12px;
  color: ${props => props.theme.texts.secondary};
  margin-top: 8px;
`;

export const CartItemPrice = styled.Text`
  font-weight: bold;
  margin-top: 5px;

  font-size: 16px;
  color: #e83f5b;
`;

export const CartItemQuantity = styled.Text`
  font-weight: bold;
  margin-top: 5px;
  margin-right: 10px;

  font-size: 16px;
  color: #e83f5b;
`;

export const CartItemActionContainer = styled.View`
  align-self: flex-end;
  align-items: center;
  justify-content: space-between;

  margin-left: auto;
`;

export const CartItemActionButton = styled.TouchableOpacity`
  background: ${props => props.theme.shapesBackgrounds.tertiary};
  border-radius: 5px;
  padding: 12px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const SwipeLeftContainer = styled(Animated.View)`
  width: 100px;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.primary};
  margin: 5px;
  border-radius: 5px;
`;

export const SwipeLeftButton = styled.TouchableOpacity`
  flex: 1;
  width: 100%;
  padding: 15px 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
