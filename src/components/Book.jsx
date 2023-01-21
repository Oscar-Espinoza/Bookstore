import React, { Component } from 'react';

class Book extends Component {
  render() {
    return (
      <div className="book">
        <div className="book-content">
          <div className="book-info">
            <h4 className="book-category">{this.props.category}</h4>
            <h2 className="book-title">{this.props.title}</h2>
            <h6 className="book-author">{this.props.author}</h6>
            <div className="action-buttons">
              <button className="button-outline">Comments</button>
              <div className="vertical-divider"></div>
              <button className="button-outline">Remove</button>
              <div className="vertical-divider"></div>
              <button className="button-outline">Edit</button>
            </div>
          </div>
          <div className="progress-container">
            <div className="circular-progress-container">
              <div className="circular-progress"></div>
            </div>
            <div className="progress-stat">
              <p className="percent-complete">64%</p>
              <p className="completed">Completed</p>
            </div>
            <div className="progress-divider"></div>
            <div className="current-chapter-container">
              <div>
                <p className="current-chapter-label">CURRENT CHAPTER</p>
                <p className="current-chapter">Chapter 17</p>
              </div>
              <button className="primary-button" type="button">UPDATE PROGRESS</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;