/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj={
    username:"Sourav",
    age:21
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4
      rounded-xl mb-4'>Tailwind test</h1>
      <Card username= "chaiaurcode" btnText="Click me"/>
      <Card username="Sourav" />

    </>
  )
}

export default App
