import PropTypes from 'prop-types';

function Book(props) {
  const {
    category, title, author, progress, currentChapter,
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
            <button type="button" className="button-outline">Remove</button>
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
              {progress}
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
                {currentChapter}
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
};
