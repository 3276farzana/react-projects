import { createContext, useContext } from "react";
export const todoContext=createContext({
    todos:[
        {
            id:1,
            todo:'todo message',
            completed:false
        },
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},//editting todo
    deletTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const TodoProvider= todoContext.Provider
export function useTodo(){
    return(
        useContext(todoContext)
    )
}