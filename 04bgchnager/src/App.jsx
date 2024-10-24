import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor : color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-2 px-2'>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl p-3">
          <button onClick={()=> setColor("red")} className='outline-none px-4 bg-red-500 text-white rounded-full'>Red</button>
          <button onClick={()=> setColor("green")} className='outline-none px-4 bg-green-500 text-white rounded-full'>Green</button>
          <button onClick={()=> setColor("blue")} className='outline-none px-4 bg-blue-500 text-white rounded-full'>Blue</button>
          <button onClick={()=> setColor("lavender")} className='outline-none px-4 bg-red-500 text-white rounded-full'>Lavender</button>
          <button onClick={()=> setColor("olive")} className='outline-none px-4 bg-red-500 text-white rounded-full'>Olive</button>
        </div>
      </div>
    </div>
  )
}

export default App
