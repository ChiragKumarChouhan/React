import { useState } from 'react'//here we used hook by import
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

 let [counter,setCounter]=useState(10);


const addValue=()=>{
  // counter =counter+1;
  if(counter<20){
console.log("value added",Math.random(),counter);
//math.random is used to genrate a unique value evry time

setCounter(counter+1);

}}
const removeValue=()=>{
  // counter =counter+1;
  if(counter>0){
console.log("value removed",Math.random(),counter);
//math.random is used to genrate a unique value evry time

setCounter(counter-1);

}}

  return (
    <>
<h1>
  chai or react
</h1>
<h2>
counter value :{counter}
</h2>
<button
onClick={addValue}>
  Add value
</button>
<br />
<button
onClick={removeValue}>
  remove value
</button>
    </>
  )
}

export default App
