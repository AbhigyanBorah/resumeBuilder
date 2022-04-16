import React from "react";
import Container from '@mui/material/Container';
import resumeSvg from "../../assets/resume.svg";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          <span>Resume</span> Builder!
        </p>
      </div>
      <div className={styles.right}>
        <Container>
          <img src={resumeSvg} alt="Resume" />
        </Container>
      </div>
    </div>
  );
}

export default Header;
