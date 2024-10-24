import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <h1 className='rounded-3xl bg-gray-900 p-8 shadow-2xl ring-1 ring-gray-900/10 mb-4'>Tailwind test</h1>

      <Card amount="149" />

      <Card/>
      
    
    </>
  )
}

export default App
