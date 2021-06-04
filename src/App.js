import React, { useState } from "react";
import "./scss/main.scss";
import TopMenu from "./components/TopMenu";
import MainChannelInfo from "./components/MainChannelInfo";
import Posts from "./components/Posts";
import PostsImages from "./components/PostsImages";

function App() {
  return (
    <div className="main-wrapper">
      <TopMenu />
      <MainChannelInfo />
      <Posts />
      <PostsImages />
    </div>
  );
}

export default App;
