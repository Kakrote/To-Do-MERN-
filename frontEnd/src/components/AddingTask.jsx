import React from 'react';
import { useForm } from 'react-hook-form';
import Dropbox from './Dropbox';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { createTask } from '../redux/task/taskSlice';
import { title } from 'framer-motion/client';


const AddingTask = () => {
  const dispatch=useDispatch()
  const { register, handleSubmit, formState: { errors, },reset } = useForm();
  const [priority, setPriority] = React.useState('Low')
  const [Task,setTask]=React.useState('')

  // const onSubmit = async (data) => {
  //   try{
  //     const token=localStorage.getItem('token')
  //     const response=await axios.post('http://localhost:3000/api/task/create',{task:data.task,priority:priority||'Low'},
  //       {headers:{
  //         "Content-Type":"application/json",
  //         "Authorization":`Bearer ${token}`
  //       }}
  //     )
  //     console.log(response.data)
  //     reset() // this reset's the form
  //     onTaskAdded()
  //   }
  //   catch(error){
  //     console.error('Error creating task',error.response ?error.response.data :error.message)
  //   }
  // };
  const onSubmit= async(data)=>{
    // e.preventDefault()
    if(data.task.trim()){
      dispatch(createTask({title:data.task,priority}))
      reset()
    }
  }

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className="mx-auto w-[50%] mt-7  shadow-[0_0_20px_5px_rgba(59,130,246,0.2)] p-3 py-2 border border-gray-900  rounded-lg flex gap-4 items-center flex-col md:flex-row"
    >
      <div className="flex-grow flex flex-col">
        <input 
          type="text" 
          className="bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-[15px] w-full focus:outline-none focus:ring-2 focus:ring-blue-400" 
          placeholder="Task title" 
          {...register("task", { required: true })}
        />
       
      </div>

      <Dropbox setPriority={setPriority}/>

      <button 
        type="submit" 
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddingTask;
