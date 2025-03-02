import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const taskSlice = createSlice({
  name: 'task',
  initialState: {
    tasks: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchTasksStart: (state) => {
      state.loading = true;
    },
    fetchTasksSuccess: (state, action) => {
        console.log('Payload in reducer:', action.payload)
      state.tasks = action.payload;
      state.loading = false;
    },
    fetchTasksFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    addTask: (state, action) => {
        console.log("state task",state.tasks)
        console.log("state task",action.payload)
      state.tasks.push(action.payload);
    },
    deleteTask:(state,action)=>{
      state.tasks=state.tasks.filter(task=>task._id !==action.payload)
    },
    editTask:(state,action)=>{
      const index=state.tasks.findIndex((task)=>task._id===action.payload._id)
      if(index!==-1){
        state.tasks[index]=action.payload
      }
    },
    toggelTaskStatus:(state,action)=>{
      const index=state.tasks.findIndex((task)=>task._id===action.payload._id)
      if(index!==-1){
        state.tasks[index]=action.payload
        // console.log(tasks.status)

      }
    }
  },
});

export const {
  fetchTasksStart,
  fetchTasksSuccess,
  fetchTasksFailure,
  addTask,
  deleteTask,
  editTask,
  toggelTaskStatus
} = taskSlice.actions;

export default taskSlice.reducer;

// Thunks
export const fetchTasks = () => async (dispatch) => {
  dispatch(fetchTasksStart());
  try {
    const token=localStorage.getItem('token')
    const response = await axios.get('http://localhost:3000/api/task/get',{
        headers:{
            'Authorization':`Bearer ${token}`
        }
    });
    console.log('Fetched tasks:', response.data)
    dispatch(fetchTasksSuccess(response.data));
  } catch (err) {
    dispatch(fetchTasksFailure(err.message));
  }
};

export const createTask = (taskData) => async (dispatch) => {
  try {
    const token=localStorage.getItem('token')
    const response = await axios.post('http://localhost:3000/api/task/create', {task:taskData.title,priority:taskData.priority},{
        headers:{
            'Authorization':`Bearer ${token}`
        }
    });
    // dispatch(addTask(response.data));
    dispatch(addTask(response.data))
    // dispatch(addTask({_id:response.data.id,task:taskData.title,priority:taskData.priority}))
    // dispatch(fetchTasks()); // Refresh the list
  } catch (err) {
    console.error(err);
  }
};

export const deleteTaskTrunk=(taskId)=>async (dispatch)=>{
  try{
    dispatch(deleteTask(taskId))
    const token=localStorage.getItem('token')
    await axios.delete(`http://localhost:3000/api/task/delete/${taskId}`,{
      headers:{
        'Authorization':`Bearer ${token}`
      }
    })
  }
  catch (err) {
    console.error('Failed to delete task:', err);
    dispatch(fetchTasks());
  }
}

export const editTaskTrunk=(taskId,updatedData)=>async (dispatch)=>{
  try{

    const token=localStorage.getItem('token')
    const response=await axios.put(`http://localhost:3000/api/task/update/${taskId}`,updatedData,{
      headers:{
        'Authorization':`Bearer ${token}`
      }
    })
    dispatch(editTask(response.data))
  }
  catch(error){
    console.error('Failed to update task:', error)
  }
}

export const toggelTaskStatusTrunk=(taskId,currentStatus)=>async(dispatch)=>{
  try{
    const token=localStorage.getItem('token')
    const newStatus = !currentStatus
    // const newStatus = currentStatus === true?false:true
    const response=await axios.put(`http://localhost:3000/api/task/update/${taskId}`,{status:newStatus},{
      headers:{
        'Authorization':`Bearer ${token}`
      }
    })
    console.log("response data updated:",response.data)
    console.log("status flag",newStatus)
    dispatch(toggelTaskStatus(response.data))
    // dispatch(toggelTaskStatus({id:taskId,status:newStatus}))
  }
  catch(error){
    console.error('faild to update task satus',error)
  }
}