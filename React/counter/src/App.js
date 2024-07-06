import './App.css';
import { useState } from 'react';

function App() {
  const[counter,setCounter]=useState(0);

  function countHandler(){
        if(counter < 10){
          setCounter(i => i + 1)
        }
  }

  return (
    <div className="App">
      <div>{counter}</div>
      <button onClick={countHandler} className={counter<10?'green':'red'}>inc</button>
    </div>
  );
}

export default App;
