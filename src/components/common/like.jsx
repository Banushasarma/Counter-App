import React, { Component } from "react";

class Like extends Component {
  render() {
    let classes = "pointer fa fa-heart";
    if (!this.props.liked) classes += "-o";
    return (
      <i
        onClick={this.props.onClick}
        style={{ cursor: "pointer" }}
        className={classes}
      ></i>
    );
  }
}

export default Like;
