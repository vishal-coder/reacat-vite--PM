import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  return (
    <div className=" my-2 min-w-fit w-full max-w-xs rounded bg-indigo-100  flex min-h-full  flex-col  m-auto justify-center items-center"> 
    <div class="m-auto w-full max-w-xs rounded bg-indigo-100 p-5">
    <div>
        <label class="mb-2 block text-center text-2xl" htmlFor="username">Register Here</label>
      </div>
      <form>
        <div>
          <label class="mb-2 block" htmlFor="username">Name</label>
          <input class="mb-6 w-full border-b-2 border-indigo-500 p-2 outline-none focus:bg-indigo-200" type="text" name="username" />
        </div>
        <div>
          <label class="mb-2 block" htmlFor="designation">Designation</label>
          <input class="mb-6 w-full border-b-2 border-indigo-500 p-2 outline-none focus:bg-indigo-200" type="password" name="password" />
        </div>
        <div>
          <label class="mb-2 block" htmlFor="email">Email</label>
          <input class="mb-6 w-full border-b-2 border-indigo-500 p-2 outline-none focus:bg-indigo-200" type="password" name="password" />
        </div>
        <div>
          <label class="mb-2 block" htmlFor="password">Password</label>
          <input class="mb-6 w-full border-b-2 border-indigo-500 p-2 outline-none focus:bg-indigo-200" type="password" name="password" />
        </div>
        
        <div className='flex justify-around '>
        <button className="mb-6  rounded bg-indigo-700 px-4 py-2 font-bold text-white hover:bg-pink-700">Register</button>
        <button className="mb-6  rounded bg-indigo-700 px-4 py-2 font-bold text-white hover:bg-pink-700">Reset</button>


        </div>
      </form>
      <footer>
      <Link className="float-right hover:underline  text-sm text-blue-600 hover:text-pink-700" to='/login'>Aleady Registered ?</Link>
        <a  href="#"></a>
      </footer>
    </div>
  </div>
  
  )
}


export default Register