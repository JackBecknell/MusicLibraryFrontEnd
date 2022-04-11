import React, { useState } from "react";
import axios from "axios";
import './styles.css'

function EditModel (props) {

    const [songName, setSongName] = useState('');
    const [album, setAlbum] = useState('');
    const [artist, setArtist] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseDate, setReleaseDate] = useState('')

    function handleSubmit (event) {
        event.preventDefault()
        let editedEntry = {
            title: songName,
            artist: artist,
            album: album,
            release_date: releaseDate,
            genre: genre,
            likes: (props.song.likes)
        }
        editSong(editedEntry)
    }

    async function editSong(editedSong) {
        await axios.put(`http://127.0.0.1:8000/music/${props.song.id}/`, editedSong)
    }

    //This function uses the function passed down from EditButton.jsx to change Model state to false closing the model
    function handleExit () {
        props.closeModel(false)
    }

    return(
        <div>
            <button onClick={handleExit}>X</button>
            <form onSubmit={handleSubmit}>    
                <div>
                    
                    <h2 className="add-new-header">Edit Song</h2>
                    <label>Song Name</label>
                    <input type='text' value={songName} placeholder={props.song.title} onChange={(event)=>setSongName(event.target.value)}/>
                </div>
                <div>
                    <label>Album</label>
                    <input type='text' value={album} placeholder={props.song.album} onChange={(event)=>setAlbum(event.target.value)}/>
                </div>
                <div>
                    <label>Artist Name</label>
                    <input type='text' value={artist} placeholder={props.song.artist} onChange={(event)=>setArtist(event.target.value)}/>
                </div>
                <div>
                    <label>Music Genre</label>
                    <input type='text' value={genre} placeholder={props.song.genre} onChange={(event)=>setGenre(event.target.value)}/>
                </div>
                <div>
                    <div>
                        <label>Date</label>
                        <input type='date' value={releaseDate} onChange={(event)=>setReleaseDate(event.target.value)}/>
                    </div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}
export default EditModel