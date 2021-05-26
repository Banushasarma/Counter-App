import React, { Component } from "react";

class ProductDetails extends Component {
  state = {};
  render() {
    return <h1>Product Details - {this.props.match.params.id}</h1>;
  }
}

export default ProductDetails;
