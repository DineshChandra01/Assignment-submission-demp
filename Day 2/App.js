
import './App.css';
import Header from './Header';
import {useState} from 'react';
// state is special kind of date componet rerander


function App() {     
  let [name,setName]=useState("dinesh");
  function  changeName(){
    name="Thor";
    console.log(name);
  }
  return (
    <div className="App">
    <h1>{name}</h1>
   <button onClick={changeName}>Click</button>
      
    
    
    </div>
  
  );
}

export default App; //component import
