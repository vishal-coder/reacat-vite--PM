import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../services/UseFecth";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProjectFromList,
  setprojectList,
  updateProjectStatus,
} from "../features/projectSlice";

function UpdateProject() {
  const dispatch = useDispatch();

  const [projects, setProjects] = useState(null);

  const { data, isLoading, err, fetchData } = useFetch();
  const { userToken } = useSelector((state) => state.auth);
  const { projectList } = useSelector((state) => state.project);

  const handleUpdateProject = async (id) => {
    try {
      
      const requestOptions = {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ "id": id, "is_completed": true }),
      };
      await fetchData(`project`, requestOptions);

    } catch (err) {
      if (err) {
        console.log("err", err);
      }
    }
  };
  if (err) {
    console.log("errerrerr--err",err)
    const jsonData = JSON.parse(err.message);
    toast.error(jsonData.message);
  }

  useEffect(() => {
    if (data) {
      dispatch(updateProjectStatus(data.id));
    }
  }, [data]);
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
        {Array.isArray(projectList) && projectList.length == 0 && (
          <p className="text-center">
            No project found. Please try{" "}
            <Link className="text-blue-400" to="/add">
              adding one
            </Link>
          </p>
        )}

        <ul className=" px-4 overflow-y-scroll max-h-96 mt-2 border-t-2 border-indigo-500">
          {projectList &&
            projectList.map((item) => {
              return (
                <li
                  key={item.id}
                  className={`py-4 px-2 border-b-2 border-indigo-200 ${
                    item && item.is_completed && "bg-green-400"
                  }`}
                >
                  <div className="flex items-center">
                    <div className=" w-full text-gray-900 flex ">
                      <div className="text-lg font-medium ml-2 hover:text-pink-500 flex flex-item flex-1">
                        {" "}
                        <Link to={`/project/${item}`}> {item.name}</Link>
                      </div>
                      <div className=" mr-0 text-right text-lg font-light text-black ml-2">
                        {item.is_completed ? "Completed" : "Pending"}
                      </div>
                      <div className=" mr-0 text-right text-lg font-light text-black ml-2">
                       {!item.is_completed && <button
                          className="  rounded bg-teal-500 hover:bg-teal-600 px-4 font-bold text-white "
                          onClick={(e) => handleUpdateProject(item.id)}
                        >
                          Change Status
                        </button>} 
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

export default UpdateProject;
