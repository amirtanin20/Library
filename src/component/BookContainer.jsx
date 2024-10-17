import React, { useState } from "react";
import styles from "./BookContainer.module.css";

function BookContainer({ bookList, children }) {
  return (
    <>
      <div className={styles.BookContainer}>{children}</div>
    </>
  );
}

export default BookContainer;
