import styled from 'styled-components/native';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
}

export const ProductContainer = styled.View`
  background: ${props => props.theme.shapesBackgrounds.secondary};
  padding: 24px 16px;
  border-radius: 5px;
  margin: 8px;
  flex: 1;
`;

export const ProductImage = styled.Image`
  height: 122px;
  width: 122px;
  align-self: center;
`;

export const ProductTitle = styled.Text`
  font-size: 14px;
  margin-top: 10px;
  color: ${props => props.theme.texts.primary};
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  margin-top: auto;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${props => props.theme.colors.primary};
`;

export const ProductButton = styled.TouchableOpacity``;
