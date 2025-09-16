import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className="container mt-5">
      <h3>About Page</h3>
      <input className={styles.inputBox} type="text" placeholder="test" />
    </div>
  );
};

export default About;
