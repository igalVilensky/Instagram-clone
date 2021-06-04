import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { faUserTag } from "@fortawesome/free-solid-svg-icons";
function Posts() {
  return (
    <div className="posts__wrap">
      <ul className="posts__menu__list">
        <li className="list__item posts">
          <FontAwesomeIcon icon={faTh} />
          <h2>POSTS</h2>
        </li>
        <li className="list__item reels">
          <FontAwesomeIcon icon={faVideo} />
          <h2>REELS</h2>
        </li>
        <li className="list__item igtv">
          <FontAwesomeIcon icon={faTv} />
          <h2>IGTV</h2>
        </li>
        <li className="list__item tagged">
          <FontAwesomeIcon icon={faUserTag} />
          <h2>TAGGED</h2>
        </li>
      </ul>
    </div>
  );
}

export default Posts;
