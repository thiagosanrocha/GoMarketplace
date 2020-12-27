import styled from 'styled-components/native';
import { FlatList } from 'react-native';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const ProductContainer = styled.View`
  border-radius: 5px;
  margin-top: 60px;
  flex: 1;
  flex-direction: row;
`;

export const ProductList = styled(FlatList as new () => FlatList<Product>)`
  padding: 0 10px;
`;

export const ActionButton = styled.TouchableOpacity`
  background: ${props => props.theme.shapesBackgrounds.tertiary};
  border-radius: 5px;
  padding: 12px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const TotalProductsContainer = styled.View`
  position: absolute;
  bottom: 0px;

  flex-direction: row;
  background: #e83f5b;

  padding: 20px 40px;
  justify-content: space-between;
  align-items: center;
`;

export const TotalProductsText = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-left: 15px;

  flex: 1;
  font-weight: bold;
`;

export const SubtotalValue = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;
