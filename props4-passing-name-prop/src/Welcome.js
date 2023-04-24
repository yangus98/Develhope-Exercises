import React from "react";

export default class Welcome extends React.Component {
  render() {
    return (
      <p>
        Hello, {this.props.name}!
      </p>
    );
  }
}
