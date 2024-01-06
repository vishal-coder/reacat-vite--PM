import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate();
  return (
    <div>
    <nav className="relative flex w-full flex-wrap items-center justify-between bg-indigo-700 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 lg:py-4 mt-0">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div className="ml-2 w-[30%] text-xl text-neutral-800 dark:text-neutral-200  hover:text-pink-700 cursor-pointer" >
          <Link to='/'>Home</Link></div>
        <div className="ml-2 flex flex-grow items-center justify-around text-xl" href="#">
          <NavLink  to={"project"}className={({isActive})=>`ml-2 text-xl  ${isActive ? "text-pink-700" : "dark:text-neutral-200"}`} href="#">View Project</NavLink>
          <NavLink  to={"add"}className={({isActive})=>`ml-2 text-xl  ${isActive ? "text-pink-700" : "dark:text-neutral-200"}`} href="#">Add Project</NavLink>
          <NavLink to={"update"} className={({isActive})=>`ml-2 text-xl ${isActive ? "text-pink-700": "dark:text-neutral-200"}`} href="#">Update Project</NavLink>
          <NavLink to={"delete"} className={({isActive})=>`ml-2 text-xl ${isActive ? "text-pink-700": "dark:text-neutral-200"}`} href="#">Delete Project</NavLink>
        </div>
        <div className="ml-5 flex w-[30%] items-center justify-end pr-10">
          <button className="mr-4 rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-pink-700" onClick={()=>navigate("/login")}>Login</button>
          <button className="rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-pink-700" onClick={()=>navigate("/register")}>Register</button>
          {/* <button className="ml-[50%] rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-900">Logout</button> */}
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Header