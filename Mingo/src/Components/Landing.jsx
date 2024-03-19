import React from 'react';
import './Landing.css';

function Home() {
  return (
    <div className="landing-page">
   
                       
      <div className="image-slider">
        {/* Image slider content */}
      </div>
      <div className="about-us">
        <div className="about-us-image">
          <img src="https://images.pexels.com/photos/3419697/pexels-photo-3419697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="About Us" />
        </div>
        <div className="about-us-content">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
      </div>
      <div className="our-works">
        <h2>Our Works</h2>
        <div className="works-grid">
          <div className="work-item">
            <img src="https://images.pexels.com/photos/3419697/pexels-photo-3419697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Work 1" />
          </div>
          <div className="work-item">
            <img src="https://images.pexels.com/photos/3419697/pexels-photo-3419697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Work 2" />
          </div>
          <div className="work-item">
            <img src="https://images.pexels.com/photos/3419697/pexels-photo-3419697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Work 3" />
          </div>
          {/* Repeat for additional works */}
        </div>
      </div>
      <div className="happy-customers">
        <h2>Happy Customers</h2>
        <div className="customers-grid">
          <div className="customer-item">
            <img src="https://images.pexels.com/photos/3419697/pexels-photo-3419697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Customer 1" />
            <p>Customer 1 feedback</p>
          </div>
          <div className="customer-item">
            <img src="https://images.pexels.com/photos/3419697/pexels-photo-3419697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Customer 2" />
            <p>Customer 2 feedback</p>
          </div>
          <div className="customer-item">
            <img src="https://images.pexels.com/photos/3419697/pexels-photo-3419697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Customer 3" />
            <p>Customer 3 feedback</p>
          </div>
          {/* Repeat for additional customers */}
        </div>
      </div>
    </div>
  );
}

export default Home;
