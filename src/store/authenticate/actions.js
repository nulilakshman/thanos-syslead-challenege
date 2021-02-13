import {
    LOGIN_ERROR,
    LOGIN_SUCCESS
} from "./actionTypes"

export const actions = {
    validateUser: (user, history) => dispatch => {
        if (user.userName === 'admin@thanos.com' && user.password === 'admin@123') {
            const details = { ...user, isAuthenticated: true, role: 1 }
            localStorage.setItem("AUTH_USER", JSON.stringify(details))
            dispatch({ type: LOGIN_SUCCESS, details });
            history.push('/add-organizations');
            return;
        }
        const details = { ...user, isAuthenticated: false }
        dispatch({ type: LOGIN_ERROR, details });
    }
}