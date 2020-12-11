import React, { useState } from 'react';

const array = [
  {title:"first",
  content:"I am first"},
  {title:"second",
  content:"I am second"}
];

const useTab = (initIndex, allIndex ) => {
  const [ index, setIndex ] = useState(initIndex); 
  if(!Array.isArray(allIndex) || !allIndex){
    return;
  }
    return { change:setIndex, current:allIndex[index] };

};

const App = () => {
const { change,current } = useTab(0,array);
 return (
 <div>
 {array.map((obj,num) => <button onClick={()=> change(num)} key={num}>{obj.title}</button>)}
 <span>{current.content}</span>
 </div>
 );
};

export default App;
 