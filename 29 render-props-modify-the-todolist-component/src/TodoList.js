import React, { useState } from "react";
import { useRef } from "react";

export default function TodoList(props) {
  const input = useRef(null);
  const [name, setName] = useState("");
  const [items, setItems] = useState([
    "Strawberry Cake",
    "Profiterols",
    "Chocolate",
  ]);

  const handleAdd = () => {
    setItems([...items, name]);
    setName("");
    input.current.value = "";
  };

  const removeAll = () => {
    setItems([]);
  };

  function removeTodo(index) {
    const newArr = [...items];
    newArr.splice(index, 1);
    setItems(newArr);
  }

  return (
    <>
      <input onChange={(e) => setName(e.target.value)} ref={input} />

      <button onClick={handleAdd}>add</button>
      <button onClick={removeAll}>remove all</button>
      <ul>
      {
        props.renderArr(items, removeTodo)
      }
      </ul>
    </>
  );
}