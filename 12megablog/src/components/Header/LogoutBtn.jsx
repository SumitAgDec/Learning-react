import React from 'react'
import authService from '../../appwrite/auth.js'
import { logOut } from '../../store/authSlice.js'
import { useDispatch } from 'react-redux'

function LogoutBtn() {
    const dispatch = useDispatch()
    const clickHandler = () => {
        authService.logOut().then(()=>{
            dispatch(logOut())
        })
    }
  return (
    <button className='inital-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
        LogoutBtn
    </button>
  )
}

export default LogoutBtn
