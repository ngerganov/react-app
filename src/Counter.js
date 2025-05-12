// src/Counter.js
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Текущий счетчик: {count}</p>
      <button onClick={increment}>Увеличить</button>
    </div>
  );
}

export default Counter;
