import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTaskTrunk, editTaskTrunk, toggelTaskStatusTrunk } from '../redux/task/taskSlice';
import { MdOutlineEdit, MdDeleteOutline } from 'react-icons/md';

const TaskCard = (props) => {
  const dispatch = useDispatch();
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedTask, setEditedTask] = useState({
    title: props.title,
    priority: props.priority,
  });

  const handleDelete = () => {
    dispatch(deleteTaskTrunk(props.taskId));
  };

  const handleEdit = () => {
    setShowEditModal(true);
  };

  const handleSave = () => {
    dispatch(editTaskTrunk(props.taskId, { task: editedTask.title, priority: editedTask.priority }));
    setShowEditModal(false);
  };

  const handleToggle = () => {
    dispatch(toggelTaskStatusTrunk(props.taskId, props.status));
  };

  return (
    <div className='rounded-3xl border flex flex-col sm:flex-row justify-between items-center border-white p-5 w-full sm:w-[400px] max-w-full mx-auto gap-4 shadow-md bg-gradient-to-br from-gray-900 to-gray-800'>
      <div className='flex flex-col gap-4 w-full'>
        <div className="flex items-center gap-3">
          <input 
            type="checkbox" 
            checked={props.status} 
            onChange={handleToggle} 
            className='w-5 h-5 text-blue-500'
          />
          <span className={`text-white text-lg flex-1 ${props.status ? "line-through text-blue-400" : ""}`}>
            {props.title}
          </span>
          <button className='text-white text-xl' onClick={handleEdit}>
            <MdOutlineEdit />
          </button>
          <button className='text-white text-xl' onClick={handleDelete}>
            <MdDeleteOutline />
          </button>
        </div>

        <div className="flex justify-between w-full">
          <div className='bg-slate-700 px-4 py-1 rounded-full text-sm text-white'>
            {props.date} | {props.time}
          </div>
          <div className={`px-4 py-1 rounded-full text-sm font-bold ${props.status ? "bg-green-600" : "bg-yellow-500"}`}>
            {props.status ? 'Completed' : 'Pending'}
          </div>
        </div>
      </div>

      <div className={`text-white px-3 py-1 rounded-full text-sm font-medium ${props.priority === 'High' ? "border border-red-400 bg-red-600" : "border border-green-400 bg-green-600"}`}>
        {props.priority}
      </div>

      {showEditModal && (
        <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-md'>
          <div className='bg-gray-900 text-white p-6 rounded-lg w-[90%] sm:w-[400px]'>
            <h2 className='text-xl font-bold mb-4'>Edit Task</h2>

            <label className='block mb-2'>Title:</label>
            <input
              type='text'
              value={editedTask.title}
              onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
              className='w-full p-2 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500'
            />

            <label className='block mt-4 mb-2'>Priority:</label>
            <select
              value={editedTask.priority}
              onChange={(e) => setEditedTask({ ...editedTask, priority: e.target.value })}
              className='w-full p-2 rounded-md bg-gray-800 text-white'
            >
              <option value='High'>High</option>
              <option value='Low'>Low</option>
            </select>

            <div className='flex justify-end gap-3 mt-4'>
              <button onClick={handleSave} className='bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md'>
                Save
              </button>
              <button onClick={() => setShowEditModal(false)} className='bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-md'>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
