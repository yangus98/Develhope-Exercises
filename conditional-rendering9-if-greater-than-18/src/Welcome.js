import React from "react";
import Age from "./Age";
let chooseAge = 19;

export default class Welcome extends React.Component {
  render() {
    if (chooseAge > 18) {
      return (
        <p>
          Hello, {this.props.name}!
          <Age age={chooseAge} />
        </p>
      );
    } else {
      return (
        <p>
          Hello, {this.props.name}!
          <Age age=" " />
        </p>
      );
    }
  }
}

Welcome.defaultProps = {
  name: "Default",
};
