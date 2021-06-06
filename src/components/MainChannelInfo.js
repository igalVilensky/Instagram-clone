import React from "react";
/* import Avatar from "@material-ui/core/Avatar"; */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
function MainChannelInfo() {
  return (
    <div className="MainChannelInfo__wrap">
      <div className="main-avatar">
        {/* <Avatar
          alt="bla"
          src="https://pbs.twimg.com/profile_images/918502923965026306/dbcocGbL.jpg"
        /> */}
        <img
          src="https://pbs.twimg.com/profile_images/918502923965026306/dbcocGbL.jpg"
          alt="logo"
        ></img>
      </div>
      <div className="channel__info">
        <div className="user__subscribe__settings">
          <div className="user__name">
            <h1>Igal Vilensky</h1>
          </div>
          <div className="subscribe">
            <button>Follow</button>
          </div>
          <div className="settings">
            <FontAwesomeIcon icon={faEllipsisH} size="2x" />
          </div>
        </div>
        <div className="counters">
          <span className="posts__count">
            <h3>5,531 posts</h3>
          </span>
          <span className="followers__count">
            <h3>225m followers</h3>
          </span>
          <span className="following__count">
            <h3>150 following</h3>
          </span>
        </div>
        <div className="channel__text">
          <p>Spotlighting athlete* and 👟 stories</p>
          <p>#BlackLivesMatter and #StopAsianHate</p>
          <p>
            <strong>linkin.bio/nike</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainChannelInfo;
