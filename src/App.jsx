import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import axios from "axios";
import './components/styles.css'

function App() {
  const [songs, setSongs] = useState([]);

  useEffect (()=>{
    getAllSongs()
    console.log(songs)
  },[])

  async function getAllSongs() {
    let response = await axios.get("http://127.0.0.1:8000/music/");
    setSongs(response.data);
    console.log(response);
  }

  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
