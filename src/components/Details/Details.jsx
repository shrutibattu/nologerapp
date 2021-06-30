import React from "react";
import styles from "./Details.module.scss";

const Details = (props) => {
  const studentList = props.list;
  return (
    <div className={styles.student}>
      {studentList.map((student) => {
        return (
          <div className={styles.details}>
            <h5>FirstName:{student.firstName}</h5>
            <h5>LastName:{student.lastName}</h5>
            <h5>Age:{student.age}</h5>
            <h5>Location:{student.location}</h5>
            <h5>Id:{student.id}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default Details;
