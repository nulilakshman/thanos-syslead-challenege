import {
    GET_ORGANIZATION_DETAILS,
    SET_ORGANIZATION_DETAILS
} from "./actionTypes"


const INIT_STATE = {
    allOrganizations: localStorage.getItem("ORGANIZATIONS") ? JSON.parse(localStorage.getItem("ORGANIZATIONS")) : [],
    error: {}
}

const organizationDetails = (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_ORGANIZATION_DETAILS:
            return {
                ...state
            }
        case SET_ORGANIZATION_DETAILS:
            return {
                ...state,
                allOrganizations: action.allOrgs,
            }
        default:
            return state
    }
}

export default organizationDetails
