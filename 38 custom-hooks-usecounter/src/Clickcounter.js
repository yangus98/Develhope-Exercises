import { useCounter } from "./useCounter"
export default function App({initialValue = 0}) {

  const {counter, onIncrement, onDecrement, onReset} = useCounter(initialValue)
     
  return (
        <div>
          <h1>{counter}</h1>
          <div>
            <button onClick={onIncrement}>One more!</button>
            <button onClick={onDecrement}>One less!</button>
            <button onClick={onReset}>Restart!</button>
          </div>
        </div>
      );
}