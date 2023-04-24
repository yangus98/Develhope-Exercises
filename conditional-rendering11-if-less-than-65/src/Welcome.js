import React from "react";
import Age from "./Age";
Age.age = 19;

export default class Welcome extends React.Component {
  render() {
    if (Age.age > 18 && Age.age < 65) {
      return (
        <p>
          Hello, {this.props.name}!
          <Age age={Age.age} />
        </p>
      );
    } else {
      return (
        <p>
          Hello, {this.props.name}!
        </p>
      );
    }
  }
}

Welcome.defaultProps = {
  name: "Undefined name!",
  age: "Undefined age!"
};
