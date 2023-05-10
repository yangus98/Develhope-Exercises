import { useState } from "react"

export function useCounter (initialValue = 0){
  const [counter, setCounter] = useState(initialValue);

  function handleCounterIncrement() {
    setCounter(count => count + 1);
  };

  function handleCounterDecrement() {
    setCounter(count => count - 1);
  };

  function handleCounterReset() {
    setCounter(initialValue);
  };

  return {
    counter: counter,
    onIncrement: handleCounterIncrement,
    onDecrement: handleCounterDecrement,
    onReset: handleCounterReset,
  }
}