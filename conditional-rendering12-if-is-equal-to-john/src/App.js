import React from "react";
import Welcome from "./Welcome";
let chooseName = "John";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name ={chooseName}/>
      </div>
    );
  }
}
