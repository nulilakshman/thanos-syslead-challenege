import React from "react"
import { Redirect } from "react-router-dom"
import AddOrganization from '../Organizations/AddOrganization' 
import ManageOrganizations from '../Organizations' 
import AddUser from '../ManageUsers/AddUser' 
import ManageUsers from '../ManageUsers' 
import Login from '../pages/login'
const userRoutes = [
    { path: "/add-organizations", component: AddOrganization },
    { path: "/add-user/:organizationId?", component: AddUser },
    { path: "/manage-users/:organizationId?", component: ManageUsers },
    { path: "/manage-organizations", component: ManageOrganizations },
   { path: "/", exact: true, component: () => <Redirect to="/add-organizations" /> },
  ]
  
  const authRoutes = [
    { path: "/login", component: Login },
   
    { path: "/", exact: true, component: () => <Redirect to="/login" /> },
   
  ]
  
  export { userRoutes, authRoutes }
  