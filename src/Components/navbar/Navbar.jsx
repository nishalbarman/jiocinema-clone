import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* navbar starts here */}
      <div className="navbar flex jc-sp-b al-center">
        <div className="navbar-left flex jc-left al-center">
          <img
            src="https://www.jiocinema.com/images/jc_logo.svg"
            alt="navbar-logo"
            className="navbar-logo"
          />
          <Link to="./index.html">JioCinema</Link>
          <button id="subscribe" className="subscribe-btn">
            Subscribe
          </button>
          <Link to="/">For You</Link>
          <Link to="/">Sports</Link>
          <Link to="/">Free</Link>
          <Link to="/">Premium</Link>
        </div>
        <div className="navbar-right flex jc-right al-center">
          {/* second part */}
          <div className="input-div flex al-center">
            <input type="text" placeholder="Search" />
            <i
              className="fa-solid fa-microphone fa-lg"
              style={{ color: "#ffffff" }}
            />
          </div>
          <img
            src="https://www.jiocinema.com/images/profile/profile_avatar.svg"
            className="profile-icon"
          />
        </div>
      </div>
      {/* navbar ends here */}
    </>
  );
}

export default Navbar;
