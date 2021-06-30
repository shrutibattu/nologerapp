import React from "react";
import styles from "./List.module.scss";
import { Link } from "react-router-dom";

const List = (props) => {
  const studentList = props.list;
  return (
    <div className={styles.student}>
      {studentList.map((student) => {
        return (
          <div className={styles.details}>
            <Link to="/Studentdetails">
              <h5>
                {student.firstName} {student.lastName}
              </h5>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default List;
