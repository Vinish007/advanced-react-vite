import React from 'react';
import "../assets/css/EventFilter.css";

const EventFilter = () => {
  return (
    <div>
      <label htmlFor="eventType">Filter by Party Type: </label>
      <select id="eventType">
        <option value="">All</option>
        <option value="Conference">Birthday</option>
        <option value="Workshop">Wedding</option>
        <option value="Seminar">Holiday</option>
      </select>
    </div>
  );
};

export default EventFilter;
