import { useState, sty } from "react";

function App() {
  const [number, setNumber] = useState(0);
  function increment() {
    setNumber(number + 1);
  }
  function decrement() {
    if (number == 0) {
      return;
    }
    setNumber(number - 1);
  }
  return (
    <>
      <div className="container" style={{ display: 'flex', 'justify-content': 'center', 'align-items': 'center', 'flex-direction': 'column' }}>
        <h2>Number: {number}</h2>
        <button onClick={increment}>
          Increment
        </button>{" "}
        <button onClick={decrement}>
          Decrement
        </button>
      </div>
    </>
  )
}
export default App;