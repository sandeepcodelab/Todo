import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {

  return (
    <>
      <div className="bg-gray-900 min-h-screen flex flex-col items-center px-4 py-10">
        <div className="bg-white w-full sm:max-w-md md:max-w-2xl p-4 sm:p-6 rounded-lg">
          <div className='flex flex-col sm:flex-row gap-4 sm:justify-between'>
            <h1 className='text-2xl md:text-3xl font-bold text-center'>Todos</h1>
            <TodoForm />
          </div>
          <hr className='mt-8 mb-5 text-gray-400 '/>
          <TodoList />
        </div>
      </div>
    </>

  )
}

export default App
