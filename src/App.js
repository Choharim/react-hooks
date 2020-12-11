import React, { useState } from 'react';

const App = () => {
  const [ count, setCount ] = useState(0);

  const onChangeCount = (event) => {
    const { target: { name } } = event;
    if(name === "increment"){
      setCount(preCount => preCount + 1);
    }else if (name === "decrement"){
      setCount(preCount => preCount -1);
    }
  };

  return (
    <div className="App">
      <span>{count}</span>
      <button onClick={onChangeCount} name="increment">increment</button>
      <button onClick={onChangeCount} name="decrement">decrement</button>
    </div>
  );
}

export default App;
