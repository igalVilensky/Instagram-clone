import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
function PostsImages(props) {
  const { counter } = props;
  const setCounter = counter.map((obj) => {
    const { id, title, likes, comments } = obj;
    return (
      <div key={id} className="main-wrap">
        <img
          src="https://quietly-image-uploads.s3.amazonaws.com/image_9912_1280px_5a2c3c86cd8e4ae6a8355474364a5bdc.jpeg"
          alt={title}
        ></img>
        <div className="second-div">
          <FontAwesomeIcon icon={faHeart} className="heart" />
          <span className="post__item__likes__counter">
            <strong>{likes}</strong>
          </span>
          <FontAwesomeIcon icon={faComment} className="comment" />
          <span className="post__item__comments__counter">
            <strong>{comments}</strong>
          </span>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="posts__items__wrap">{setCounter}</div>
    </div>
  );
}

export default PostsImages;
