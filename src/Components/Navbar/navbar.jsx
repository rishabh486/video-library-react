import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/auth-context";
import { like_icon, playlist_icon } from "../../Assests";
import { useWatchLater } from "../../Context/watchLater-context";
function Navbar() {
  const {
    state: { tokenExists, LogOutHandler },
  } = useAuth();
  const {
    state: { likes },
  } = useWatchLater();
  function getNavLinks() {
    if (tokenExists) {
      return (
        <>
          <Link to="/watchLater-page">Watch Later</Link>
          <Link to="/likeVideo-page">
            <div class="notification">
              <div class="icon-badge">
                <button type="button" class="icon-button" id="cart-button">
                  <span>
                    <img class="icon-img" src={like_icon} />
                  </span>
                </button>

                <span class="icon-badge-number">{likes?.length}</span>
              </div>
            </div>
          </Link>
          <Link to="/playlist-page">
            <div class="notification">
              <div class="icon-badge">
                <button type="button" class="icon-button" id="cart-button">
                  <span>
                    <img class="icon-img" src={playlist_icon} />
                  </span>
                </button>

                <span class="icon-badge-number"></span>
              </div>
            </div>
          </Link>

          <a onClick={LogOutHandler} className="logout-button">
            Logout
          </a>
        </>
      );
    } else {
      return (
        <>
          <Link to="/signin-page">Signin </Link>
          <Link to="/signup-page">Signup </Link>
        </>
      );
    }
  }
  return (
    <div>
      <div className="navbar">
        <div class="brand">
          <h2>RTUBE</h2>
        </div>

        <div class="leftside">
          <div class="links">
            <Link to="/">Home</Link>
            {getNavLinks()}
          </div>
        </div>
        <div class="rightside">
          <input type="text" placeholder="search.." />
          <button>search</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
