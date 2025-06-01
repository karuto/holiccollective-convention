import React from "react";
import styles from "./Heading.css";

function Heading({ title, subtitle }) {
  return (
    <div className={styles.heading__container}>
      {subtitle && <div className={styles.heading__subtitle}>{subtitle}</div>}
      <h2 className={styles.heading__title}>{title}</h2>
    </div>
  );
}

export default Heading;
