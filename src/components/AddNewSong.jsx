import React, { useState } from "react";
import axios from "axios";
import './styles.css'

const AddNewSong = (props) => {
    //In the future as a bonus see about making this collapsable.
    
    const [songName, setSongName] = useState('');
    const [album, setAlbum] = useState('');
    const [artist, setArtist] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseDate, setReleaseDate] = useState('')
    
    function handleSubmit (event) {
        event.preventDefault();
        let newEntry = {
            title: songName,
            artist: artist,
            album: album,
            release_date: releaseDate,
            genre: genre,
            likes: 0
        };
        postNewSong(newEntry)
        setSongName('')
        setAlbum('')
        setArtist('')
        setGenre('')
        setReleaseDate('')
    }
    
    async function postNewSong(song) {
        await axios.post('http://127.0.0.1:8000/music/', song)
    }

    

    return (
        <div className="CreateNewSongBlock">
            <form onSubmit={handleSubmit} className="add-new-song-form">
                <div>
                    <h2 className="add-new-header">Add New Song</h2>
                    <label>Song Name</label>
                    <input type='text' value={songName} onChange={(event)=>setSongName(event.target.value)}/>
                </div>
                <div>
                    <label>Album</label>
                    <input type='text' value={album} onChange={(event)=>setAlbum(event.target.value)}/>
                </div>
                <div>
                    <label>Artist Name</label>
                    <input type='text' value={artist} onChange={(event)=>setArtist(event.target.value)}/>
                </div>
                <div>
                    <label>Music Genre</label>
                    <input type='text' value={genre} onChange={(event)=>setGenre(event.target.value)}/>
                </div>
                <div className="">
                    <div>
                        <label>Date</label>
                        <input type='date' value={releaseDate} onChange={(event)=>setReleaseDate(event.target.value)}/>
                    </div>
                    <button type='submit'>ADD</button>
                </div>
            </form>
        </div>
    )
}
export default AddNewSong;