// Modules
import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';

// Styles
import {
  ShimmerProductImage,
  ShimmerProductList,
  ShimmerProductContainer,
  ShimmerProductTitle,
  ShimmerPriceContainer,
  ShimmerProductPrice,
} from './styles';

interface ShimmerProduct {
  id: string;
}

const screenWidth = Dimensions.get('screen').width;

const ShimmerProduct: React.FC = () => {
  const [shimmerProduct] = useState<ShimmerProduct[]>([
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
    { id: '9' },
  ]);

  return (
    <ShimmerProductList
      data={shimmerProduct}
      keyExtractor={product => product.id}
      ListFooterComponent={<View />}
      ListFooterComponentStyle={{
        height: 80,
      }}
      numColumns={screenWidth > 600 ? 3 : 2}
      renderItem={() => (
        <ShimmerProductContainer>
          <ShimmerProductImage />
          <ShimmerProductTitle />
          <ShimmerPriceContainer>
            <ShimmerProductPrice />
          </ShimmerPriceContainer>
        </ShimmerProductContainer>
      )}
    />
  );
};

export default ShimmerProduct;
