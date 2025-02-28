const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const User=require('../models/user');
const dotenv = require('dotenv')

dotenv.config()

const userRegister=async(req,res)=>{
    console.log('response data: ',req.body)
    const {username,email,password,confirmPassword}=req.body;
    if(password!==confirmPassword){
        console.log('password not matched')
        return res.status(400).json({msg:"password not macthed"})
    }
    // console.log(req.body)
    try{
        const user=await User.findOne({email});
        if(user){
            return res.status(400).json({error:'User already exists'});
        }
        const salt=await bcrypt.genSalt(10);
        const passwordHash=await bcrypt.hash(password,salt);
       const newUser=new User({
            username,
            email,
            password:passwordHash
        });
        console.log(newUser)
        await newUser.save().then(()=>{
            console.log("saved sussesfully")
        }).catch((err)=>{
            console.error('error in saving')
        });
        res.json({msg:'User registered successfully'});
    }
    catch(err){
        console.log(err);
        res.status(500).json({msg:'Server Error'});
    }

}

//Login
const userLogin=async(req,res)=>{
    const {email,password}=req.body;
    console.log(req.body)
    try{
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({msg:'Invalid Credentials'});
        }
        // matching password
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({msg:'Invalid Credentials'});
        }
        // gentoken
        const payload={
            user:{
                id:user.id
            }
        }
        jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:3600},(err,token)=>{
            if(err) throw err;
            res.json({token,msg:'Login successfull'});
        });
        
    }
    catch(err){
        console.log(err);
        res.status(500).json({msg:'Server Error'});
    }
}
module.exports={userRegister,userLogin};