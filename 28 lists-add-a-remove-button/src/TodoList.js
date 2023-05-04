import React, {useState} from "react";
import {useRef} from "react"

export default function TodoList() {

  const input = useRef(null)
  const [name, setName] = useState('');
  const [items, setItems] = useState(["Strawberry Cake", "Profiterols", "Chocolate"]);
  const handleAdd = () => {
      setItems([...items, name]);
      setName('');
      input.current.value = ""
    };
  const removeAll = () => {
    setItems([]);
  }

  function removeTodo(){
    const newArr = [...items];
    newArr.splice(name,1);
    setItems(newArr)
}

  return (
      <div>
          <input onChange={(e) => setName(e.target.value)} ref={input}/>
          
          <button onClick={handleAdd}>add</button>
          <button onClick={removeAll}>remove all</button>
          {items.map((item) => {return(
          <>
          <li>{item}</li>
          <button onClick={removeTodo}>remove this</button>
          </>
          )})}
      </div>
  );
}