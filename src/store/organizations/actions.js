import {
    GET_ORGANIZATION_DETAILS,
    SET_ORGANIZATION_DETAILS
} from "./actionTypes"

export const actions = {
    addOrganization: (organization) => dispatch => {

        const details = { ...organization, id: 0 }

        const allOrganizations = localStorage.getItem("ORGANIZATIONS") ? JSON.parse(localStorage.getItem("ORGANIZATIONS")) : [];
        details.id = allOrganizations.length + 1;
        
        const orgs = [...allOrganizations, details]
        localStorage.setItem("ORGANIZATIONS", JSON.stringify(orgs))
        dispatch({ type: SET_ORGANIZATION_DETAILS, allOrgs: orgs });
        alert('Organization added successfully !!!')
    },
    getAllOrganizations: () => dispatch => {
        console.log('getAllOrganizations')
        let allOrganizations = localStorage.getItem("ORGANIZATIONS");
        if (allOrganizations === null) {
            allOrganizations = [];
        }
        else {
            allOrganizations = JSON.parse(allOrganizations)
        }
        dispatch({ type: GET_ORGANIZATION_DETAILS, allOrganizations });
    }
}