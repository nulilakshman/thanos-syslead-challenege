import React from "react"
import PropTypes from "prop-types"
import { Route, Redirect } from "react-router-dom"

const Authmiddleware = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  roles,
  ...rest
}) => (
    <Route
      {...rest}
      render={props => {
        if (isAuthProtected && !localStorage.getItem("AUTH_USER")) {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
        }
        else if (isAuthProtected && localStorage.getItem("AUTH_USER") && roles && roles.length > 0) {
          const loggedUser =JSON.parse( localStorage.getItem("AUTH_USER"));
          
          const isAccessible = roles.filter(x => x === loggedUser.roleId);
          if (isAccessible.length <= 0) {
            return (
              <Redirect
                to={{ pathname: "/unauthorized", state: { from: props.location } }}
              />
            )
          }

        }

        return (
          <Layout>
            <Component {...props} />
          </Layout>
        )
      }}
    />
  )


export default Authmiddleware
