import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const add = ()=>{
    if(count <20)
      setCount(count+1)
  }
  const remove = ()=>{
    if(count>0)
      setCount(count-1)
  }
  return (
    <>
      <h1>This is counter</h1>
      <h2>Counter : {count}</h2>
      <button onClick={add}>Add</button>
      <button onClick={remove}>Substract</button>
    </>
  )
}

export default App
