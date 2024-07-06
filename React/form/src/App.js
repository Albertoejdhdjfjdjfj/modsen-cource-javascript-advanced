import {useState} from 'react'
import './App.css';

function App() {
  const[valueForm,setValueForm]=useState('');
  const valueFormHandler=(e)=>{
     setValueForm(e.target.value)
  }
  return (
    <form className="App">
       <input onChange={valueFormHandler} type="text"/>
       <button onClick={(e)=>{e.preventDefault();console.log(valueForm)}}>Click</button>
    </form>
  );
}

export default App;
