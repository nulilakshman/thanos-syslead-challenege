import {
    GET_USERS,
    ADD_USERS
} from "./actionTypes"

export const actions = {
    addUsers: (user) => dispatch => {
         const allUsers = localStorage.getItem("USERS") ? JSON.parse(localStorage.getItem("USERS")) : [];
        const users = [...allUsers, user]
        localStorage.setItem("USERS", JSON.stringify(users))
        dispatch({ type: ADD_USERS, users });
        alert('User added successfully !!!')
    },
    getAllUsers: (organizationId) => dispatch => {
        console.log('getAllUsers')
        // let allUsers = localStorage.getItem("USERS");
        // if (allUsers === null) {
        //     allUsers = [];
        // }
        // else {
        //     allUsers = JSON.parse(allUsers)
        // }
        //const refinedUsers=allUsers.filter(x=>x.)
        const users = getUsersByOrganization(organizationId);
        dispatch({ type: GET_USERS, users });
    }
}
const getUsersByOrganization = (organizationId) => {
    let allUsers = localStorage.getItem("USERS");
    if (allUsers === null) {
        allUsers = [];
    }
    else {
        allUsers = JSON.parse(allUsers)
    }
    return allUsers.filter(x => x.organizationId === organizationId);
}