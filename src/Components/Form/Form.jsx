import React,{useState} from 'react'
import {TextField,Button,Typography,Paper} from '@material-ui/core';
import useStyles from './styles.js'
import FileBase from 'react-file-base64'
import {useDispatch} from 'react-redux'
import { createPosts } from '../../actions/posts.js';

function Form() {
    const [postData,setPostData] = useState({
creator: "",
title: "",
tags:"",
message: "",
selectedFile: ""
    })
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e)=>{
        e.preventDefault();

        dispatch(createPosts(postData));
    }
    const clear = ()=>{

    }
    const ChangeCreator= (e)=> setPostData({
        ...postData,
        creator: e.target.value
    })
    const ChangeTitle= (e)=> setPostData({
        ...postData,
        title: e.target.value
    })
    const ChangeMessage= (e)=> setPostData({
        ...postData,
        message: e.target.value
    })
    const ChangeSelectedFile= (e)=> setPostData({
        ...postData,
        selectedFile: e.target.value
    })
    const ChangeTags= (e)=> setPostData({
        ...postData,
        tags: e.target.value
    })


    return (
       <Paper className = {classes.paper}>
           <form autoComplete = "off" noValidate className = {`${classes.root} ${classes.form}`}onSubmit = {handleSubmit}>
            <Typography variant = "h6">
                Creating a Memory
            </Typography>
            <TextField name="creator" variant = "outlined" label = "Creator" fullWidth
            value = {postData.creator} onChange = {ChangeCreator} />
            <TextField name="title" variant = "outlined" label = "Title" fullWidth
            value = {postData.title} onChange = {ChangeTitle} />
            <TextField name="tags" variant = "outlined" label = "Tags" fullWidth
            value = {postData.tags} onChange = {ChangeTags} />
            <TextField name="message" variant = "outlined" label = "Message" fullWidth
            value = {postData.message} onChange = {ChangeMessage} />
            <TextField name="selectedFile" variant = "outlined" label = "SelectedFile" fullWidth
            value = {postData.selectedFile} onChange = {ChangeSelectedFile} />
            <div className = {classes.fileInput}>
                <FileBase type = "file" multiple = {false} onDone = {({base64})=> setPostData({...postData,selectedFile: base64})}/>
            </div>
            <Button className = {classes.buttonSubmit} variant = "contained" color = "primary" size = "large" type = "submit" fullWidth >SUBMIT</Button>
            <Button variant = "contained" color = "secondary" size = "small" onnClick = {clear} fullWidth >Clear</Button>
           </form>
       </Paper>
    )
}

export default Form
