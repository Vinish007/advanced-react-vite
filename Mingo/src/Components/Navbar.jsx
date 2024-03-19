import React from 'react';
import './Navbar.css';// Import your logo image
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <p>Your Logo</p>
      </div>
      <div className="navbar-links">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/book">Book Events</Link></li>
          <li><Link to="/view">View Booked Events</Link></li>
          <li><Link to="/admin-home">Admin</Link></li>
          <li><div className="profile-avatar">
          <Link to="/"><Avatar alt="Profile" src="/static/images/avatar/1.jpg" /></Link>
          <button className="logout-button">Logout</button>
        </div></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
