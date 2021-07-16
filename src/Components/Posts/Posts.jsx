import React from 'react'
import Post from './Post/Post.jsx'
import { useSelector } from 'react-redux'; //used to fetch the data from the global redux store

import useStyles from './styles.js'

function Posts() {
    const posts = useSelector(state=> state.posts);//initialize useSelector as a hook. The parameter is access to the global state "posts"

    console.log(posts);

    const classes = useStyles();
    return (
        <div>
            <h1>POSTS</h1>
            <Post/>
            <Post/>
        </div>
    )
}

export default Posts
