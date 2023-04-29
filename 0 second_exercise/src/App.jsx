import { useState } from 'react';
import List from './List';

function App() {
  
  const todos = [
    {
      id: 1,
      title: "Buy groceries",
      completed: false
    },
    {
      id: 2,
      title: "Finish writing report",
      completed: false
    },
    {
      id: 3,
      title: "Call mom",
      completed: true
    },
    {
      id: 4,
      title: "Go for a run",
      completed: false
    },
    {
      id: 5,
      title: "Schedule dentist appointment",
      completed: false
    }
  ]

  const [currentTodo, setCurrentTodo] = useState(todos);

  return (
    <div className="App">
      <List arr = {currentTodo} setTodo = {setCurrentTodo} />
    </div>
  );
}

export default App;
