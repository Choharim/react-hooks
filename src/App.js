import React, { useState } from 'react';

class UglyApp extends React.Component {
  state = {
    number:0
  };

  onChangeCount = (event) => {
    const { target: { name } } = event;
    if(name === "increment"){
      this.setState(pre => ({number:pre.number +1}));
    }else if(name ==="decrement"){
      this.setState(pre => ({number: pre.number -1}));
    }
  };

  render(){
    const { number } = this.state;
    return (
      <div className="App">
        <span>{number}</span>
        <button onClick={this.onChangeCount} name="increment">increment</button>
        <button onClick={this.onChangeCount} name="decrement">decrement</button>
      </div>
    );
  }
}



export default UglyApp;
