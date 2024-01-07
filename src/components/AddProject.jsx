import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import useFetch from "../services/UseFecth";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addprojectToList } from "../features/projectSlice";

function AddProject() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, isLoading, err, fetchData } = useFetch();
  const [projectName, setProjectName] = useState("");
  const { userToken } = useSelector((state) => state.auth);
  const { projectList } = useSelector((state) => state.project);

  if (!userToken) {
    navigate("/");
  }

  const addProject = async (e) => {
    e.preventDefault();
    try {
      if (!projectName) {
        toast.warning("Please Enter Project Name");
        return;
      }    

      const requestOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: projectName }),
      };
      setProjectName((prev)=> prev = "");
      await fetchData("project", requestOptions);
    } catch (err) {
      if (err) {
        console.log("err", err);
        setErrors(errors);
      }
    }
  };
  useEffect(() => {
    if (err) {
      const jsonData = JSON.parse(err.message);
      toast.error(jsonData.message);
    }
    if (data) {      
      dispatch(addprojectToList(data));
      toast.success("Project Added Successfully");
    }
  }, [data, err]);
  return (
    <div className=" w-2/6 rounded bg-indigo-100 p-5  flex min-h-full  flex-col  m-auto justify-center items-center">
      <div>
        <label className="mb-2 block text-center text-2xl" htmlFor="username">
          Please Enter Your Project Name
        </label>
      </div>
      <form className="w-full flex justify-center items-center flex-col">
        <div className=" w-full text-center">
          <input
            className=" m-auto text-center mt-5 mb-6 w-4/6 border-b-2 border-indigo-500 p-2 outline-none focus:bg-indigo-200"
            type="text"
            name="name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </div>
        <div className="w-full text-center">
          <button
            className="mb-6 w-2/6  rounded bg-teal-500 hover:bg-teal-600 px-4 py-2 font-bold text-white "
            onClick={(e) => addProject(e)}
          >
            Add
          </button>
        </div>
      </form>

      {/* </div> */}
    </div>
  );
}
export default AddProject;
