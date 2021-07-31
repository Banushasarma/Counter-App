import React, { Component } from "react";
import UserContext from "./userContext";

class MoviList extends Component {
  static contextType = UserContext;

  componentDidMount() {
    console.log("Context", this.context);
  }

  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => (
          <div>
            Movie List -{" "}
            {userContext.currentUser ? userContext.currentUser.name : ""}
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default MoviList;
