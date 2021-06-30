import React from "react";
import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className={styles.navMenu}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/Studentdetails" className={styles.navItem}>
            StudentDetails
          </Link>
        </li>
        <li>
          <Link to="/studentlist" className={styles.navItem}>
            StudentList
          </Link>
        </li>
        <li>
          <Link to="/studentcreate" className={styles.navItem}>
            StudentCreate
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
