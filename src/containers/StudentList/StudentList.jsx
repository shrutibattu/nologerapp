import React from "react";
import styles from "./StudentList.module.scss";
import List from "../../components/List/List";
import { useState, useEffect } from "react";
const StudentList = (props) => {
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
      <List list={studentData} />
    </>
  );
};
export default StudentList;
