import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username:"Naresh",
    age:22
  }

  return (
    <>
      <Card/>
      <h1 className='bg-green-400 text-black p-4 h-[400px] w-[1000px]'></h1>
      
        

      
    </>
  )
}

export default App
 