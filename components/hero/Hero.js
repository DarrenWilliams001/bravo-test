import React from "react";
import styles from "../hero/hero.module.css";

function Hero() {
  return (
    <div className={styles.heroContainer}>
      <h1 className={styles.heroH1}>MXDC Melbourne</h1>
      <h3 className={styles.heroH3}>June 20 - 27</h3>
    </div>
  );
}

export default Hero;
