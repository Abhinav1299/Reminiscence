import { AUTH, LOGOUT } from "../constants/actionTypes";

const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case AUTH:
            console.log(action?.payload);
            localStorage.setItem('profile', JSON.stringify({...action?.payload}))   // stores the user profile and token in local storage(to be further used by navbar) as well as in the redux store
            return {...state, authData: action?.payload};

        case LOGOUT:
            localStorage.clear();
            return {...state, authData: null};

        default:
            return state;
    }
}

export default authReducer;