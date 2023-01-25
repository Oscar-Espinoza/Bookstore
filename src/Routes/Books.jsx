import { useSelector } from 'react-redux';
import Book from '../components/Book';
import NewBook from '../components/NewBook';

export default function Books() {
  const books = useSelector((state) => state.books);

  return (
    <>
      <ul className="books">
        {books.map((book) => (
          <li key={book.title}>
            <Book
              category={book.category}
              author={book.author}
              title={book.title}
              progress={book.progress}
              currentChapter={book.chapter}
            />
          </li>
        ))}
      </ul>
      <div className="horizontal-divider" />
      <NewBook />

    </>
  );
}
