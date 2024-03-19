// AdminHome.js

import React from 'react';

import Navbar1 from './Navbar1';

const AdminHome = () => {
  const backgroundStyle = {
    backgroundImage: 'url("https://images.pexels.com/photos/7180617/pexels-photo-7180617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh', // Adjust as needed
  };
  return (
    <div style={backgroundStyle}>
      <Navbar1 />
    </div>
  );
};

export default AdminHome;
