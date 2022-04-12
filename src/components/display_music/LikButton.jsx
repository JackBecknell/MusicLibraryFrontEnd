import axios from "axios";
import { useState , useEffect } from "react";
import '../styles.css'

const LikeButton = (props) => {
    
    const [likeStatus, setLikeStatus] = useState(false)
    const [buttonStyle, setButtonStyle] = useState('disliked')

    function handleSubmit () {
        if (buttonStyle == 'disliked' && likeStatus == false){
            setLikeStatus(true)
            setButtonStyle('liked')
            likeSong(props.pk)
        }else{
            console.log("need to fix like button")
        }
    }

    async function likeSong(pk) {
        await axios.put(`http://127.0.0.1:8000/music/${pk}/like/`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <button type='submit' className={buttonStyle}><p>LIKE {props.likes}</p></button>
        </form>
    )
}
export default LikeButton;