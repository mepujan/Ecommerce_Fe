import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const products = [
  {
    id: 1,
    name: "Chicken",
    quantity: 4,
  },
  {
    id: 2,
    name: "Banana",
    quantity: 2,
  },
  {
    id: 3,
    name: "Iphone",
    quantity: 5,
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App products={products} />);
