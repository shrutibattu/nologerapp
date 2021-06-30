import React from "react";
import styles from "./Routes.module.scss";
import { Switch, Route } from "react-router-dom";
import StudentDetails from "../StudentDetails";
import StudentList from "../StudentList";
import StudentCreate from "../StudentCreate/StudentCreate";

import Details from "../../components/Details/Details";

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
        <Route path="/studentcreate">
          <StudentCreate />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
