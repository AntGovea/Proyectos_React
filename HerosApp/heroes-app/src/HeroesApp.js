import React, { useEffect, useReducer } from "react";
import { AuthContext } from "./auth/AuthContext";
import { authReducer } from "./auth/authReducer";
import { Link, NavLink, Redirect } from "react-router-dom";
//import { Fragment } from "react";
import { AppRouter } from "./routers/Approuter";

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

export const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    console.log('disparando efecto')
    localStorage.setItem('user',JSON.stringify(user))
    console.log('local storage')
    console.log(localStorage.getItem('user'))
    const credencial=localStorage.getItem('user');
   
    } 
  , [user])

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};

export default HeroesApp;
