import React, { useEffect, useState } from "react";
import styles from "./Search.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Search({ bookList, setBookList, books }) {
  const [originalList, setOriginalList] = useState(books);

  useEffect(() => {
    setOriginalList(books);
  }, [bookList]);

  const getValue = (e) => {
    const value = e.target.value.toLowerCase();
    if (value === "") {
      setBookList(books);
    } else {
      const filteredList = originalList.filter((book) =>
        book.title.toLowerCase().includes(value)
      );
      setBookList(filteredList);
    }
  };
  return (
    <>
      <div className={styles.SearchContainer}>
        <input
          className={styles.SearchBox}
          type="text"
          placeholder="Search Title"
          onChange={getValue}
        />
        {/* <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button> */}
      </div>
    </>
  );
}

export default Search;
