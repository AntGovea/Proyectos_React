import React from "react";
import { Redirect, Route } from "react-router";
import PropTypes from "prop-types";

export const PrivateRoute = ({
   isAutehenticated, //si es autentificado
       component: Component, //componente
         ...rest //resto de componentes
        }) => 
        {
     console.log(rest.location.pathname)
     localStorage.setItem('lastPath',rest.location.pathname)

  return (
    <Route
      {...rest}
      component={(props) =>
        (isAutehenticated )? (<Component {...props} /> ):( <Redirect to="/login" />)
      }
    />
  );
};

PrivateRoute.propTypes={
    isAutehenticated:PropTypes.bool.isRequired,
    component:PropTypes.func.isRequired
}