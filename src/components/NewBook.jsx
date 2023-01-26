import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import { generateID } from '../redux/store';

const initialState = {
  item_id: generateID(),
  title: '',
  author: '',
  category: 'Fiction',
};

export default function NewBook() {
  const [formData, setFormData] = useState(initialState);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(formData));
    setFormData({
      ...initialState,
      item_id: generateID(),
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const { title, category, author } = formData;

  return (
    <>
      <h2 className="form-title"> ADD NEW BOOK </h2>
      <form onSubmit={handleSubmit} className="add-form">
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Book title"
          className="input title-input"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          value={author}
          placeholder="Author"
          className="input title-input"
          onChange={handleChange}
          required
        />
        <select
          name="category"
          className="input category-input"
          value={category}
          onChange={handleChange}
          required
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
