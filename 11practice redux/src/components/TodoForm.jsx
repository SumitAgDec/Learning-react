import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../reducers/todoSlice';
function TodoForm() {
    const [value, setValue] = useState("")
    const dispatch = useDispatch()
    const addFormData = (e) => {
        e.preventDefault();
        if(value.trim()){
            dispatch(addTodo(value))
            setValue("")
        }
    }


  return (
    <div>
      <form onSubmit={addFormData} className="flex">
        <input 
        type="text"
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        placeholder='Write Todo'
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default TodoForm
