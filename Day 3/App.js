
import './App.css';
import Header from './Header';
import {useState, useEffect} from 'react';
// state is special kind of date componet rerander


function App() {     
  let [name,setName]=useState("dinesh");
  let [age,setAge]=useState("20");
  //   useEffect 


  useEffect(()  => {
    fetch("https://jsonapi.org/")
    .then((Response)=>Response.json())
    .then((data)=>{console.log(data);
    })
    .catch(err)=>{
      console.log(err)
    }
  },[])



  function  changeName(){
    name="Thor";
    
  function  changeName(){
    name="Thor";
    function  changeAge(){
      age="21";
  
  }
  return (
    <div className="App">
    <h1>{name}</h1>
  <h2>{age}</h2>
   <button onClick={changeName}>Click</button>
   <button onClick={changeAge}>Click</button>
      
    
     
    </div>
  
  );
}

export default App;
