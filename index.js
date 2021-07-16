import express from 'express';
import bodyParser from 'body-parser';
import mongoose from './connection.js';
import cors from 'cors';
import dotenv from 'dotenv'
import postsRoutes from './Routes/posts.js'

const app = express();

dotenv.config(); 
const port = process.env.PORT || 4300; 

app.use(bodyParser.json({limit: "30mb",extended:true})); //limit the size of images
app.use(bodyParser.urlencoded({limit: "30mb",extended:true}));
app.use(cors());


app.use('/posts',postsRoutes);

app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`)
})