import React, { useState } from 'react';
import Navbar from "./Navbar";
import AddingTask from './AddingTask';
import TaskList from './TaskList';
// import {useState} from 'react';

const Manage = () => {

    // const [TaskList, setTaskList] = useState([]);
    const tasks = [
        { title: 'Complete React Project', date: '2025-02-19', time: '2:00 PM', status: 'In Progress', priority: 'high' },
        { title: 'Attend Team Meeting', date: '2025-02-20', time: '10:00 AM', status: 'Pending', priority: 'low' },
        { title: 'Submit Report', date: '2025-02-21', time: '4:00 PM', status: 'Completed', priority: 'high' },
      ];

    return (
        <>
            <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            {/* <Navbar/> */}
            
            <AddingTask/>
            <div className="container w-fit mx-auto">
            <TaskList tasks={tasks}/>
            </div>

        </>
    );
};

export default Manage;
