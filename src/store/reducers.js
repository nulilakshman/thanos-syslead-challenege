import { combineReducers } from "redux"
import organizationDetails from "./organizations/reducer"
import login from "./authenticate/reducer"

const rootReducer = combineReducers({
    organizationDetails,
    login
  })
  
  export default rootReducer