import styled from 'styled-components/native';
import { FlatList } from 'react-native';

interface ShimmerProduct {
  id: string;
}

export const ShimmerProductList = styled(
  FlatList as new () => FlatList<ShimmerProduct>,
)`
  flex: 1;
  padding: 0 10px;
`;

export const ShimmerProductContainer = styled.View`
  background: ${props => props.theme.shapesBackgrounds.secondary};
  padding: 24px 16px;
  border-radius: 5px;
  margin: 8px;
  flex: 1;
`;

export const ShimmerProductImage = styled.View`
  height: 122px;
  width: 122px;
  background: ${props => props.theme.shapesBackgrounds.primary};
  align-self: center;
  border-radius: 8px;
`;

export const ShimmerProductTitle = styled.View`
  width: 100px;
  height: 19px;
  margin-top: 10px;
  background: ${props => props.theme.shapesBackgrounds.primary};
  border-radius: 8px;
`;

export const ShimmerPriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  margin-top: auto;
`;

export const ShimmerProductPrice = styled.View`
  width: 60px;
  height: 21.5px;
  background: ${props => props.theme.shapesBackgrounds.primary};
  border-radius: 8px;
`;
