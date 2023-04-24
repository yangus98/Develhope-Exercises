import React from "react";
import Welcome from "./Welcome";
let chooseName = "Mario";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name ={chooseName} age ={22}/>
      </div>
    );
  }
}
