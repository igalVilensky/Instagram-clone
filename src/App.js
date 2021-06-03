import React, { useState } from "react";
import "./scss/main.scss";
import TopMenu from "./components/TopMenu";
import MainChannelInfo from "./components/MainChannelInfo";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="main-wrapper">
      <TopMenu />
      <MainChannelInfo />
      <Posts />
    </div>
  );
}

export default App;
