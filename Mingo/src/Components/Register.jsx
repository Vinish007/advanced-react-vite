import React, { useState } from 'react';
import "./Register.css";
import { Link } from 'react-router-dom'; 
function Register() {
  const [isSignUpActive, setIsSignUpActive] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUpClick = () => {
    console.log("Sign up button clicked");
    setIsSignUpActive(true);
  };

  const handleSignInClick = () => {
    console.log("Sign in button clicked");
    setIsSignUpActive(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'admin@gmail.com' && password === 'admin12345') {
      // Navigate to admin home if the email and password match
      window.location.href = "/admin-home";
    } else {
      // Navigate to regular home
      window.location.href = "/home";
    }
  };
  

  return (
    <div className={`uniqueContainer ${isSignUpActive ? 'right-panel-active' : ''}`}>
      <div className="uniqueFormContainer uniqueSignUpContainer">
        <form className="uniqueForm">
          <h1>Create Account</h1>
          <input type="role" className="uniqueInput" placeholder="Role" />
          <input type="text" className="uniqueInput" placeholder="Name" />
          <input type="email" className="uniqueInput" placeholder="Email" />
          <input type="number" className="uniqueInput" placeholder="Mobile Number" />
          <input type="password" className="uniqueInput" placeholder="Password" />
          <input type="confirm-password" className="uniqueInput" placeholder="Confirm-Password" />
          <Link to="/home"><button className="uniqueButton" onClick={handleSignUpClick}>Sign Up</button></Link>
        </form>
      </div>
      <div className="uniqueFormContainer uniqueSignInContainer">
        <form className="uniqueForm">
          <h1>Sign in</h1>
          <span>or use your account</span>
          <input type="email" className="uniqueInput" placeholder="Email" />
          <input type="password" className="uniqueInput" placeholder="Password" />
          <Link to="/home"><button className="uniqueButton" onClick={handleSignInClick}>Sign In</button></Link>
        </form>
      </div>
      <div className="uniqueOverlayContainer">
        <div className="uniqueOverlay">
          <div className="uniqueOverlayPanel uniqueOverlayLeft">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
           <button className="uniqueButton ghost" onClick={handleSignInClick}>
              Sign In
            </button>
          </div>
          <div className="uniqueOverlayPanel uniqueOverlayRight">
            <h1>Hello, Explorer!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="uniqueButton ghost" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
