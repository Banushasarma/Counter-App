import React, { Component } from "react";

class ProductDetails extends Component {
  state = {};

  handleClick = () => {
    //Navigate to /products

    // push method will allow back button and go back to previous page
    this.props.history.push("/products");

    // replace method will allow not back button and go back to previous page so login page we should use replace
    this.props.history.replace("/products");
  };
  render() {
    return (
      <div>
        <h1>Product Details - {this.props.match.params.id}</h1>
        <button onClick={this.handleClick}>Save</button>
      </div>
    );
  }
}

export default ProductDetails;
