const Header = (props) => {
  return (
    <div>
      <h1>Welcome {props.name}</h1>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header name="Aseem" />

      <p>hehe</p>
    </div>
  );
};

export default App;
