import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, updateTodo } from '../features/todo/todoSlice'
import { useEffect } from 'react'

function TodoForm() {

    const[todoText, setTodoText] = useState('')
    const dispatch = useDispatch()
    const editTodo = useSelector(state => state.todoEdit)

    useEffect(() => {
        if (editTodo !== null && editTodo !== undefined) {
            setTodoText(editTodo?.text)
        } else {
            setTodoText('')
        }
        
    }, [editTodo])

    const formHandler = (e) => {
        e.preventDefault()
        if(!todoText) return
        todoText.trim()
        
        if (editTodo !== null && editTodo !== undefined) {
            dispatch(updateTodo({id:editTodo.id, text:todoText}))
        }
        else{
            dispatch(addTodo(todoText))
        }
        setTodoText('')
    }
    
    return(

        <form onSubmit={formHandler} className="flex flex-col sm:flex-row gap-4 justify-end">
            <input
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)} 
                type="text" 
                placeholder="Add Todo"
                className="p-2 rounded border border-black outline-none focus:ring"
            />
            <button 
                type="submit"
                className="bg-indigo-700 hover:bg-indigo-800 cursor-pointer text-white px-4 py-2 rounded transition duration-200 w-full sm:w-auto"
            >
                { (editTodo !== null && editTodo !== undefined) ? 'Update' : 'Add Todo' }
            </button>
        </form>
    )
}

export default TodoForm