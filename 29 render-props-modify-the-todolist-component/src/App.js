import React from "react";
import TodoList from "./TodoList"

export default class App extends React.Component {
  renderArr = (arr, remove) => {
    return arr.map((item) => {
      return(
        <>
            <li>{item}</li>
          <button onClick={remove}>remove this</button>
        </>
      )
    })
  }

  render(){
    return (
      <>
      <TodoList renderArr = {this.renderArr}/>
      </>
    )
  }
}