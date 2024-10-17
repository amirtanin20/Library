import React, { useEffect, useState } from "react";
import styles from "./Favorites.module.css";
function Favorites({ favorites }) {
  const [displayList, setDisplayList] = useState(false);

  useEffect(() => {
    if (favorites.length > 0) {
      setDisplayList(true);
    } else {
      setDisplayList(false);
    }
  }, [favorites]);

  return (
    <>
      <ul
        className={`${
          displayList
            ? styles.cardContainer
            : `${styles.displayNone} ${styles.cardContainer}`
        }`}
      >
        <h3 className={styles.favoritesLabel}>Favorites</h3>
        {favorites.map((book) => (
          <li key={book.id} className={styles.card}>
            <div>
              <img src={book.image} alt="" />
            </div>
            <div>
              <p>{book.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Favorites;
