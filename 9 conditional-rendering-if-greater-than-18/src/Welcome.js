import React from "react";
import Age from "./Age";
Age.age = 19;

export default class Welcome extends React.Component {
  render() {
      return (
        <p>
          Hello, {this.props.name}!
          {Age.age > 18 && <Age age={Age.age} />}
        </p>
      );
      
    }
}

Welcome.defaultProps = {
  name: "Undefined name!",
  age: "Undefined age!"
};
