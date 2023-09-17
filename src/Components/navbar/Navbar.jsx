import React from "react";
import "Navbar.css";

function Navbar() {
  return (
    <>
      {/* navbar starts here */}
      <div className="navbar flex jc-sp-b al-center">
        {/* flex, justify-content:space-between */}
        <div className="navbar-left flex jc-left al-center">
          <img
            src="https://www.jiocinema.com/images/jc_logo.svg"
            alt="navbar-logo"
            className="navbar-logo"
          />
          <a href="./index.html">JioCinema</a>
          <button id="subscribe" className="subscribe-btn">
            Subscribe
          </button>
          <a href="#">For You</a>
          <a href="#">Sports</a>
          <a href="#">Free</a>
          <a href="#">Premium</a>
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
