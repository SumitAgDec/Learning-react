import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  let addcount = ()=>{
    setCount(count + 1)
  }

  let removeCount = ()=>{
    if (count === 0) {
      count
    }
    else {
      setCount(count - 1)
    }
  }
  

  return (
    <>
      <h1>Number  is {count}</h1>
      <button onClick={addcount}>Add count</button>
      <br/>
      <button onClick={removeCount}>Remove count</button>
    </>
  )
}

export default App
