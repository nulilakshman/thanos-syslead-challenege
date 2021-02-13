import {
    LOGIN_ERROR,
    LOGIN_SUCCESS
} from "./actionTypes"

export const actions = {
    validateUser: (user, history) => dispatch => {
        if (user.userName === 'admin@thanos.com' && user.password === 'admin@123') {
            const details = { ...user, isAuthenticated: true, roleId: 'admin' }
            localStorage.setItem("AUTH_USER", JSON.stringify(details))
            dispatch({ type: LOGIN_SUCCESS, details });
            history.push('/manage-organizations');
            return;
        }
        else {
            let allUsers = localStorage.getItem("USERS");
            if (allUsers === null) {
                allUsers = [];
            }
            else {
                allUsers = JSON.parse(allUsers)
            }
            const loggedInUser = allUsers.filter(x => x.userName === user.userName && user.password === x.password);

            if (loggedInUser !== null && loggedInUser.length > 0) {
                const details = { ...loggedInUser[0], isAuthenticated: true }
                localStorage.setItem("AUTH_USER", JSON.stringify(details))
                dispatch({ type: LOGIN_SUCCESS, details: details });
                if (details.roleId === 'User') {
                    history.push(`/userhome`);
                }
                else {
                    history.push(`/manage-users/${details.organizationId}`);
                }
                return;
            }

        }
        const details = { ...user, isAuthenticated: false }
        dispatch({ type: LOGIN_ERROR, details });
    }
}