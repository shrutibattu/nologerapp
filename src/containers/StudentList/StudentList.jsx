import React from "react";
import styles from "./StudentList.module.scss";

const StudentList = (props) => {
  const studentList = props.list;
  return (
    <div>
      {studentList.map((student) => {
        return (
          <div>
            <h4>{student.name}</h4>
            <h5>{student.id}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default StudentList;
