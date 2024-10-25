import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/userContextProvider'
import Login from './login/login'
import Profile from './profile/profile'


function App() {
  return (
    <UserContextProvider>
      <h1>Context Api</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
