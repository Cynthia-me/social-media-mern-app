import express from 'express';
import PostMessage from '../Models/postMessage.js';

const router = express.Router();

router.get('/',async(req,res)=>{
   try{
        const posts = await PostMessage.find();
        try{
            res.status(200).json(posts);
        } catch(err){
            res.send("Can not find posts")
        }
   } catch(err){
            res.status(404).json(err.message)
   }
})


router.post('/',async(req,res)=>{

    const createPost = await new PostMessage(req.body)
    // ({
    //     title: req.body.title,
    //     message: req.body.message,
    //     creator: req.body.creator,
    //     tags:req.body.tags,
    //     selectedFile:req.body.selectedFile,
    //     likeCount:req.body.likeCount,
    //     createdAt:req.body.createdAt
    // })
    try{
        await createPost.save();
        res.status(201).json(createPost)
    }catch(err){
        res.status(409).json(err.message)
    }
})








export default router;