const Header = ({ name }) => {
  return (
    <div>
      <h1>Welcome {name}</h1>
    </div>
  );
};

const App = ({ products }) => {
  return (
    <div>
      <Header name="Admin" />
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li>{product.name}</li>
        ))}
      </ul>
      <p>hehe</p>
    </div>
  );
};

export default App;
