import React, { Component } from "react";
import withToolTip from "./withToolTip";

class MovieHOC extends Component {
  render() {
    return (
      <div>
        Movie
        {this.props.showTooltip && <div>Some tooltip</div>}
      </div>
    );
  }
}

export default withToolTip(MovieHOC);
