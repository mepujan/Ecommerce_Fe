import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const products = [
  {
    id: 1,
    name: "Chicken",
    quantity: 4,
    stock: true,
  },
  {
    id: 2,
    name: "Banana",
    quantity: 2,
    stock: true,
  },
  {
    id: 3,
    name: "Iphone",
    quantity: 5,
    stock: true,
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App products={products} />);
