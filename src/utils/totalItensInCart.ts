interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

const totalItensInCart = (products: Product[]): number => {
  const totalItens = products.reduce((total, product) => {
    return total + product.quantity;
  }, 0);

  return totalItens;
};

export default totalItensInCart;
