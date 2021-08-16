import React from "react";
import Video from "./components/Video";
import SearchArea from "./components/SearchArea";
import './App.css';

const App = (props) => {
  return  (
    <div>
      <h1>WeTube</h1>
      <SearchArea/>
      <Video
        title="The Best Video"
        dateAdded="2 days ago"
        channel="News Channel"
      />
      <Video
        title="Cool Video Title"
        dateAdded="5 days ago"
        channel="Local Channel"
      />
      <Video
        title="Learning Video Title"
        dateAdded="1 week ago"
        channel="Learning Channel"
      />
  </div>
  )
}
export default App;
