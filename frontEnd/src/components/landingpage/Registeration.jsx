import { useForm } from "react-hook-form";
import { useState } from "react";
import React from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const Registration = () => {
  const [serverError, setServerError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const onSubmit = async (data) => {
    console.log('Submitting data:', data);
    try {
      const response = await axios.post('http://localhost:3000/api/auth/register', data);
      console.log('Submitted:', response.data);

      // Show success message
      setSuccessMessage('Registration successful! Redirecting to login...');
      setServerError('');

      // Redirect to login after 3 seconds
      setTimeout(() => {
        navigate('/login');
      }, 3000);

    } catch (error) {
      if (error.response && error.response.data.error) {
        setServerError(error.response.data.error);
      } else {
        setServerError('Server error. Please try again later.');
      }
      setSuccessMessage(''); // Clear success message if there's an error
    }
  };

  return (
    <motion.div className="flex justify-center items-center mt-10 mx-auto w-fit"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="text-white shadow-lg shadow-sky-600/30 w-[400px] rounded-lg p-6 max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>

        {/* Success & Error Messages */}
        {successMessage && <motion.p className="text-green-500 text-sm text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>{successMessage}</motion.p>}
        {serverError && <motion.p className="text-red-500 text-sm text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>{serverError}</motion.p>}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-200">Username</label>
            <input
              type="text"
              {...register("username", { required: "Username is required" })}
              className="w-full p-2 border border-gray-300 rounded mt-1 text-white"
            />
            {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
          </div>

          <div>
            <label className="block text-gray-200">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-2 border border-gray-300 rounded mt-1 white"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-gray-200">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 5, message: "Password must be at least 5 characters" },
              })}
              className="w-full p-2 border border-gray-300 rounded mt-1 text-white"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <div>
            <label className="block text-gray-200">Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) => value === password || "Passwords do not match",
              })}
              className="w-full p-2 border border-gray-300 rounded mt-1 text-white"
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
          </div>

          <button
            type="submit"
            className={`w-full p-2 rounded text-white ${password === confirmPassword ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"}`}
            disabled={password !== confirmPassword}
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Registration;
