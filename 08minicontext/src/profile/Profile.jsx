import React from 'react'
import { useState, useContext } from 'react'
import userContext from '../context/userContext'

function Profile() {
    const {user} = useContext(userContext)
  return (
    <div>
      <h1>Welcome {user?.userName} </h1>
    </div>
  )
}

export default Profile
