import axios from "axios";
import './styles.css'

const DeleteButton = (props) => {
    
    //This function handles the click and stores the id of the song to which it
    //is assigned into a variable and stores that pk in the params of the deleteSong function
    function handleSubmit (event) {
        event.preventDefault();
        let num = props.song
        deleteSong(num)
}
    //This function takes a pk from handleSubmit and then sends a delete request
    //to the data base for that song.
    async function deleteSong(num) {
        await axios.delete(`http://127.0.0.1:8000/music/${num}/`)
    }

    //This returns a delete button to every song that gets mapped in DisplayMusic.jsx
    return (
        <form onSubmit={handleSubmit}>
            <button type='submit'>DELETE</button>
        </form>
    )
}
export default DeleteButton;
