import React, { useState } from "react";
import "./scss/main.scss";
import TopMenu from "./components/TopMenu";
import MainChannelInfo from "./components/MainChannelInfo";
import Posts from "./components/Posts";
import PostsImages from "./components/PostsImages";
import Counters from "./counters.json";

function App() {
  const [counter, setCounter] = useState(Counters);
  console.log(Counters);

  return (
    <div className="main-wrapper">
      <TopMenu />
      <MainChannelInfo />
      <Posts />
      <PostsImages counter={counter} />
    </div>
  );
}

export default App;
