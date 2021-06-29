import React from "react";
import styles from "./Routes.module.scss";
import { Switch, Route } from "react-router-dom";
import StudentDetails from "../StudentDetails";
import StudentList from "../StudentList";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/studentlist">
          <StudentList />
        </Route>
        <Route path="/studentdetails">
          <StudentDetails />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
