import React from "react";
import styles from "./StudentCreate.module.scss";
import { useState, useEffect } from "react";

const StudentCreate = () => {
  // const [newStudentData, setNewStudentData] = useState([]);
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //   };
  //   const requestBody = {
  //     firstName: e.target[0].value,
  //     lastName: e.target[1].value,
  //     age: e.target[2].value,
  //     location: e.target[3].value,
  //     interests: [],
  //   };
  //   const options = {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(requestBody),
  //   };
  //   fetch("http://localhost:8080/student", options)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       // 4. Show some indication that it's been sent/successful
  //       alert("Created a new user, yay!!");
  //     });

  //   const postNewStudent = () => {
  //     fetch("http://localhost:8080/student")
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((jsonResponse) => {
  //         setNewStudentData(jsonResponse);
  //       });
  //   };
  //   useEffect(() => {
  //     postNewStudent();
  //   }, []);
  return (
    <>
      {/* <form onSubmit={handleSubmit} className={styles.form}>
        <h1>New Students</h1>
        <label>Enter your First Name:</label>
        <input type="text" />
        <label>Enter your Last Name:</label>
        <input type="text" />
        <label>Enter your Age:</label>
        <input type="text" />
        <label>Enter your Location:</label>
        <input type="text" />
        <label>Enter your Interests:</label>
        <input type="text" />
        <button onSubmit={} type="submit" />
      </form> */}
    </>
  );
};

export default StudentCreate;

{
  /* // // const requestBody = {
// //   "firstName": e.target[0].value,
// //   "lastName": e.target[1].value,
// //   "age": e.target[2].value,
// //   "location": e.target[3].value,
// //   "interests": []
// // };
// // Andrew Evans to Everyone (11:23)
// // const requestBody = {
// //   "firstName": e.target[0].value,
// //   "lastName": e.target[1].value,
// //   "age": e.target[2].value,
// //   "location": e.target[3].value,
// //   "interests": []
// // };
// // console.log(requestBody)

// // // 3. Ssend it!!
// // const options = {
// //   method: 'post',
// //   headers: {
// //       'Content-Type': 'application/json'
// //   },
// //   body: JSON.stringify(requestBody)
// // };
// // fetch('http://localhost:8080/student', options).then((response) => {
// //   return response.json();
// // }).then((data) => {
// //    // 4. Show some indication that it's been sent/successful
// //    alert("Created a new user, yay!!")
// // }); */
}
