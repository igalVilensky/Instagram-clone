import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
function MainChannelInfo() {
  return (
    <div className="MainChannelInfo__wrap">
      <div className="main-avatar">
        <Avatar
          alt="bla"
          src="https://pbs.twimg.com/profile_images/918502923965026306/dbcocGbL.jpg"
        />
      </div>
      <div className="channel__info">
        <div className="user__subscribe__settings">
          <div className="user__name">
            <h1>Igal Vilensky</h1>
          </div>
          <div className="subscribe">
            <button>Subscribe</button>
          </div>
          <div className="settings">
            <FontAwesomeIcon icon={faEllipsisH} size="2x" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainChannelInfo;
