import './App.css'

function App() {

  return (
    <>
      <div className="bg-gray-900 min-h-screen flex flex-col items-center px-4 py-10">
        <div className="bg-white w-full sm:max-w-md md:max-w-2xl p-4 sm:p-6 rounded-lg">
          <div className='flex flex-col sm:flex-row gap-4 sm:justify-between'>
            <h1 className='text-2xl md:text-3xl font-bold text-center'>Todos</h1>
            <form className="flex flex-col sm:flex-row gap-4 justify-end">
              <input 
                type="text" 
                placeholder="Add Todo"
                className="p-2 rounded border border-black outline-none focus:ring focus:shadow-xl  focus:shadow-green-500/20"
              />
              <button 
                type="submit"
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition duration-200 w-full sm:w-auto"
              >
                Add Todo
              </button>
            </form>
          </div>
          <hr className='mt-8 mb-5'/>
          <ul>
            <li className='bg-[#8fb996] mb-2 p-2 rounded flex justify-between'>
              <div className='pt-1'>Hello</div>
              <div>
                <button 
                  className='bg-[#1b4332] mx-2 p-2 rounded text-green-600 hover:text-green-700 cursor-pointer'
                  title='Edit'
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-5 h-5 text-green-600 hover:text-green-700 cursor-pointer"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M16.862 3.487a2.25 2.25 0 113.182 3.182L7.5 19.313 3 21l1.688-4.5L16.862 3.487z" 
                    />
                  </svg>
                </button>
                <button 
                  className='bg-[#1b4332] p-2 rounded text-red-600 hover:text-red-700 cursor-pointer'
                  title='Delete'
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-5 h-5 text-red-500 hover:text-red-700 cursor-pointer"
                  >
                    <path 
                      d="M5.5 6.5H18.5M9 6.5V5C9 4.17157 9.67157 3.5 10.5 3.5H13.5C14.3284 3.5 15 4.17157 15 5V6.5M10 10V17M14 10V17M6 6.5L6.8 19.1C6.88989 20.4206 7.9794 21.5 9.3 21.5H14.7C16.0206 21.5 17.1101 20.4206 17.2 19.1L18 6.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>

  )
}

export default App
