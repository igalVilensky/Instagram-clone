import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "@material-ui/core/Avatar";
function TopMenu() {
  return (
    <div className="app__header">
      <div className="app__headerImage">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="logo"
        ></img>
      </div>
      <div className="input-search">
        <input type="search" id="site-search" placeholder="🔍 Search"></input>
      </div>
      <div className="menu-icons">
        <div className="home">{/* <FontAwesomeIcon icon="user" /> */}</div>
        <div className="inbox"></div>
        <div className="explore"></div>
        <div className="activity"></div>
        <div className="profile">
          <Avatar
            alt="bla"
            src="https://pbs.twimg.com/profile_images/918502923965026306/dbcocGbL.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default TopMenu;
