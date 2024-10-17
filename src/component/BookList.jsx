import React from "react";
import Card from "./Card";
function BookList({ bookList, setFavorites, favorites }) {
  return (
    <>
      <Card
        bookList={bookList}
        setFavorites={setFavorites}
        favorites={favorites}
      />
    </>
  );
}

export default BookList;
