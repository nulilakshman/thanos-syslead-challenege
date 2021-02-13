import { combineReducers } from "redux"
import organizationDetails from "./organizations/reducer"
import userDetails from "./users/reducer"
import login from "./authenticate/reducer"

const rootReducer = combineReducers({
    organizationDetails,
    userDetails,
    login
  })
  
  export default rootReducer