import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Book from '../components/Book';
import NewBook from '../components/NewBook';
import { baseUrl } from '../redux/store';
import { setBooks } from '../redux/books/books';

export default function Books() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchBooks = async () => {
      await axios.get(baseUrl)
        .then((res) => {
          dispatch(setBooks(res.data));
        });
    };
    fetchBooks();
  }, [dispatch]);

  return (
    <>
      <ul className="books">
        {Object.keys(books).map((bookId) => (
          <li key={bookId} id={bookId}>
            <Book
              category={books[bookId][0].category || ''}
              author={books[bookId][0].author || ''}
              title={books[bookId][0].title || ''}
              progress={books[bookId][0].progress || 0}
              currentChapter={books[bookId][0].chapter || 1}
              id={bookId}
            />
          </li>
        ))}
      </ul>
      <div className="horizontal-divider" />
      <NewBook />
    </>
  );
}
