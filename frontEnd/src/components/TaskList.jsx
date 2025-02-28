import React from 'react';
import TaskCard from './TaskCard'; // Import TaskCard Component

const TaskList = ({tasks}) => {


  return (
    <div className="task-list flex flex-col  gap-2 justify-center py-8">
      {tasks.length>0?tasks.map((task, index) => (
        <TaskCard
          key={index}
          title={task.title}
          date={task.date}
          time={task.time}
          status={task.status}
          priority={task.priority}
        />
      )):<h1 className='text-3xl text-white'>No Task Found</h1>
    }
    </div>
  );
};

export default TaskList;
