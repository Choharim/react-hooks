import React, { useEffect, useRef} from 'react';

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if(element.current){
    element.current.addEventListener("click",onClick);
    }
  return (
    element.current.removeEventListener("click",onClick)
  );
  },[]);
  if(typeof onClick !== "function"){
    return;
  }
  return element;
};

const App = () => {
  const sayHello = () => {
    console.log("sayHello");
  };
  const title = useClick(sayHello);
  return (
  <div>
    <h1 ref={title}>hi</h1>
  </div>
  );
};

export default App;
 