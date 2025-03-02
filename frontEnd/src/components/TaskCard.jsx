import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTaskTrunk, editTaskTrunk,toggelTaskStatusTrunk } from '../redux/task/taskSlice';
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
        setShowEditModal(false); // Close the modal after saving
    };
    const handelToggel=()=>{
        dispatch(toggelTaskStatusTrunk(props.taskId,props.status))
    }

    return (
        <div className='rounded-3xl border flex justify-center items-center border-white px-5 w-fit mx-auto'>
            <div className='left-side flex flex-col gap-7 py-1'>
                <div className="top-layer flex flex-row justify-center items-center gap-4">
                    <input type="checkbox" className='text-xl' 
                    checked={props.status}
                    onChange={handelToggel} />
                    {console.log(props.status)}
                    <div className={`content w-[240px] flex justify-center items-center gap-4 ${props.status===true?"line-through font-extrabold text-blue-400":""}`}>
                        <span className='text-white '>{props.title}</span>
                    </div>
                    <button className='text-white text-[19px]' onClick={handleEdit}><MdOutlineEdit /></button>
                    <button className='text-white text-[19px]' onClick={handleDelete}><MdDeleteOutline /></button>
                </div>

                <div className="second-layer flex justify-around gap-4">
                    <div className='bg-slate-500 px-3 flex gap-3 rounded-full '>
                        <span className='text-white'>{props.date}</span>
                        <span className='text-white'>{props.time}</span>
                    </div>
                    <div className='bg-slate-500 px-3 rounded-full'>
                        <span className='text-white font-bold text-xl'>{props.status?'Completed':'Panding'}</span>
                    </div>
                </div>
            </div>

            {/* Priority indicator */}
            <div className={`h-[45px] w-[45px] rounded-full border border-white ${props.priority === "High" ? "bg-red-500 shadow-[0_0_8px_6px_rgba(214,48,10,1)]" : "bg-green-500 shadow-[0_0_8px_6px_rgba(34,197,94,1)]"}`}></div>

            {/* Edit Modal */}
            {showEditModal && (
  <div className='fixed top-0 w-[50%] h-full flex justify-center items-center bg-transparent backdrop-blur-sm bg-opacity-50 mx-auto'>
    <div className='bg-slate-900 text-white p-5 rounded-lg w-[400px] shadow-lg'>
      <h2 className='text-xl font-bold mb-4'>Edit Task</h2>

      <label className='block mb-2'>Title:</label>
      <input
        type='text'
        value={editedTask.title}
        onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
        className='w-full border border-gray-600 p-2 rounded-md mb-4 bg-slate-800 text-white focus:ring-2 focus:ring-blue-500'
      />

      <label className='block mb-2'>Priority:</label>
      <select
        value={editedTask.priority}
        onChange={(e) => setEditedTask({ ...editedTask, priority: e.target.value })}
        className='w-full border border-gray-600 p-2 rounded-md mb-4 bg-slate-800 text-white cursor-pointer'
      >
        <option value='High' className='bg-red-600 text-white hover:bg-red-500'>
          High
        </option>
        <option value='Low' className='bg-green-600 text-white hover:bg-green-500'>
          Low
        </option>
      </select>

      <div className='flex justify-end gap-3'>
        <button
          onClick={handleSave}
          className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-all'
        >
          Save
        </button>
        <button
          onClick={() => setShowEditModal(false)}
          className='bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-all'
        >
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
