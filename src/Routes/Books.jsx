import Book from '../components/Book';
import NewBook from '../components/NewBook';

export default function Books() {
  return (
    <>
      <ul className="books">
        <li><Book category="history" author="Timmy's dad" title="The little dolphin who cried" /></li>
        <li><Book category="history" author="Timmy's dad" title="The little dolphin who cried" /></li>
        <li><Book category="history" author="Timmy's dad" title="The little dolphin who cried" /></li>
      </ul>
      <div className="horizontal-divider" />
      <NewBook />

    </>
  );
}
