const Product = ({ product }) => {
  return (
    <li>
      {product.name}, {product.quantity}
    </li>
  );
};

export default Product;
