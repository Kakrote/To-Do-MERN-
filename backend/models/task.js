const mongoose=require('mongoose');
const User=require('./user');

const taskSchema=new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        enum:['Low','High'],
        default:'Low',
    },
    status:{
        type:Boolean,
        default:false
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
},{timestamps:true});

module.exports=mongoose.model('Task',taskSchema);