import React from "react";
import Age from "./Age"

export default class Welcome extends React.Component {
  render() {
    return (
      <p>
        Welcome, {this.props.name}!
        <Age  age ={22}/>
      </p>
    );
  }
}

Welcome.defaultProps = {
  name: "Default"
}
