function TodoList(){

    return(
        <ul>
            <li className='bg-gray-300 mb-2 p-2 rounded flex justify-between'>
              <div className='pt-1'>Hello</div>
              <div>
                <button 
                  className='bg-gray-800 hover:bg-gray-700 mx-2 p-2 rounded text-white cursor-pointer'
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
                  className='bg-gray-800 hover:bg-gray-700 p-2 rounded text-red-600 cursor-pointer'
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
    )
}

export default TodoList