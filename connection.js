//Connecting to database
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
mongoose.connect(process.env.database,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true ,
    useCreateIndex:true ,
    useFindAndModify:false
 });
 
mongoose.connection.once('open',()=>{
    console.log("DATABASE CONNECTED");
}).on('error',(error)=>{
    console.log(`Database connection error :${error}`);
})

export default mongoose;