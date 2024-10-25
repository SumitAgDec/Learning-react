import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id : 1,
            todo : "Todo message",
            completed : false
        },
    ],
    addTodo : (todo) => {},
    updatetodo : (id, todo)=>{},
    deleteTodo : (id) => {},
    toggleComplete : (id)=>{},
})

export const TodoProvider = TodoContext.Provider

export const UseTodo = () => {
    return useContext(TodoContext)
}