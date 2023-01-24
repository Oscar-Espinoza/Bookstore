import React, { Component } from 'react';

class NewBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // add code to handle form submission here
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { title, category } = this.state;
    return (
      <>
        <h2 className="form-title"> ADD NEW BOOK </h2>
        <form onSubmit={this.handleSubmit} className="add-form">
          <input
            type="text"
            name="title"
            value={title}
            placeholder="Book title"
            className="input title-input"
            onChange={this.handleChange}
          />
          <select
            name="category"
            className="input category-input"
            value={category}
            onChange={this.handleChange}
          >
            <option value="Fiction">Fiction</option>
            <option value="Science">Science</option>
            <option value="History">History</option>
            <option value="Biography">Biography</option>
          </select>
          <button type="submit" className="primary-button-big"> ADD BOOK </button>
        </form>
      </>
    );
  }
}

export default NewBook;
