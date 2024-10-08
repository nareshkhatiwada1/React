import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15) ;

  //let counter = 5;
  const addValue = () => {
    //counter =counter+ 1;
    if(counter==20){
    setCounter(20)
    }else{
      setCounter(counter+1)
    }
  }
  const removeValue = () => {
    //counter =counter+ 1;
    if(counter==0){
      setCounter(0)
    }
    else{
      setCounter(counter-1)
    }
    
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button><br /> <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
