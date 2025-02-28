import { useForm } from "react-hook-form";
import React from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/authSlice";
import Manage from "../Manage";

const Login = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const [loginError ,setloginError]=React.useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    try{
      const response=await axios.post('http://localhost:3000/api/auth/login',data)
      localStorage.setItem("token",response.data.token) // saving token into the local storage
      dispatch(login({token:response.data.token,user:response.data.user}))
      navigate('/todos')
    }
    catch(error){
      setloginError(error.response?.data?.error||'Login faild please try again')
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[40%] my-30 w-fit mx-auto  rounded-lg  ">
      <div className=" text-white bg-transparent shadow-blue-500/30 shadow-lg p-6 rounded-lg w-[400px] max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-white">Email</label>
            <input
              type="text"
              {...register("email", { required: "email is required" })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {errors.username && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-white">Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full p-2 rounded text-white bg-blue-600 hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
