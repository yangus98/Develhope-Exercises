import React from "react";
import Age from "./Age"

export default class Welcome extends React.Component {
  render() {
    return (
      <p>
        Hello, {this.props.name}!
        <Age  age ={19}/>
      </p>
    );
  }
}

Welcome.defaultProps = {
  name: "Default"
}
