import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Login from "../Login";
import Signup from "../Signup";

const NavLinks = ({ onLoginClick, onSignupClick }) => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/menu">Menu</NavLink>
      <NavLink to="/restaurantform">Add Restaurants</NavLink>
      <button onClick={onLoginClick}>Login</button>
      <button onClick={onSignupClick}>Sign Up</button>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false); // Hide Signup if it's open
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false); // Hide Login if it's open
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleCloseSignup = () => {
    setShowSignup(false);
  };

  const handleSwitchToLogin = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  const handleSwitchToSignup = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  return (
    <>
      <nav className="w-1/3 flex justify-end">
        <div className="hidden md:flex justify-between w-full">
          <NavLinks onLoginClick={handleLoginClick} onSignupClick={handleSignupClick} />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex basis-full flex-col items-center">
          <NavLinks onLoginClick={handleLoginClick} onSignupClick={handleSignupClick} />
        </div>
      )}

      {showLogin && <Login onClose={handleCloseLogin} onSwitchToSignup={handleSwitchToSignup} />}
      {showSignup && <Signup onClose={handleCloseSignup} onSwitchToLogin={handleSwitchToLogin} />}
    </>
  );
};

export default Nav;
