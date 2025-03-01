import React from 'react';
import TaskCard from './TaskCard'; // Import TaskCard Component
import { useState,useEffect } from 'react';
import axios from 'axios';

const TaskList = () => {
const [Task, setTask] = useState([])
useEffect(() => {
  const fetchTasks=async()=>{
    try{
      const token=localStorage.getItem('token')
      const response=await axios.get('http://localhost:3000/api/task/get',{
        headers:{
          "Authorization":`Bearer ${token}`
        }
      })
      setTask(response.data)
    }
    catch(error){
      console.log("Error while fecthing the task's",error)
    }
  }

  fetchTasks()
}, [Task])


  return (
    <div className="task-list flex flex-col  gap-2 justify-center py-8">
      {Task.length>0?Task.map((task,) => (
        <TaskCard
          key={task._id}
          title={task.task}
          date={new Date(task.createdAt).toLocaleDateString()}
          time={new Date(task.createdAt).toLocaleTimeString()}
          status={task.status?"completed":"pending"}
          priority={task.priority}
        />
      )):<h1 className='text-3xl text-white'>No Task Found</h1>
    }
    </div>
  );
};

export default TaskList;
