import axios from 'axios';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import { baseUrl } from '../redux/store';

function Book(props) {
  const dispatch = useDispatch();

  const handleRemove = async (id) => {
    await axios.delete(baseUrl + id)
      .then(() => dispatch(removeBook(id)));
  };

  const {
    category, title, author, progress, currentChapter, id,
  } = props;
  return (
    <div className="book">
      <div className="book-content">
        <div className="book-info">
          <h4 className="book-category">{category}</h4>
          <h2 className="book-title">{title}</h2>
          <h6 className="book-author">{author}</h6>
          <div className="action-buttons">
            <button type="button" className="button-outline">Comments</button>
            <div className="vertical-divider" />
            <button type="button" className="button-outline" onClick={() => handleRemove(id)}>Remove</button>
            <div className="vertical-divider" />
            <button type="button" className="button-outline">Edit</button>
          </div>
        </div>
        <div className="progress-container">
          <div className="circular-progress-container">
            <div className="circular-progress" />
          </div>
          <div className="progress-stat">
            <p className="percent-complete">
              {0 || progress}
              %
            </p>
            <p className="completed">Completed</p>
          </div>
          <div className="progress-divider" />
          <div className="current-chapter-container">
            <div>
              <p className="current-chapter-label">CURRENT CHAPTER</p>
              <p className="current-chapter">
                Chapter
                {' '}
                {0 || currentChapter}
              </p>
            </div>
            <button className="primary-button" type="button">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  currentChapter: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
