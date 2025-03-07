import React from 'react';
import Navbar from "./Navbar";
import AddingTask from './AddingTask';
import TaskList from './TaskList';

const Manage = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
                {/* Navbar */}
                {/* <Navbar /> */}

                {/* Main Content */}
                <div className="flex-grow overflow-auto p-4 sm:p-8">
                    <AddingTask />
                    <div className="container mx-auto flex flex-wrap justify-center gap-4">
                        <TaskList />
                    </div>
                </div>

                {/* Footer */}
                <footer className="w-full text-center p-4 bg-gray-800 text-white">
                    <p>&copy; {new Date().getFullYear()} Task Manager App. All Rights Reserved.</p>
                </footer>
            </div>
        </>
    );
};

export default Manage;
