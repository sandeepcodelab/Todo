import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{id: 1, text: "Test todo"}],
    todoEdit: null
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
        editTodo(state, action){
            state.todoEdit = action.payload

        },
        updateTodo(state, action){
            const update = state.todos.find((todo) => todo.id === action.payload.id)
            if(update){
                update.text = action.payload.text
                state.todoEdit = null
            }
        },
        removeTodo(state, action){
            if(state.todoEdit !== null){
                if(state.todoEdit.id === action.payload){
                    state.todoEdit = null
                }
            }
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }

    }
})

export const { addTodo, editTodo, updateTodo, removeTodo} = todoSclice.actions
export default todoSclice.reducer