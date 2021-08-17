import React from "react";
import Video from "./components/Video";
import SearchArea from "./components/SearchArea";
import './App.css';
import './wetube.css'

const App = (props) => {
  return  (
    <div>
      <h1>WeTube</h1>
      <SearchArea/>
      <Video/>
  </div>
  )
}
export default App;
