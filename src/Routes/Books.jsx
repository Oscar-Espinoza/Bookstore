import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import NewBook from '../components/NewBook';

export default function Books() {
  const books = useSelector((state) => state.books);

  useEffect(() => () => {}, [books]);

  return (
    <>
      <ul className="books">
        {books.map((book) => (
          <li key={book.title}>
            <Book
              category={book.category}
              author={book.author || 'unknwon'}
              title={book.title}
              progress={book.progress || 0}
              currentChapter={book.chapter || 1}
            />
          </li>
        ))}
      </ul>
      <div className="horizontal-divider" />
      <NewBook />
    </>
  );
}
