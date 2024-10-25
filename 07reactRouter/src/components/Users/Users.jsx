import React from 'react'
import { useParams } from 'react-router-dom'

function Users() {
    const {userId} = useParams()
  return (
    <div className='bg-gray-800 flex justify-center'>
      <h1 className='text-5xl text-white p-5 '>User: {userId}</h1>
    </div>
  )
}

export default Users
