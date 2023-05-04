import React from "react";
import TodoList from "./TodoList"

export default class App extends React.Component {
  render(){
    return (
      <>
      <TodoList render={(list,addValue, noValue, oneLessValue) =>{
        const {items} = list
        const {handleAdd} = addValue
        const {removeAll} = noValue
        const {removeTodo} = oneLessValue

        return(
          <div>
            the array is {items} {handleAdd} {removeAll} {removeTodo}
          </div>
        )
      }}/>
      </>
    )
  }
}