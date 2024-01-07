import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { string, object } from "yup";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../services/UseFecth";
import { toast } from "react-toastify";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [errors, setErrors] = useState({});
  const { data, isLoading, err, fetchData } = useFetch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({});
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required().min(2).max(20),
    designation: string().required().min(2).max(20),
    email: string().email().required(),
    password: string().required().min(6).max(15),
    confirmpassword: string()
      .required()
      .min(6)
      .max(15)
      .oneOf(
        [yup.ref("password"), null],
        "Password and Confirm Password must match"
      ),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    try {
      await validationSchema.validate(formData, { abortEarly: false }); // Validate all fields
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      };

      await fetchData("user", requestOptions);
      // const requestOptions = {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // };

      // const response = await fetch("http://localhost:8000/user", requestOptions);
      // const data = await response.json();

      // if (isLoading) return <div>Submitting...</div>;
      // if (error) return <div>Error: {error.message}</div>;
    } catch (err) {
      if (err) {
        err.inner.forEach((error) => {
          errors[error.path] = error.message;
          setErrors({ ...errors, [error.path]: error.message });
        });
        setErrors(errors);
      }
    }

    //  const { data, isLoading, error } = useFetch("user");
  }; //end of handlesubmit

  const handleReset = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      designation: "",
      email: "",
      password: "",
      confirmpassword: "",
    });
    setErrors({}); // Clear errors
  };
  useEffect(() => {
    if (data) {
      toast.success("You Have Registered Successfully");
      toast.success("Please Login to continue");
      navigate("/login");
    }

    if (err) {
      const jsonData = JSON.parse(err.message);
      toast.error(jsonData.message);
    }
  }, [data, err]);

  return (
    <div className=" my-2 min-w-fit w-full max-w-xs rounded bg-indigo-100  flex min-h-full  flex-col  m-auto justify-center items-center">
      <div className="m-auto w-full max-w-xs rounded bg-indigo-100 p-5">
        <div>
          <label className="mb-2 block text-center text-2xl" htmlFor="username">
            Register Here
          </label>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block" htmlFor="username">
              Name
            </label>
            <input
              className="mb-6 w-full border-b-2 border-indigo-500 p-2 outline-none focus:bg-indigo-200"
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-600">{errors.name}</p>}
          </div>
          <div>
            <label className="mb-2 block" htmlFor="designation">
              Designation
            </label>
            <input
              className="mb-6 w-full border-b-2 border-indigo-500 p-2 outline-none focus:bg-indigo-200"
              type="text"
              name="designation"
              placeholder="Your Designation"
              value={formData.designation}
              onChange={handleChange}
            />
            {errors.designation && (
              <p className="text-red-600">{errors.designation}</p>
            )}
          </div>
          <div>
            <label className="mb-2 block" htmlFor="email">
              Email
            </label>
            <input
              className="mb-6 w-full border-b-2 border-indigo-500 p-2 outline-none focus:bg-indigo-200"
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-600">{errors.email}</p>}
          </div>
          <div>
            <label className="mb-2 block" htmlFor="password">
              Password
            </label>
            <input
              className="mb-6 w-full border-b-2 border-indigo-500 p-2 outline-none focus:bg-indigo-200"
              type="password"
              name="password"
              placeholder="Your Password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-600">{errors.password}</p>
            )}
          </div>
          <div>
            <label className="mb-2 block" htmlFor="password">
              Confirm Password
            </label>
            <input
              className="mb-6 w-full border-b-2 border-indigo-500 p-2 outline-none focus:bg-indigo-200"
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
              value={formData.confirmpassword}
              onChange={handleChange}
            />
            {errors.confirmpassword && (
              <p className="text-red-600">{errors.confirmpassword}</p>
            )}
          </div>

          <div className="flex justify-around ">
            <button className="mb-6  rounded bg-indigo-700 px-4 py-2 font-bold text-white hover:bg-pink-700">
              Register
            </button>
            <button
              className="mb-6  rounded bg-indigo-700 px-4 py-2 font-bold text-white hover:bg-pink-700"
              onClick={(e) => handleReset(e)}
            >
              Reset
            </button>
          </div>
        </form>
        <footer>
          <Link
            className="float-right hover:underline  text-sm text-blue-600 hover:text-pink-700"
            to="/login"
          >
            Aleady Registered ?
          </Link>
          <a href="#"></a>
        </footer>
      </div>
    </div>
  );
}

export default Register;
