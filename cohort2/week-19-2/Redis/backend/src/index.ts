import express from "express";
import { createClient } from "redis";

const app = express();
app.use(express.json());

const client = createClient();
client.on('error', (err) => console.log('Redis Client Error', err));

app.post('/submit', (req, res)=>{
    const {problemId, userId , code, language}= req.body;

    try{
        client.lPush('submissions', JSON.stringify({problemId, userId, code, language}))
        res.json({
            message: 'Submission Received'
        })
    }catch(err){
        res.status(500).json({
            message: 'Error in Submission'
        })
    }
})
app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})