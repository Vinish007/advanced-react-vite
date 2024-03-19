import React from 'react';
import EventCard from '../components/Event Card';
import SideBar from '../components/SideBar';
import EventFilter from '../components/UserEventFilter';
import '../assets/css/eventcontainer.css';
import image1 from '../assets/images/image3.jpg';
import FooterUser from '../components/FooterUser';

const EventContainer = () => {
  
  const events = [
    {
      id: 1,
      type: 'Party',
      description: 'Wedding Party',
      totalPackage: '$1000',
      participantsCount: 150,
      // charges: '$10 per participant',
      image: 'https://images.pexels.com/photos/13293704/pexels-photo-13293704.jpeg?auto=compress&cs=tinysrgb&w=600', 
    },
    {
      id: 2,
      type: 'Party',
      description: 'Birthday Party',
      totalPackage: '$1000',
      participantsCount: 150,
      // charges: '$10 per participant',
      image: 'https://images.pexels.com/photos/3234124/pexels-photo-3234124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    },
    {
      id: 3,
      type: 'Party',
      description: 'Holiday Party',
      totalPackage: '$1000',
      participantsCount: 150,
      // charges: '$10 per participant',
      image: 'https://images.squarespace-cdn.com/content/v1/55c37beae4b0336075603f86/1443039469134-E9SLQBQ2OW1Y69KPKFDO/image-asset.jpeg?format=2500w', // Add your image URL
    },
   
   
    
  ];

  return (
    <>
    <SideBar />
    <div className='eventcontainer1'>
      <br></br>
      <EventFilter/>
      <br></br>
      <h1 id='titlecon'style={{color:'#4e5db2'}} >Party List</h1>
      <div className="event-card-container">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
    <FooterUser/>
    </>
  );
};

export default EventContainer;


