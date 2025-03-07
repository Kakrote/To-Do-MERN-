import React from 'react';
import TaskCard from './TaskCard'; // Import TaskCard Component
import { useState, useEffect,memo } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks } from '../redux/task/taskSlice';



const TaskMemo =  memo(({task})=>(
  <TaskCard
    key={task._id}
    taskId={task._id}
    title={task.task}
    date={new Date(task.createdAt).toLocaleDateString()}
    time={new Date(task.createdAt).toLocaleTimeString()}
    status={task.status }
    priority={task.priority}
  />
))




const TaskList = () => {
  const dispatch = useDispatch()
  // const [Task, setTask] = useState([])
  const { tasks = [], loading = false, error = null } = useSelector((state) => state.task || {});

  // useEffect(() => {
  //   const fetchTasks=async()=>{
  //     try{
  //       const token=localStorage.getItem('token')
  //       const response=await axios.get('http://localhost:3000/api/task/get',{
  //         headers:{
  //           "Authorization":`Bearer ${token}`
  //         }
  //       })
  //       setTask(response.data)
  //     }
  //     catch(error){
  //       console.log("Error while fecthing the task's",error)
  //     }
  //   }

  //   fetchTasks()
  // }, [])

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);




  return (
    <div className="task-list grid grid-cols-1  gap-4 text-center py-8">
      {Array.isArray(tasks) && tasks.length > 0 ? tasks.map((task) => {
        console.log("task id", task)

        return <TaskMemo key={task._id} task={task}/>
        
      }) : <h1 className='text-3xl text-white'>No Task Found</h1>


      }
    </div>
  );
};

export default TaskList;
