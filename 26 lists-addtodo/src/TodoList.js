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

  return (
      <div>
          <input onChange={(e) => setName(e.target.value)} ref={input}/>
          <button onClick={handleAdd}>add</button>
          {items.map((item) => {return <li>{item}</li>})}
      </div>
  );
}