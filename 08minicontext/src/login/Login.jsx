import React from 'react'
import { useState, useContext } from 'react'
import userContext from '../context/userContext'

function Login() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(userContext)

    const hendleUser = (e) => {
        e.preventDefault();
        setUser({userName, password})
    }
  return (
    <div>
      <input 
      type="text"
      placeholder='Enter user name'
      value={userName}
      onChange={(e)=> setUserName(e.target.value)}
      />
      <input 
      type="text" 
      placeholder='Enter password'
      value={password}
      onChange={(e)=> setPassword(e.target.value)}
      />
      <button onClick={hendleUser}>Submit</button>
    </div>
  )
}

export default Login
