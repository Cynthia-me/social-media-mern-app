import * as api from '../api'; 

//Action creators
export const getPosts = ()=> async(dispatch)=>{
    try{
        const {data} = await api.fetchPosts();

        const action = {
            type: 'FETCH_ALL',
            payload: data
        }
        dispatch (action);
    }catch(err){
        console.log(err.message)
    }
   
}

export const createPosts = (post) => async (dispatch) => {
    try{
       const {data} = await api.createPosts(post);
       dispatch ({type: 'CREATE',payload:data})
    }
    catch(err){
        console.log(err.message)
    }
}