const express = require('express');
const connectDB = require('./config/db');
const taskRouter = require('./routes/taskRout');
const authRouter = require('./routes/authRout');
const dotenv = require('dotenv');
const cors=require('cors')
dotenv.config();
connectDB();


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors())
app.use('/api/auth', authRouter);
app.use('/api/task', taskRouter);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});