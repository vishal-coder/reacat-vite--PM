import React from 'react'
import { Link } from 'react-router-dom'

function Project() {

  const arr = [
    "Project 1",
    "Project Project Project 1",
    "Project 1",
    "Project Project 1",
    "Project Project Project Project Project 1",
    "Project Project Project 1",
    "Project 1",
    "Project Project 1",
    "Project Project Project Project Project 1 Project Project Project Project Project 1Project Project Project Project Project 1 Project Project Project Project Project 1",
    "Project Project Project 1",
    "Project 1",
    "Project Project 1",
    "Project Project Project Project Project 1",
    "Project Project Project 1",
    "Project 1",
    "Project Project 1",
    "Project Project Project Project Project 1",
    "Project Project 1",
    "Last Project"
  ]
  return (
    <>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg mt-6 max-h-full  overflow-hidden">
        <div className="px-4  ">
          <h1 className="text-gray-800 font-bold text-2xl uppercase text-center ">Project Task List</h1>
        </div>
        {/* <form className="w-full max-w-sm mx-auto px-4 py-2">
    <div className="flex items-center border-b-2 border-teal-500 py-2">
        <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text" placeholder="Add a task"/>
        <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button">
            Add
        </button>
    </div>
</form> */}
        <ul className=" px-4 overflow-y-scroll max-h-96 mt-2 border-t-2 border-indigo-500">
          {arr.map((item) => {
            return (
              <li className="py-4 border-b-2 border-indigo-200">
                <div className="flex items-center">

                  <label for="todo1" className="  text-gray-900 flex flex-row justify-around">
                    <span className=" text-blue-400  " tip><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                      <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                    </svg> </span>
                    <span className=" text-red-600 pl-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                    </svg></span>    
                    <span className="text-lg font-medium ml-2 hover:text-pink-500"> <Link to = {`/project/${item}`}> {item}</Link></span>
                    <span className="text-xs font-light text-gray-400 ml-2">Created On 4/1/23</span>
                  </label>
                </div>
              </li>
            )
          })}


        </ul>
      </div>
    </>
  )
}

export default Project