import { combineReducers } from "redux";
import postReducer from './post'
import authReducer from "./auth";

const allReducers = combineReducers({
    posts: postReducer,
    auth: authReducer
})

export default allReducers;