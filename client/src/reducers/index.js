import { combineReducers } from "redux";
import postReducer from './post'

const allReducers = combineReducers({
    posts: postReducer
})

export default allReducers;