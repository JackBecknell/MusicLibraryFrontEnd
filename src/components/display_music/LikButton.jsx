import axios from "axios";
import { useState } from "react";
import '../styles.css'

const LikeButton = (props) => {
    
    const [buttonStyle, setButtonStyle] = useState('disliked')

    function handleSubmit () {
        if (buttonStyle === 'disliked'){
            setButtonStyle('liked')
            likeSong(props.pk)
            setTimeout(() => {props.reload(true)}, 200)
        }
    }

    async function likeSong(pk) {
        await axios.put(`http://127.0.0.1:8000/music/${pk}/like/`)
    }

    return (
            <button className={buttonStyle} onClick={handleSubmit}><p>LIKE {props.likes}</p></button>
    )
}
export default LikeButton;