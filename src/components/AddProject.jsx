import React from 'react'
import { useNavigate } from 'react-router-dom';

function AddProject() {
  const navigate = useNavigate();
  return (
    <div className=" w-2/6 rounded bg-indigo-100 p-5  flex min-h-full  flex-col  m-auto justify-center items-center"> 
    {/* <div className="m-auto w-full max-w-xs rounded bg-indigo-100 p-5"> */}
    <div>
        <label className="mb-2 block text-center text-2xl" htmlFor="username">Please Enter Your Project Name</label>
      </div>
      <form className='w-full flex justify-center items-center flex-col'>
        <div className=' w-full text-center'>
          
          <input className=" m-auto text-center mt-5 mb-6 w-4/6 border-b-2 border-indigo-500 p-2 outline-none focus:bg-indigo-200" type="text" name="name" />
        </div>       
        <div className='w-full text-center'>
          <button className="mb-6 w-2/6  rounded bg-teal-500 hover:bg-teal-600 px-4 py-2 font-bold text-white ">Add</button>

        </div>
      </form>
     
     
    {/* </div> */}
  </div>
  
  )
}
export default AddProject