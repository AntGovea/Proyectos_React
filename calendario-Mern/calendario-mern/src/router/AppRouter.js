import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
   
  } from "react-router-dom";
import CalendarApp from "../CalendarApp";
import LoginScreen from "../components/auth/LoginScreen";

export const AppRouter = () => {
  return (
    <Router>
        <div>
      <Switch>
      <Route exact path="/login" component={ LoginScreen }/>
        <Route exact path="/" component={CalendarApp}/>
      </Switch>
    
      </div>
  </Router>
  );
};
