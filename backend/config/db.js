const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URL,{
            // useNewUrlParser:true,
            // useUnifiedTopology:true,
            // useFindAndModify:true
        })
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }

}
module.exports=connectDB;