import React, { useState } from "react";
import styles from "./Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
function Card({ bookList, setFavorites, favorites }) {
  const [colorBtn, setColorBtn] = useState({});
  const addItem = (id) => {
    const updatedItem = bookList.find((item) => item.id == id);
    setFavorites((preFavorites) => [...preFavorites, updatedItem]);
    setColorBtn((preState) => ({ ...preState, [id]: !preState[id] }));
    const exists = favorites.find((item) => item.id === updatedItem.id);
    if (exists !== undefined) {
      setFavorites((preFavorites) =>
        preFavorites.filter((item) => item.id !== updatedItem.id)
      );
    }
  };
  return (
    <>
      <ul className={styles.cardContainer}>
        {bookList.map((book) => (
          <li key={book.id} className={styles.card}>
            <div>
              <img src={book.image} alt="" />
            </div>
            <div>
              <p>{book.title}</p>
              <p>{book.author}</p>
              <p>
                <span>{book.country}</span>
                <span>{book.pages}</span>
              </p>
            </div>
            <div className={styles.favoritesBtnContainer}>
              <button
                className={`${
                  colorBtn[book.id]
                    ? `${styles.redButton} ${styles.cardContainerBtn}`
                    : styles.cardContainerBtn
                }`}
                onClick={() => addItem(book.id)}
              >
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Card;
