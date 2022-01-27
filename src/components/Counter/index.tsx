import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState<number>(0);

  function handlePlusButton() {
    setCount((prevState) => prevState + 1);
  }

  function handleMinusButton() {
    setCount((prevState) => prevState - 1);
  }

  return (
    <div>
      <span role="figure">{count}</span>
      <button onClick={handlePlusButton}>plus</button>
      <button onClick={handleMinusButton}>minus</button>
    </div>
  )
}

export default Counter;