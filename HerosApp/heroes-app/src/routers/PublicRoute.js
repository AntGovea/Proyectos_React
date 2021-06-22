import React from "react";
import { Redirect, Route } from "react-router";
import PropTypes from "prop-types";

export const PublicRoute = ({ isAutehenticated, //si es autentificado
                                component: Component, //componente
                                 ...rest //resto de componentes
                                                                        }) => 
   {

  return (
    <Route
      {...rest}
      component={(props) =>
        // si no esta autentificado mandalo a la ruta
        //pero si esta autentificado mandalo al dashboard y no al login 
        (!isAutehenticated )? (<Component {...props} /> ):( <Redirect to="/dashboard" />)
      }
    />
  );
};

PublicRoute.propTypes={
    isAutehenticated:PropTypes.bool.isRequired,
    component:PropTypes.func.isRequired
}