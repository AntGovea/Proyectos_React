import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route as PublicRoute,
  Link,
} from "react-router-dom";
import LoginScreen from "../components/login/LoginScreen";
import MarvelScreen from "../components/marvel/MarvelScreen";
import DcScreen from "../components/dc/DcScreen";
import { Navbar } from "../components/ui/NavBar";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import userEvent from "@testing-library/user-event";
import { AuthContext } from "../auth/AuthContext";
// import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
           exact path="/login"
            component={LoginScreen}
            isAutehenticated={user.logged}
             />

          <PrivateRoute
            path="/"
            component={DashboardRoutes}
            isAutehenticated={user.logged}
          />
        </Switch>
      </div>
    </Router>
  );
};
