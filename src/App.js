import React from "react"

import { Switch, BrowserRouter as Router } from "react-router-dom"
import { connect } from "react-redux"
import { userRoutes, authRoutes } from "./routes/allRoutes"
import Authmiddleware from "./routes/middleware/Authmiddleware"
import AuthenticatedLayout from './components/authenticatedLayout'
import AnonymousLayout from './components/anonymousLayout'
const App = ({ login })  => {
  

  return (
    <React.Fragment>
      <Router>
        {
          login.loggedInUser ?
            <Switch>
              {userRoutes.map((route, idx) => (
                <Authmiddleware
                  path={route.path}
                  layout={AuthenticatedLayout}
                  component={route.component}
                  key={idx}
                  isAuthProtected={true}
                  roles={route.roles}
                  exact
                />
              ))}
            </Switch>
            : <Switch>
              {authRoutes.map((route, idx) => (
                <Authmiddleware
                  path={route.path}
                  layout={AnonymousLayout}
                  component={route.component}
                  key={idx}
                  isAuthProtected={false}
                  roles={[]}
                />
              ))}

            </Switch>
        }

      </Router>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    login: state.login
  }
}

export default connect(mapStateToProps, null)(App)