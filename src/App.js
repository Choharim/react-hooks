import React, { useEffect, useRef} from 'react';

const useConfirm = (message="",callback) => {
  if(typeof callback !== "function"){
    return;
  }
  const confirmAction = () => {
    if(window.confirm(message)){
      callback();
    }
  };
  return confirmAction;
};

const App = () => {

  const deleteWorld = () => {
    console.log("deleting");
  };
  const confriming = useConfirm("are you sure?",deleteWorld);
  return (
  <div>
   <button onClick={confriming}>delete</button>
  </div>
  );
};

export default App;
 