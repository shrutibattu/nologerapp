import React from "react";
import styles from "./StudentDetails.module.scss";
import Details from "../../components/Details/Details";

import { useState, useEffect } from "react";

const StudentDetails = () => {
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
      <Details list={studentData} />
    </>
  );
};

export default StudentDetails;
