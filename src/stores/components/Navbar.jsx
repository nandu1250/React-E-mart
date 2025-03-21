/*import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <div className="navbar-section">
      <div className="navSection">
        <Link to="/" className="custom-link">
        <div>
      <Link to="/login">
        <button style={{ padding: '10px 20px', marginTop: '20px' }}>Login</button>
      </Link>
    </div>
        </Link>
        <div className="title">
          <h2>E-Mart</h2>
        </div>

        <Link to="/cart">
          <div className="cart">
            Cart <span>{cartItems.length}</span>
          </div>
        </Link>
      </div>

      <div className="subMenu">
        <ul>
          <Link to="/mobiles" className="custom-link"><li>Mobiles</li></Link>
          <Link to="/computers" className="custom-link"><li>Computers</li></Link>
          <Link to="/watch" className="custom-link"><li>Watches</li></Link>
          <Link to="/kitchen" className="custom-link"><li>Kitchen</li></Link>
          <Link to="/fridge" className="custom-link"><li>Fridge</li></Link>
          <Link to="/ac" className="custom-link"><li>AC</li></Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar; */

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const userEmail = localStorage.getItem('userEmail');

  const [showLogout, setShowLogout] = useState(false);

  // Toggle logout button visibility when the user clicks on the first letter
  const handleLetterClick = () => {
    setShowLogout(!showLogout);
  };

  // Handle logout functionality
  const handleLogout = () => {
    alert('Logout Successful');
    localStorage.removeItem('userEmail'); // Clear user info from localStorage
    setShowLogout(false); // Hide the logout button
    navigate('/login'); // Navigate to login page
  };

  useEffect(() => {
    if (!userEmail) {
      setShowLogout(false); // Ensure the logout button is hidden if not logged in
    }
  }, [userEmail]);

  return (
    <div className="navbar-section" style={styles.navbarContainer}>
      <div className="navSection" style={styles.navSection}>
        {/* Login button in top-left corner */}
        {!userEmail && (
          <div className="loginButton" style={styles.loginButton}>
            <Link to="/login">
              <button style={{ padding: '10px 20px', marginTop: '5px' }}>
                Login
              </button>
            </Link>
          </div>
        )}

        {/* E-Mart title in the center */}
        <div className="title" style={styles.title}>
          <h1>E-Mart</h1>
        </div>

        <Link to="/cart">
          <div className="cart" style={styles.cart}>
            Cart <span>{cartItems.length}</span>
          </div>
        </Link>
      </div>

      {/* Show the first letter of the email in top-left corner if logged in */}
      {userEmail && !showLogout && (
        <div
          style={styles.firstLetter}
          onClick={handleLetterClick}
        >
          {userEmail[0].toUpperCase()} {/* Display first letter of email */}
        </div>
      )}

      {/* Show logout button after clicking the first letter */}
      {showLogout && (
        <div style={styles.logoutButton}>
          <button onClick={handleLogout} style={styles.logoutButtonStyle}>
            Logout
          </button>
        </div>
      )}

      {/* Submenu for categories */}
      <div className="subMenu">
        <ul>
          <Link to="/mobiles" className="custom-link">
            <li>Mobiles</li>
          </Link>
          <Link to="/computers" className="custom-link">
            <li>Computers</li>
          </Link>
          <Link to="/watch" className="custom-link">
            <li>Watches</li>
          </Link>
          <Link to="/kitchen" className="custom-link">
            <li>Kitchen</li>
          </Link>
          <Link to="/fridge" className="custom-link">
            <li>Fridge</li>
          </Link>
          <Link to="/ac" className="custom-link">
            <li>AC</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  navbarContainer: {
    position: 'relative', // Make sure we can position elements absolutely within this container
  },
  navSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: 'white',
  },
  loginButton: {
    position: 'absolute',
    top: '20px',
    left: '20px',
  },
  title: {
    textAlign: 'center',
    flex: 1,
    fontWeight: 'bold',
  },
  cart: {
    fontSize: '25px', // Increased size for cart text
    fontWeight: 'bold',
    color: 'white',
  },
  firstLetter: {
    position: 'absolute', // Position the first letter of the email in the top-left corner
    top: '20px',
    left: '20px',
    fontSize: '30px', // Bigger font for the first letter
    fontWeight: 'bold',
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  logoutButton: {
    position: 'absolute', // Position the logout button below the first letter
    top: '30px', // Adjust this based on the first letter size
    left: '20px',
  },
  logoutButtonStyle: {
    padding: '10px 20px', // Make logout button similar size to login button
    fontSize: '16px', // Font size for logout button
    backgroundColor: '#ff5722', // A different color for logout to make it stand out
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Navbar;
