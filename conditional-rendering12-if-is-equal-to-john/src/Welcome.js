import React from "react";
import Age from "./Age";
Age.age = 64;

export default class Welcome extends React.Component {
  render() {
      return (
        <p>
          Hello, {this.props.name}!
          {Age.age > 18 && Age.age <65 && this.props.name==="John" && <Age age={Age.age} />}
        </p>
      );
      
    }
}

Welcome.defaultProps = {
  name: "Undefined name!",
  age: "Undefined age!"
}