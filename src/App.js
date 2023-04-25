
import { useState } from 'react';
import './App.css';

function App() {
  const intialCount = 10;
  const [counter, setcounter] = useState(intialCount)

  function increment() {
    setcounter(counter + 10)
  }

  function reset() {
    setcounter(intialCount)
  }

  function decrement() {
    setcounter(counter - 5)
  }
  return (

    <div>
      <div>Counter{counter}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>Decrement</button>

    </div>

  );

}

export default App;
