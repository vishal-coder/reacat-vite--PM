import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  return (
    <div className=" w-full max-w-xs rounded bg-indigo-100 p-5  flex min-h-full  flex-col  m-auto justify-center items-center"> 
    {/* <div className="m-auto w-full max-w-xs rounded bg-indigo-100 p-5"> */}
    <div>
        <label className="mb-2 block text-center text-2xl" htmlFor="username">Please Login Here</label>
      </div>
      <form>
        <div>
          <label className="mb-2 block" htmlFor="username">Username</label>
          <input className="mb-6 w-full border-b-2 border-indigo-500 p-2 outline-none focus:bg-indigo-200" type="text" name="username" />
        </div>
        <div>
          <label className="mb-2 block" htmlFor="password">Password</label>
          <input className="mb-6 w-full border-b-2 border-indigo-500 p-2 outline-none focus:bg-indigo-200" type="password" name="password" />
        </div>
        <div>
          <button className="mb-6 w-full rounded bg-indigo-700 px-4 py-2 font-bold text-white hover:bg-pink-700">Login</button>

        </div>
      </form>
      <footer>
      <Link className="float-right text-sm text-indigo-700 hover:text-pink-700 hover:underline " to='/register'>New User ?</Link>
        <a  href="#"></a>
      </footer>
    {/* </div> */}
  </div>
  
  )
}

export default Login