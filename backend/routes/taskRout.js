const express = require('express');
const router = express.Router();
const {protect}=require('../middleware/authMiddelware');
const {getTasks,createTask,updateTask,deleteTask}=require('../controllers/taskController');

router.post('/create',protect,createTask);
router.get('/get',protect,getTasks);
router.put('/update/:id',protect,updateTask);
router.delete('/delete/:id',protect,deleteTask);

module.exports=router;

