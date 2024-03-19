

import React from 'react';
import AdminSideBar from '../components/AdminSide';
import BookingTable from '../components/AdbookingTable';

const bookingsData = [
  {
    id: 1,
    bookingId: 'B001',
    userId: 'U001',
    username: 'Vishnu',
    submissionDate: '2022-03-01',
    eventDate: '2022-04-15',
    description: 'Party',
    bookingStatus: 'Pending',
    eventType: 'Holiday Party',
    headcount: 50,
    amount: '$5000',
  },
  {
    id: 2,
    bookingId: 'B002',
    userId: 'U002',
    username: 'Vasu',
    submissionDate: '2022-03-05',
    eventDate: '2022-05-20',
    description: 'Wedding',
    bookingStatus: 'Verified',
    eventType: 'Wedding party',
    headcount: 30,
    amount: '$3000',
  },
  {
    id: 3,
    bookingId: 'B002',
    userId: 'U002',
    username: 'Tpnitheesh',
    submissionDate: '2022-03-05',
    eventDate: '2022-05-20',
    description: 'House warming',
    bookingStatus: 'Confirmed',
    eventType: 'Housewarming party',
    headcount: 30,
    amount: '$3000',
  },
];

const AdminBookingList = () => {
  return (
    <div>
        <AdminSideBar/>
      <h1 style={{textAlign:'center',paddingTop:'30px',color:'#4e5db2'}}>User Booking List</h1><br></br>
      <BookingTable bookings={bookingsData} />
    </div>
  );
};

export default AdminBookingList;
