import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../services/UseFecth";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setprojectList } from "../features/projectSlice";

function Project() {
  const dispatch = useDispatch();

  const [projects, setProjects] = useState(null);
  const { data, isLoading, err, fetchData } = useFetch();
  const { userToken } = useSelector((state) => state.auth);

  const getProjectList = async (e) => {
    try {
      const requestOptions = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${userToken}`,
        },       
      };
      await fetchData("project/get", requestOptions);      
    } catch (err) {
      if (err) {
        console.log("err", err);
        setErrors(errors);
      }
    }
  };

  useEffect(() => {
    if (err) {
      console.log("err in ueseeffect err",err)
      const jsonData = JSON.parse(err.message);
      toast.error(jsonData.message);
    }
    
  }, [ err]);

  useEffect(() => {
    if (data) {
      if(data && data.length > 0){
        setProjects(data);
        dispatch(setprojectList(data));
      }
    }    
  }, [data]);

  useEffect(() => {
    getProjectList();
  }, []);

  if (isLoading) {
    return <div className="text-center">loading data..</div>;
  }

  return (
    <>
      <div className="max-w-md w-3/4 mx-auto bg-white shadow-lg rounded-lg mt-6 max-h-full  overflow-hidden">
        <div className="px-4  ">
          <h1 className="text-gray-800 font-bold text-2xl uppercase text-center ">
            Project List
          </h1>
        </div>
        {Array.isArray(data) && data.length == 0 && (
          <p className="text-center">
            No project found. Please try{" "}
            <Link className="text-blue-400" to="/add">
              adding one
            </Link>
          </p>
        )}
   
        <ul className=" px-4 overflow-y-scroll max-h-96 mt-2 border-t-2 border-indigo-500">
          {projects &&
            projects.map((item) => {
              return (
                <li  key = {item.id}className ={`py-4 px-2 border-b-2 border-indigo-200 ${item.is_completed && "bg-green-400"}`} >
                  <div className="flex items-center">
                    <div className=" w-full text-gray-900 flex ">
                      
                      {/* <div className=" text-red-600 pl-2  cursor-pointer" onClick={(e)=> handleDeleteProject(item.id)}>
                       
                        <span className=" text-red-600">
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6 "
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </div> */}
                      <div className="text-lg font-medium ml-2 hover:text-pink-500 flex flex-item flex-1">
                        {" "}
                        <Link to={`/project/${item}`}> {item.name}</Link>
                      </div>
                      <div className=" mr-0 text-right text-lg font-light text-black ml-2">
                        {item.is_completed ? "Completed" : "Pending"}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}

export default Project;
