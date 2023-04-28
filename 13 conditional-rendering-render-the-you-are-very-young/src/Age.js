import React from "react";

export default class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.age > 18 ? (
          <p>Your age is {this.props.age}.</p>
        ) : (
          <p>You are very young!</p>
        )}
      </div>
    );
  }
}
