const User=require('../models/user');
const Task=require('../models/task');

// Create a new task
const createTask=async(req,res)=>{
    console.log(req.body)
    try {
        const {task,priority}=req.body;
        const newTask=new Task({
            task,
            priority,
            user_id:req.user.id
        }); 
        await newTask.save();
        res.json(newTask);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:'Server Error'});
    }
}

// Get all tasks
const getTasks=async(req,res)=>{
    try {
        const tasks=await Task.find({user_id:req.user.id});
        res.json(tasks);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:'Server Error'});
    }
}

//delete task
const deleteTask=async(req,res)=>{
    try {
        const task=await Task.findById(req.params.id);
        if(!task){
            return res.status(404).json({msg:'Task not found'});
        }
        if(task.user_id.toString()!==req.user.id){
            return res.status(401).json({msg:'Not authorized'});
        }
        await task.deleteOne({id:req.params.id});
        res.json({msg:'Task deleted successfully'});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:'Server Error'});
    }
}
// updating task
const updateTask=async(req,res)=>{
    const {task,priority,status}=req.body;
    const taskFields={};
    if(task) taskFields.task=task;
    if(priority) taskFields.priority=priority;
    if(status!==undefined) taskFields.status=status;
    try {
        let task=await Task.findById(req.params.id);
        if(!task){
            return res.status(404).json({msg:'Task not found'});
        }
        if(task.user_id.toString()!==req.user.id){
            return res.status(401).json({msg:'Not authorized'});
        }
        task=await Task.findByIdAndUpdate(
            req.params.id,
            {$set:taskFields},
            {new:true}

        );
        res.json(task);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:'Server Error'});
    }
}

module.exports={createTask,getTasks,deleteTask,updateTask};
