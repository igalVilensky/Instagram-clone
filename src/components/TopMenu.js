import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Avatar from "@material-ui/core/Avatar";
function TopMenu() {
  return (
    <div className="fixed">
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
        <div className="menu__icons">
          <div className="home">
            <FontAwesomeIcon icon={faHome} size="2x" />
          </div>
          <div className="inbox">
            <FontAwesomeIcon icon={faPaperPlane} size="2x" />
          </div>
          <div className="explore">
            <FontAwesomeIcon icon={faCompass} size="2x" />
          </div>
          <div className="activity">
            <FontAwesomeIcon icon={faHeart} size="2x" />
          </div>
          <div className="profile">
            <Avatar
              alt="bla"
              src="https://pbs.twimg.com/profile_images/918502923965026306/dbcocGbL.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopMenu;
