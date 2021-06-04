import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
function PostsImages() {
  return (
    <div>
      <div className="posts__items__wrap">
        <div className="post__image__wrap">
          <img
            src="https://images.unsplash.com/photo-1488654715439-fbf461f0eb8d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="post"
          ></img>
          <FontAwesomeIcon icon={faHeart} className="heart" />
          <span className="post__item__likes__counter">
            <strong>538k</strong>
          </span>
        </div>
        <div className="post__image__wrap">
          <img
            src="https://images.unsplash.com/photo-1504600770771-fb03a6961d33?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="post"
          ></img>
          <FontAwesomeIcon icon={faHeart} className="heart" />
          <span className="post__item__likes__counter">
            <strong>538k</strong>
          </span>
        </div>
        <div className="post__image__wrap">
          <img
            src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNxdWFyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="post"
          ></img>
          <FontAwesomeIcon icon={faHeart} className="heart" />
          <span className="post__item__likes__counter">
            <strong>538k</strong>
          </span>
        </div>
      </div>
      <div className="posts__items__wrap">
        <div className="post__image__wrap">
          <img
            src="https://images.unsplash.com/photo-1581499230598-7a90d541c73a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHNxdWFyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="post"
          ></img>
          <FontAwesomeIcon icon={faHeart} className="heart" />
          <span className="post__item__likes__counter">
            <strong>538k</strong>
          </span>
        </div>
        <div className="post__image__wrap">
          <img
            src="https://images.unsplash.com/photo-1592660716763-09efba6db4e3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHNxdWFyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="post"
          ></img>
          <FontAwesomeIcon icon={faHeart} className="heart" />
          <span className="post__item__likes__counter">
            <strong>538k</strong>
          </span>
        </div>
        <div className="post__image__wrap">
          <img
            src="https://images.unsplash.com/photo-1612450632008-22c2a5437dc1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHNxdWFyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="post"
          ></img>
          <FontAwesomeIcon icon={faHeart} className="heart" />
          <span className="post__item__likes__counter">
            <strong>538k</strong>
          </span>
        </div>
      </div>
      <div className="posts__items__wrap">
        <div className="post__image__wrap">
          <img
            src="https://images.unsplash.com/photo-1488654715439-fbf461f0eb8d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="post"
          ></img>
          <FontAwesomeIcon icon={faHeart} className="heart" />
          <span className="post__item__likes__counter">
            <strong>538k</strong>
          </span>
        </div>
        <div className="post__image__wrap">
          <img
            src="https://images.unsplash.com/photo-1504600770771-fb03a6961d33?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="post"
          ></img>
          <FontAwesomeIcon icon={faHeart} className="heart" />
          <span className="post__item__likes__counter">
            <strong>538k</strong>
          </span>
        </div>
        <div className="post__image__wrap">
          <img
            src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNxdWFyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="post"
          ></img>
          <FontAwesomeIcon icon={faHeart} className="heart hover" />
          <span className="post__item__likes__counter">
            <strong className="hover">538k</strong>
          </span>
        </div>
      </div>
    </div>
  );
}

export default PostsImages;
