import {useState} from "react"


function App() {
  const [color, setColor] = useState("grey")
  // this make sence but this is too long and a shortcut is to do it right in the onclick.
  // const redo = () => {
  //   setColor("red")
  // }
  // const greeno = () => {
  //   setColor("green")
  // }
  // const yellowo = () => {
  //   setColor("yellow")
  // }
  // const blacko = () => {
  //   setColor("black")
  // }
  // const oliveo = () => {
  //   setColor("olive")
  // }
    

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor:color}}>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
            <button onClick={()=>{setColor("red")}} className=" px-4  py-1 rounded-full text-white" style={{backgroundColor:"red"}}>red</button>
            <button onClick={()=>{setColor("green")}} className=" px-4  py-1 rounded-full text-white" style={{backgroundColor:"green"}}>green</button>
            <button onClick={()=>{setColor("yellow")}} className=" px-4  py-1 rounded-full text-green" style={{backgroundColor:"yellow"}}>yellow</button>
            <button onClick={()=>{setColor("black")}} className=" px-4  py-1 rounded-full text-white" style={{backgroundColor:"black"}}>black</button>
            <button onClick={()=>{setColor("olive")}} className=" px-4  py-1 rounded-full text-white" style={{backgroundColor:"olive"}}>olive</button>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
