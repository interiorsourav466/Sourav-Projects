/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
// let counter=15
let [counter,setCounter]=useState(15)
const addValue=()=>{
 
 
   setCounter(prevCounter=>prevCounter+1)
   setCounter(prevCounter=>prevCounter+1)
   setCounter(prevCounter=>prevCounter+1)
   setCounter(prevCounter=>prevCounter+1)
}
const removeValue=()=>{
  setCounter(counter-1 )
}
  return (
    <>
     <h1>Chai aur code</h1>
     <h2>Counter value: {counter}</h2>
     <button onClick={addValue}
     >Add value {counter}</button>
     <br />
     <button onClick={removeValue}
     >remove value{counter}</button>
     <p>footer: {counter}</p>

    </>
  )
}

export default App
