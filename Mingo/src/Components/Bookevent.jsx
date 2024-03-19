// BookEventPage.jsx

import React, { useState } from 'react';
import EventDetails from '../Components/EventDetails';
import './Bookevent.css';
import Navbar from '../Components/Navbar'
function Bookevent() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Function to handle image click
  const handleImageClick = (event) => {
    setSelectedEvent(event);
  };

  return selectedEvent ? (
    <EventDetails event={selectedEvent} />
  ) : (
   <div>
   <div><Navbar/></div>
    <div className="book-event-page">
      <h1 className="event-title">Book Your Events</h1>
      <div className="image-grid">
        <div className="image-item item1" onClick={() => handleImageClick({id: 1 , name:  "CLASSIC BIRTHDAY EVENTS" , image :"https://www.diytomake.com/wp-content/uploads/2021/03/How-To-Design-And-Decorate-A-Room-for-the-Perfect-Party.jpg"})}>
        <span className="event-name">CLASSIC BIRTHDAY EVENTS</span>
        </div>
        <div className="image-item item2" onClick={() => handleImageClick({id:2 , name:"PREMIMUM BIRTHDAY EVENTS" , image:"https://i.pinimg.com/originals/f8/10/9a/f8109a552f5e7f18c40f066032592d00.jpg"})}>
          <span className="event-name">PREMIMUM BIRTHDAY EVENTS</span>
        </div>
      
      </div>
    </div>
    </div>
  );
}

export default Bookevent;







