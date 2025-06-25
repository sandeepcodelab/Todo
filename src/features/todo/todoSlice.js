import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{id: 1, text: "Test todo"}]
}

const todoSclice = createSlice({
    name: 'TODOS',
    initialState,
    reducers: {
        addTodo(state, action){
            const addNewTodo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(addNewTodo)
        },
        updateTodo(state, action){
            const editTodo = state.todos.find((todo) => todo.id === action.payload.id)
            if(editTodo){
                editTodo.text = action.payload.text
            }
        },
        removeTodo(state, action){
            state.todos.filter((todo) => todo.id !== action.payload)
        }

    }
})

export const { addTodo, updateTodo, removeTodo} = todoSclice.actions
export default todoSclice.reducer