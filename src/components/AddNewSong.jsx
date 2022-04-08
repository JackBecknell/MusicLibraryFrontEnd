import React, { useState, useEffect } from "react";
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
        //Use 'props.(function at higher level to add song to database)(newEntry)
        console.log(`You added: ${newEntry} to your db.`)
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>Add New Song</h2>
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
                <div>
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