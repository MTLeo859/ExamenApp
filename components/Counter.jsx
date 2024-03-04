import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div style={{textAlign: 'center', marginTop: '20px'}}>
      <h2>Contador</h2>
      <p>El valor actual es: {count}</p>
      <button style={{padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer'}} onClick={increment}>Incrementar</button>
    </div>
  );
};

export default Counter;
