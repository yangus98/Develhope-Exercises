import React from "react";

export default class Welcome extends React.Component {
  render() {
    return (
      <p>
        Hello, {this.props.name}!
        <p>
        Your age is {this.props.age}.
        </p>
      </p>
    );
  }
}

Welcome.defaultProps = {
  name: "Default"
}

//if we don't set a default value to a prop and we don't declare it, the prop space will be empty.