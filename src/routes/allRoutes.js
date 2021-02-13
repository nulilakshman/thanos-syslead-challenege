import React from "react"
import { Redirect } from "react-router-dom"
import AddOrganization from '../Organizations/AddOrganization'
import ManageOrganizations from '../Organizations'
import AddUser from '../ManageUsers/AddUser'
import ManageUsers from '../ManageUsers'
import Login from '../pages/login'
import Unauthorized from '../components/unauthorized'
import UserHome from '../components/userHome'
const userRoutes = [
  { path: "/unauthorized", component: Unauthorized, roles: ['admin', 'Organization Admin', 'User'] },
  { path: "/userhome", component: UserHome, roles: ['User'] },
  { path: "/add-organizations", component: AddOrganization, roles: ['admin'] },
  { path: "/add-user/:organizationId?", component: AddUser, roles: ['admin', 'Organization Admin'] },
  { path: "/manage-users/:organizationId?", component: ManageUsers, roles: ['admin', 'Organization Admin'] },
  { path: "/manage-organizations", component: ManageOrganizations, roles: ['admin'] },
  { path: "/", exact: true, component: () => <Redirect to="/add-organizations" /> },
]

const authRoutes = [
  { path: "/login", component: Login },

  { path: "/", exact: true, component: () => <Redirect to="/login" /> },

]

export { userRoutes, authRoutes }
