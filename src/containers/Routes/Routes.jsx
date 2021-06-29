import React from "react";
import styles from "./Routes.module.scss";
import { Switch, Route } from "react-router-dom";
import StudentDetails from "../StudentDetails";
import StudentList from "../StudentList";
import { useState, useEffect } from "react";

const Routes = () => {
  const [studentData, setStudentData] = useState([]);

  const getAllStudents = () => {
    fetch("http://localhost:8080/students")
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        setStudentData(jsonResponse);
      });
  };

  useEffect(() => {
    getAllStudents();
  }, []);
  return (
    <>
      <Switch>
        <Route path="/studentlist">
          <StudentList list={studentData} />
        </Route>
        <Route path="/studentdetails">
          <StudentDetails />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
