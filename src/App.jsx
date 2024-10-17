import Banner from "./component/Banner";
import Search from "./component/Search";
import BookContainer from "./component/BookContainer";
import styles from "./App.module.css";
import { books } from "./constants/mockData.js";
import { useState } from "react";
import BookList from "./component/BookList";
import Favorites from "./component/Favorites";

function App() {
  const [bookList, setBookList] = useState(books);
  const [favorites, setFavorites] = useState([]);
  return (
    <>
      <div className={styles.container}>
        <Banner />
        <Search bookList={bookList} setBookList={setBookList} books={books} />
        <BookContainer bookList={bookList}>
          <BookList
            bookList={bookList}
            setFavorites={setFavorites}
            favorites={favorites}
          />
          <Favorites setFavorites={setFavorites} favorites={favorites} />
        </BookContainer>
      </div>
    </>
  );
}

export default App;
