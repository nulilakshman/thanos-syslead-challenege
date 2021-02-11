import React from "react"
import { Redirect } from "react-router-dom"
import AddOrganization from '../Organizations/AddOrganization' 
import ManageOrganizations from '../Organizations' 
import Login from '../pages/login'
const userRoutes = [
    { path: "/add-organizations", component: AddOrganization },
    { path: "/manage-organizations", component: ManageOrganizations },
   { path: "/", exact: true, component: () => <Redirect to="/add-organizations" /> },
  ]
  
  const authRoutes = [
    { path: "/login", component: Login },
   
    { path: "/", exact: true, component: () => <Redirect to="/login" /> },
   
  ]
  
  export { userRoutes, authRoutes }
  