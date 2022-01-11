import * as api from '../api';
import { FETCH_ALL, UPDATE, CREATE, LIKE_POST, DELETE } from "../constants/actionTypes";

// actions creator --> returns particular action along with payload data fetched from api
// redux-thunk takes care of asynchronous requests of actions

/*
export const getPosts = () => {
    return({
        type: 'FETCH_ALL',
        payload: []
    })
}
*/


export const getPosts = () => async (dispatch) => {

    try{
        const { data } = await api.fetchPosts();
        dispatch({
            type: FETCH_ALL,
            payload: data
        })
    } catch(err) {
        console.log(err);
    }
}

export const createPost = (post) => async (dispatch) => {

    try{
        const { data } = await api.createPost(post);
        dispatch({
            type: CREATE,
            payload: data
        })
    } catch(err) {
        console.log(err);
    }
}

export const updatePost = (id, post) => async (dispatch) => {

    try{
        const { data } = await api.updatePost(id, post);
        console.log(data);
        dispatch({
            type: UPDATE,
            payload: data
        })
    } catch(err) {
        console.log(err);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try{
        await api.deletePost(id);
        dispatch({
            type: DELETE,
            payload: id
        })
    } catch(err) {
        console.log(err);
    }
}

export const likePost = (id) => async (dispatch) => {
    try{
        const { data } = await api.likePost(id);
        dispatch({
            type: LIKE_POST,
            payload: data
        })
    } catch(err) {
        console.log(err);
    }
}