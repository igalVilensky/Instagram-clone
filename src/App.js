import React, { useState } from "react";
/* import ".components/FontawesomeIcons/FontawesomeIcons"; */
import "./scss/main.scss";
import TopMenu from "./components/TopMenu";
import MainChannelInfo from "./components/MainChannelInfo";

function App() {
  return (
    <div className="main-wrapper">
      <TopMenu />
      <MainChannelInfo />
    </div>
  );
}

export default App;
