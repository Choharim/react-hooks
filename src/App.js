import React, { useState } from 'react';

const useInput = (initText, validator ) => {
  const [ text,setText ] = useState(initText);

  const onChange = (event) => {
    const { target: { value } } = event;
    const confirm = validator(); 
    if(typeof validator === "function" && confirm === true){
    setText(value);
    }else {
      return;
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };
  return { text, onChange, onSubmit };
};

const App = () => {
  const vali = () => {
    if(use.text.length < 5){
      return true;
    } else {
      return false;
    }
   };
  const use = useInput("Mr.s",vali);
 
 return (
   <form onSubmit={use.onSubmit}>
     <input onChange={use.onChange} value={use.text} type="text" placeholder="something"></input>
     <input type="submit"></input>
   </form>
 );
};

export default App;
