    import Sidebar from "../components/SideBar";
    // import PaymentList from "./UserPayment";
    import "../assets/css/Userdb.css";       
import FooterUser from "../components/FooterUser";
   
   

function UserDashboard() {

  

        const bookings = [
            {
              eventName: 'Conference Meeting',
              eventId: 'E123456',
              location: 'Coimbatore',
              amount: '$500',
              status: 'Confirmed',
              date: '21.10.2022'
            },
            {
              eventName: 'Conference Meeting',
              eventId: 'E789012',
              location: 'Conference Center',
              amount: '$300',
              status: 'Pending',
              date: '01.01.2023'
            },
            {
              eventName: 'Conference Meeting',
              eventId: 'E789012',
              location: 'Conference Center',
              amount: '$300',
              status: 'Pending',
              date: '16.12.2023'
            },
            {
              eventName: 'Conference Meeting',
              eventId: 'E789012',
              location: 'Conference Center',
              amount: '$300',
              status: 'Pending',
              date: '21.11.2024'
            },
            {
              eventName: 'Conference Meeting',
              eventId: 'E789012',
              location: 'Conference Center',
              amount: '$300',
              status: 'Pending',
              date: '29.03.2024'
            },
            {
              eventName: 'Conference Meeting',
              eventId: 'E789012',
              location: 'Conference Center',
              amount: '$300',
              status: 'Pending',
              date: '12.10.2024'
            },
            
          ];

          const paymentHistory = [
            {
              date: '2024-06-11',
              totalAmount: 100,
              paidAmount: 50,
              balanceAmount: 50,
              paymentMode: 'CARD',
              status: 'Paid',
            },
            {
              date: '2023-01-01',
              totalAmount: 100,
              paidAmount: 50,
              balanceAmount: 50,
              paymentMode: 'CARD',
              status: 'Paid',
            },
            {
              date: '2022-01-01',
              totalAmount: 100,
              paidAmount: 50,
              balanceAmount: 50,
              paymentMode: 'CARD',
              status: 'Paid',
            },
            
          ];
         
        
        
          return (
            <>
              <Sidebar />
          
              <div className="udb_part1">
                <div className="titleudb" style={{ textAlign: 'center', color: '#4e5db2' }}>
                  <br></br>
                  <h1>User DashBoard Details</h1>
                </div>
                <div className="widgetudb">
                    
                    <div className="widget-box">
                    <h2>Total Payment</h2>
                    <p>$2,500</p>
                    </div>

                    
                    <div className="widget-box">
                    <h2>Total Parties Booked</h2>
                    <p>5</p>
                    </div>

                    
                   {/*} <div className="widget-box">
                    <h2>Total Events Pending</h2>
                    <p>3</p>
          </div>*/}

                    
                    <div className="widget-box">
                    <h2>Score</h2>
                    <p>80</p>
                    </div>
      {/* </div>         */}
                </div>
              </div><br></br><br></br>
              <div className="upcommingudp">
                <h2 style={{ textAlign: 'center' }}>Types of Parties</h2>
                <div className="event-cards-container">
                  
                  <div className="event-card">
                    <img
                   src="https://images.pexels.com/photos/13293704/pexels-photo-13293704.jpeg?auto=compress&cs=tinysrgb&w=600"
                   alt="Event"
                      className="event-image"
                    />
                    <div className="event-details">
                      <h3>Wedding party</h3>
                      <p></p>
                      <p>Price: $500</p>
                    </div>
                  </div>
          
                  
                  <div className="event-card">
                    <img
                      src="https://images.pexels.com/photos/3234124/pexels-photo-3234124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with your event image URL
                      alt="Event"
                      className="event-image"
                    />
                    <div className="event-details">
                      <h3>Birthday Party</h3>
                    
                      <p>Price: $300</p>
                    </div>
                  </div>
                  
                  <div className="event-card">
                    <img
                      src="https://images.pexels.com/photos/16789929/pexels-photo-16789929/free-photo-of-bottom-of-the-babys-foot.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Event"
                      className="event-image"
                    />
                    <div className="event-details">
                      <h3>Gender reveal Party</h3>
                     
                      <p>Price: $300</p>
                    </div>
                  </div>
                  
                  <div className="event-card">
                    <img
                      src="https://images.pexels.com/photos/3779409/pexels-photo-3779409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Event"
                      className="event-image"
                    />
                    <div className="event-details">
                      <h3>Success Party</h3>
                      
                      <p>Price: $300</p>
                    </div>
                  </div>
          
                </div>
              </div>
             {/* <div className="mybookudb">
                <h2 style={{ textAlign: 'center' }}>My Bookings</h2>
                <table className="booking-table">
                  <thead>
                    <tr>
                      <th>Event Name</th>
                      <th>Event ID</th>
                      <th>Location</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking, index) => (
                      <tr key={index}>
                        <td>{booking.eventName}</td>
                        <td>{booking.eventId}</td>
                        <td>{booking.location}</td>
                        <td>{booking.amount}</td>
                        <td>{booking.status}</td>
                        <td>{booking.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div><br></br>
       {/* <div>
        <h2 style={{ textAlign: 'center' }}>Step-by-Step Progress</h2>
        <canvas ref={chartRef} width="400" height="200"></canvas>
      </div> 
              <div className="paymentudb">
                <h2 style={{ textAlign: 'center',color:'#4e5db2' }}>Payment History</h2>
                <table className="payment-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Total Amount</th>
                      <th>Paid Amount</th>
                      <th>Balance Amount</th>
                      <th>Payment Mode</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paymentHistory.map((payment, index) => (
                      <tr key={index}>
                        <td>{payment.date}</td>
                        <td>{payment.totalAmount}</td>
                        <td>{payment.paidAmount}</td>
                        <td>{payment.balanceAmount}</td>
                        <td>{payment.paymentMode}</td>
                        <td>{payment.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                    </div>*/}
              <FooterUser/>
            </>
          );
          }
          
          export default UserDashboard;
