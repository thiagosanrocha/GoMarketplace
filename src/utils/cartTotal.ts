import formatValue from './formatValue';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

const cartTotal = (products: Product[]): string => {
  const total = products.reduce((accumulator, product) => {
    return accumulator + product.quantity * product.price;
  }, 0);

  return formatValue(total);
};

export default cartTotal;
