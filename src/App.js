import { useState } from "react";
import Product from "./components/Product";

const Header = ({ name }) => {
  return (
    <div>
      <h1>Welcome {name}</h1>
    </div>
  );
};

const App = (props) => {
  const [products, setProducts] = useState(props.products);
  const [newProduct, setNewProduct] = useState({
    name: "",
    quantity: "",
  });

  const handleName = (event) => {
    setNewProduct({
      name: event.target.value,
      quantity: newProduct.quantity,
    });
  };

  const handleQuantity = (event) => {
    setNewProduct({
      name: newProduct.name,
      quantity: event.target.value,
    });
  };

  const addProduct = (event) => {
    event.preventDefault();
    const productObject = {
      name: newProduct.name,
      quantity: newProduct.quantity,
      id: products.length + 1,
    };
    setProducts(products.concat(productObject));
    setNewProduct({
      name: "",
      quantity: "",
    });
  };

  return (
    <div>
      <Header name="Admin" />
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
      <form onSubmit={addProduct}>
        Name: <input value={newProduct.name} onChange={handleName} /> <br />
        Quantity:{" "}
        <input value={newProduct.quantity} onChange={handleQuantity} /> <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;
