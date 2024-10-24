import { useCallback, useEffect, useRef, useState } from 'react'
// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()"

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length, numberAllowed, charAllowed, setPassword])

  const passwordRef = useRef(null);

  const clickBtnToSelect = () => {
      passwordRef.current?.select();
      // passwordRef.current?.setSelectionRange(0, 10);
      window.navigator.clipboard.writeText(password)
  }

  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllowed, charAllowed])

  return (
    <div className='bg-gray-700 p-10 rounded-xl w-100 text-white m-5'>
      <h2 className='text-2xl mb-3'>Password Generator</h2>
      <div className='flex gap-4'>
        <input 
        type="text"
        value={password} 
        className='px-2 py-1 bg-white rounded-xl w-full text-black'
        placeholder='Password'
        ref={passwordRef}
        />
        <button onClick={clickBtnToSelect} className='bg-blue-700 px-2 py-1 rounded-xl'>Copy</button>
      </div>

      <div className='flex gap-12 mt-3'>
        <div className='flex gap-2 items-center'>
          <input 
          type="range" 
          min={4}
          max={100}
          value={length}
          onChange={(e) => setLength(e.target.value)}
          />
          <label>Lenght: {length}</label>
        </div>

        <div className='flex gap-2 items-center'>
          <input 
          type="checkbox"
          checked={numberAllowed}
          onChange={() => setNumberAllowed(prev => !prev)}
          />
          <label>Number</label>
        </div>

        <div className='flex gap-2 items-center'>
          <input 
          type="checkbox"
          checked={charAllowed}
          onChange={() => setCharAllowed(prev => !prev)}
          />
          <label>Special Character</label>
        </div>

      </div>
    </div>
  )
}

export default App
