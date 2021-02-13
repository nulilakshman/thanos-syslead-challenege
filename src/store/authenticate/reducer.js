import {
    LOGIN_USER,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from "./actionTypes"


const initialState = {
    loggedInUser: localStorage.getItem("AUTH_USER") ? JSON.parse(localStorage.getItem("AUTH_USER")) : null,
    error: "",
    loading: false,
}


const login = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN_USER:
            state = {
                ...state,
                loading: true,
            }
            break
        case LOGIN_SUCCESS:
            state = {
                ...state,
                loggedInUser: { ...action.details },
                loading: false,
            }
            break
        case LOGIN_ERROR:
            state = {
                ...state,
                loggedInUser: null,
                error:'Invalid username & password',
                loading: false,
            }
            break
        default:
            state = { ...state }
            break
    }
    return state
}

export default login