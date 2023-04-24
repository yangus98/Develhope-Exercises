import React from "react";
import Welcome from "./Welcome";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name="Brayan" age="22"/>
      </div>
    );
  }
}
