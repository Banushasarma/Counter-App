import React, { Component } from "react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
];

class Products extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Products</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Link to={`/productdetails/${product.id}`}>{product.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Products;
