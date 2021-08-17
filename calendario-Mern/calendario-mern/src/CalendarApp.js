import React from "react";
import PropTypes from "prop-types";
import { AppRouter } from "./router/AppRouter";


const CalendarApp = (props) => {
  return (
    <>
      <h1>CalendarApp</h1>
      <AppRouter />
    </>
  );
};

CalendarApp.propTypes = {};

export default CalendarApp;
