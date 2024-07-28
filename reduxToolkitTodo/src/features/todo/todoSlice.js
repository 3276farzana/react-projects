//to make reducer method; in toolkit we say it slice
//nanoid to generate unique id
import {createSlice,nanoid} from '@reduxjs/toolkit'

//initialstate can be both array and object
const initialState={
    todos:[{id:1,
        text:'helloe'
    }]
}
//to create slice
//it's take object

export const todoSlice=createSlice({
    //1st you give name
    name:'todo',
    //all slice have a initial state
    initialState,
    //have to make reducers, it take property inside it will be fuction
    reducers:{
        // addTodo:(state,action)=>{} //in reducer fucntion allways have access 2 things. state=which is the initialstate or the current state values, action=sometimes you get or need value those will get from acess
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        }
    }
})

export const {addTodo,removeTodo}=todoSlice.actions
export default todoSlice
