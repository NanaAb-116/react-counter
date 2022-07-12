import React, { useState } from 'react';

function FunctionCounter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Function Counter</h1>
      <h3>count {count}</h3>
      <button onClick={handleIncrease}>increase</button>
      <button onClick={handleDecrease}>decrase</button>
    </div>
  );
}

export default FunctionCounter;
