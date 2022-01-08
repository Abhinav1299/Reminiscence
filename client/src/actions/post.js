import * as api from '../api'

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
            type: 'FETCH_ALL',
            payload: data
        })
    } catch(err) {
        console.log(err.message);
    }
}