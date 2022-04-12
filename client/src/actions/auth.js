import * as api from '../api';
import { AUTH } from "../constants/actionTypes";

// actions creator --> returns particular action along with payload data fetched from api
// redux-thunk takes care of asynchronous requests of actions

export const signin = (formData, navigate) => async (dispatch) => {
    try {
        // login the user 
        navigate('/');
    } catch(error) {
        console.log(error);
    }
}

export const signup = (formData, navigate) => async (dispatch) => {
    try {
        // login the user 
        navigate('/');
    } catch(error) {
        console.log(error);
    }
}