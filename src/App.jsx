import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import AddNewSong from "./components/AddNewSong";
import DisplayMusic from "./components/DisplayMusic";
import axios from "axios";
import './components/styles.css'

function App() {
  const [songs, setSongs] = useState([]);

  //This use effect runs only once storing all songs currently in the database into the useState variable songs.
  useEffect (()=>{
    getAllSongs()
  },[])

  useEffect (()=>{
    getAllSongs()
  },[songs])
  //This async function allows our front end to communicate with our backend to performa get call for all music.
  async function getAllSongs() {
    let response = await axios.get("http://127.0.0.1:8000/music/");
    setSongs(response.data);
  }

  function addNewSong (song) {
    let tempSong = [...songs, song]
    setSongs(tempSong)
  }

  //Don't forget to pass props into components in the future
  return (
    <div className="App">
      <NavBar  />
      <AddNewSong  addFunction = {addNewSong}/>
      <DisplayMusic currentSongs = {songs}/>
    </div>
  );
}

export default App;
