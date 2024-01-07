import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { string, object } from "yup";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../services/UseFecth";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setIsLoggedIn, setUserToken } from "../features/authSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const { data, isLoading, err, fetchData } = useFetch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({});
  };

  const validationSchema = yup.object().shape({
    username: string().email().required(),
    password: string().required(),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      const formBody = Object.keys(formData)
        .map(
          (key) =>
            encodeURIComponent(key) + "=" + encodeURIComponent(formData[key])
        ).join("&");

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formBody,
      };
      await fetchData("user/login", requestOptions);
    } catch (err) {
      if (err) {
        console.log("err", err);
        err.inner.forEach((error) => {
          errors[error.path] = error.message;
          setErrors({ ...errors, [error.path]: error.message });
        });
        setErrors(errors);
      }
    }
  }; //end of handlesubmit

  useEffect(() => {
    if (data) {
      dispatch(setUserToken(data.access_token));
      dispatch(setIsLoggedIn(true));
      toast.success("Logged in Successfully");
      navigate("/project");
    }

    if (err) {
      const jsonData = JSON.parse(err.message);
      toast.error(jsonData.message);
    }
  }, [data, err]);
  return (
    <div className=" w-full max-w-xs rounded bg-indigo-100 p-5  flex min-h-full  flex-col  m-auto justify-center items-center">
      {/* <div className="m-auto w-full max-w-xs rounded bg-indigo-100 p-5"> */}
      <div>
        <label className="mb-2 block text-center text-2xl" htmlFor="username">
          Please Login Here
        </label>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="mb-2 block" htmlFor="username">
            Username
          </label>
          <input
            className="mb-6 w-full border-b-2 border-indigo-500 p-2 outline-none focus:bg-indigo-200"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <p className="text-red-600">{errors.username}</p>}
        </div>
        <div>
          <label className="mb-2 block" htmlFor="password">
            Password
          </label>
          <input
            className="mb-6 w-full border-b-2 border-indigo-500 p-2 outline-none focus:bg-indigo-200"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="text-red-600">{errors.password}</p>}
        </div>
        <div>
          <button className="mb-6 w-full rounded bg-indigo-700 px-4 py-2 font-bold text-white hover:bg-pink-700">
            Login
          </button>
        </div>
      </form>
      <footer>
        <Link
          className="float-right text-sm text-indigo-700 hover:text-pink-700 hover:underline "
          to="/register"
        >
          New User ?
        </Link>
        <a href="#"></a>
      </footer>
      {/* </div> */}
    </div>
  );
}

export default Login;
