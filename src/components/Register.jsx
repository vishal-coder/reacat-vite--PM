import React from 'react'
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  return (
    <div className=" w-full max-w-xs rounded bg-indigo-100 p-5  flex min-h-full  flex-col  m-auto justify-center items-center"> 
    <div class="m-auto w-full max-w-xs rounded bg-indigo-100 p-5">
    <div>
        <label class="mb-2 block text-center text-2xl" for="username">Register Here</label>
      </div>
      <form>
        <div>
          <label class="mb-2 block" for="username">Username</label>
          <input class="mb-6 w-full border-b-2 border-indigo-500 p-2 outline-none focus:bg-indigo-200" type="text" name="username" />
        </div>
        <div>
          <label class="mb-2 block" for="password">Password</label>
          <input class="mb-6 w-full border-b-2 border-indigo-500 p-2 outline-none focus:bg-indigo-200" type="password" name="password" />
        </div>
        <div className='flex justify-around '>
        <button className="mb-6  rounded bg-indigo-700 px-4 py-2 font-bold text-white hover:bg-pink-700">Register</button>
        <button className="mb-6  rounded bg-indigo-700 px-4 py-2 font-bold text-white hover:bg-pink-700">Reset</button>


        </div>
      </form>

    </div>
  </div>
  
  )
}


export default Register