
function TodoForm() {
    
    return(

        <form className="flex flex-col sm:flex-row gap-4 justify-end">
            <input 
                type="text" 
                placeholder="Add Todo"
                className="p-2 rounded border border-black outline-none focus:ring focus:shadow-xl  focus:shadow-green-500/20"
            />
            <button 
                type="submit"
                className="bg-indigo-700 hover:bg-indigo-800 cursor-pointer text-white px-4 py-2 rounded transition duration-200 w-full sm:w-auto"
            >
                Add Todo
            </button>
        </form>
    )
}

export default TodoForm