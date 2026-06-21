import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
  todos: [
    {
      id: 1,
      text: "Have You Done Your Reduce ToolKit Todo ?",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state,action) => {
        const todo = {
            id:nanoid(),
            text:action.payload
        }
        state.todos.push(todo)
    },
    removeTodo: (state,action) => {
        state.todos = state.todos.filter((prevTodo)=> prevTodo.id !== action.payload)
    },
    updateTodo:(state,action)=>{ 
        state.todos = state.todos.filter((prevTodo)=> prevTodo.id === action.payload ? action.payload.text : prevTodo.text)
    }
  },
});


export const {addTodo,removeTodo,updateTodo} = todoSlice.actions

export default todoSlice.reducer