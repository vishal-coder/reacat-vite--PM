import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="flex w-full flex-row items-center justify-center  px-3 py-3 bottom-0 sticky ">
    <div>
      <div className="flex w-full flex-row items-center justify-center bg-indigo-00 px-3 py-3 text-7xl">
        Welcome To Project Management Tool
      </div>
      <div className=" mt-5 flex w-full flex-row items-center justify-center bg-indigo-00 px-3 py-3 text-2xl">
        Please &nbsp; <span className=" mb-2 font-medium text-indigo-700 underline dark:text-indigo-500 hover:no-underline hover:text-pink-700 cursor-pointer"> <Link to='/register'>Register</Link> </span>&nbsp; To Start Using It
      </div>
    </div>
  </div>
  )
}

export default Home