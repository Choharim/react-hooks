import React, { useEffect, useState } from 'react';

const useTitle = (initTitle) => {
  const [title,setTitle]=useState(initTitle);
  useEffect(()=> {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = `${title}`;
  },[title]);
  return {setTitle};
};

const App = () => {
 const {setTitle}=useTitle("Loading...");
 setTimeout(()=>{setTitle("Home")},5000);
 return (
 <div>
 
 </div>
 );
};

export default App;
 