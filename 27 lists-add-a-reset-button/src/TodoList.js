import React, {useState} from "react";
import {useRef} from "react"

export default function TodoList() {

  const input = useRef(null)
  const [name, setName] = useState('');
  const [items, setItems] = useState(["Strawberry Cake", "Profiterols", "Chocolate"]);
  const handleAdd = () => {
      setItems([...items, name]);
      input.current.value = ""
    };
  const removeAll = () => {
    setItems([]);
  }

  return (
      <div>
          <input onChange={(e) => setName(e.target.value)} ref={input}/>
          
          <button onClick={handleAdd}>add</button>
          <button onClick={removeAll}>remove all</button>
          {items.map((item, index) => {return <li index={index}>{item}</li>})}
      </div>
  );
}