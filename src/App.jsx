import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import AddNewSong from "./components/AddNewSong";
import DisplayMusic from "./components/display_music/DisplayMusic";
import FilterSongs from "./components/display_music/FilterSongs"
import axios from "axios";
import "./components/styles.css";

function App() {
  const [songs, setSongs] = useState([]);
  const [requestReload, setRequestReload] = useState(true);

  useEffect(() => {
    if (requestReload) {
      getAllSongs();
      setRequestReload(false);
    }
  }, [requestReload]);
 
  //This async function allows our front end to communicate with our backend to performa get call for all music.
  async function getAllSongs() {
    let response = await axios.get("http://127.0.0.1:8000/music/");
    setSongs(response.data);
  }
  //This function allows a user to pass a song object in to AddNewSong via param to be added to the database
  function addNewSong(song) {
    let tempSong = [...songs, song];
    setSongs(tempSong);
  }

  
  return (
    <div className="App non-existant">
      <NavBar />
      <div className="page-background">
        <AddNewSong addFunction={addNewSong} reload={setRequestReload}/>
        <FilterSongs songs={songs} resetDisplay={getAllSongs} setDisplay={setSongs} />
        <DisplayMusic currentSongs={songs} reload={setRequestReload}/>
        <div className="footer"></div>
      </div>
    </div>
  );
}

export default App;
