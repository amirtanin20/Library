import React from "react";
import styles from "./Banner.module.css";
function Banner() {
  return (
    <>
      <div className={styles.Banner}>
        <h2>AMIR LIBRARY</h2>
        <p>
          <span>Produced by</span> | Amir Hossein Homayoun Mehr
        </p>
      </div>
    </>
  );
}

export default Banner;
