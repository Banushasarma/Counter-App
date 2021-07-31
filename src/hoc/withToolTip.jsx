import React from "react";

function withToolTip(Component) {
  return class WithToolTip extends React.Component {
    state = { showToolTip: false };

    mouseOver = () => this.setState({ showToolTip: true });
    mouseOut = () => this.setState({ showToolTip: false });

    render() {
      return (
        <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          <Component {...this.props} showTooltip={this.state.showToolTip} />
        </div>
      );
    }
  };
}

export default withToolTip;
