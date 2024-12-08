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
      <h1 className='bg-green-400 text-black p-4 rounded-full'>Tailwind Test</h1>
      <div className='flex gap-4 '>
        <Card username="Naresh's_code" someObj={myObj} />
        <Card username="NaRu" />
      </div>
        

      
    </>
  )
}

export default App
 