import { combineReducers } from "redux";

import posts from './posts.js'//importing the reducer function from posts.js in reducers

export default combineReducers({
    posts
});  //global state