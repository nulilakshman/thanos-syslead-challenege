import {
    GET_USERS,
    ADD_USERS
} from "./actionTypes"


const INIT_STATE = {
    allUsers: [],//localStorage.getItem("USERS") ? JSON.parse(localStorage.getItem("USERS")) : [],
    error: {}
}

const userDetails = (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                allUsers: action.users
            }
        case ADD_USERS:
            return {
                ...state
            }
        default:
            return state
    }
}

export default userDetails
