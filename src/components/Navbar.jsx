import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <h1 className='app-name'>Bookstore CMS</h1>
        <ul className='nav-links'>
          <li className="nav-link"><Link to="/">BOOKS</Link></li>
          <li className="nav-link"><Link to="/Categories">CATEGORIES</Link></li>
        </ul>
        <button className="icon-button" type="button"><PersonIcon className='material-icons primary-color'/></button>
      </nav>
    );
  }
}

export default Navbar;