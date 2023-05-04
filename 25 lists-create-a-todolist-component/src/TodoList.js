import React from "react";

const sweets = ["Strawberry Cake", "Profiterols", "Ice Cream"]
const items = sweets.map((sweet) => <li> {sweet} </li>)


export default class TodoList extends React.Component {

  addTodo = () => {
    sweets.push("ciao")
    console.log(sweets)
  }

  

    render(){
      return (
        <>
        <ul>
        {items}
        </ul>

        <input type="text" />
        <button onClick={this.addTodo}>click here</button>
        </>
      )
    }
  }