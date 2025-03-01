import React from 'react'
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
const TaskCard = (props) => {
    return (
        <div className=' rounded-3xl border flex justify-center items-center border-white px-5 w-fit mx-auto'>
            <div className='left-side flex flex-col gap-7 py-1'>

                <div className="top-layer flex flex-row justify-center items-center gap-4">
                    <input type="checkbox" className='text-xl'/>
                    <div className="content w-[240px] flex justify-center items-center gap-4">
                        <span className='text-white font-bold text-xl'>{props.title}</span>
                    </div>
                    <button className='text-white text-[19px]'><MdOutlineEdit /></button>
                    <button className='text-white text-[19px]'><MdDeleteOutline /></button>
                </div>
                <div className="second-layer flex justify-around gap-4">
                    <div className='bg-slate-500 px-3 flex gap-3 rounded-full '>
                        <span className='text-white'>{props.date}</span>
                        <span className='text-white'>{props.time}</span>
                    </div>
                    <div className='bg-slate-500 px-3 rounded-full'>
                        <span className='text-white font-bold text-xl'>{props.status}</span>
                    </div>
                </div>
            </div>

            {/* proprity indigater */}
            <div className={`h-[45px] w-[45px] rounded-full border  border-white ${props.priority==="High"?"bg-red-500 shadow-[0_0_8px_6px_rgba(214,48,10,1)] ":"bg-green-500 shadow-[0_0_8px_6px_rgba(34,197,94,1)]"}`}></div>

        </div>
    )
}

export default TaskCard
