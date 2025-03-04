import React, { useState } from 'react';
import Navbar from "./Navbar";
import AddingTask from './AddingTask';
import TaskList from './TaskList';
// import {useState} from 'react';

const Manage = () => {


    return (
        <>
            <div className="flex flex-col min-h-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
                {/* Main Content */}
                <div className="flex-grow overflow-auto">
                    <AddingTask />
                    <div className="container w-fit mx-auto flex flex-wrap gap-4">
                        <TaskList />
                    </div>
                </div>

                {/* Fixed Footer */}
                <footer className="w-full text-center p-4 bg-gray-800 text-white  bottom-0 left-0">
                    <p>&copy; {new Date().getFullYear()} Task Manager App. All Rights Reserved.</p>
                </footer>
            </div>

        </>
    );
};

export default Manage;
