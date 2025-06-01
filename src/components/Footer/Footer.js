import React from "react";
import styles from "./Footer.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <br />
      Copyright © 2023-{new Date().getFullYear()} Holic Collective | All rights
      reserved.
    </footer>
  );
}

export default Footer;
