import React from 'react';
import './ViewBooked.css'; // Import the CSS file
import Navbar from './Navbar';

function ViewBookedevent() {
  return (
    <div>
    <div><Navbar/></div>
    <div className="view-booked-events-container">
      <h1>View Booked Events</h1>
      <table className="event-table">
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Place</th>
            <th>Date</th>
            <th>Time</th>
            <th>Total Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Birthday party</td>
            <td>coimbatore</td>
            <td>2024-03-20</td>
            <td>10:00 AM</td>
            <td>5000</td>
            <td>
              <span className="action-icon update-icon">&#9998;</span>
              <span className="action-icon delete-icon">&#128465;</span>
            </td>
          </tr>
          {/* Add more rows as needed */}
          <tr>
            <td>Birthday party</td>
            <td>chennai</td>
            <td>2024-03-20</td>
            <td>12:00 PM</td>
            <td>15000</td>
            <td>
              <span className="action-icon update-icon">&#9998;</span>
              <span className="action-icon delete-icon">&#128465;</span>
            </td>
          </tr><tr>
          <td>Bachelors Party</td>
          <td>Goa</td>
          <td>2024-03-20</td>
          <td>12:00 AM</td>
          <td>10000</td>
          <td>
            <span className="action-icon update-icon">&#9998;</span>
            <span className="action-icon delete-icon">&#128465;</span>
          </td>
        </tr><tr>
        <td>Wedding party</td>
        <td>Cuddalore</td>
        <td>2024-03-20</td>
        <td>06:00 AM</td>
        <td>100000</td>
        <td>
          <span className="action-icon update-icon">&#9998;</span>
          <span className="action-icon delete-icon">&#128465;</span>
        </td>
      </tr><tr>
      <td>Gender Reveal Party</td>
      <td>Trichy</td>
      <td>2024-03-20</td>
      <td>10:00 AM</td>
      <td>25000</td>
      <td>
        <span className="action-icon update-icon">&#9998;</span>
        <span className="action-icon delete-icon">&#128465;</span>
      </td>
    </tr><tr>
    <td>Succes Party</td>
    <td>Salem</td>
    <td>2024-03-20</td>
    <td>10:00 AM</td>
    <td>15000</td>
    <td>
      <span className="action-icon update-icon">&#9998;</span>
      <span className="action-icon delete-icon">&#128465;</span>
    </td>
  </tr>


        </tbody>
      </table>
    </div>
    </div>
  );
}

export default ViewBookedevent;
