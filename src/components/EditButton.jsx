import axios from "axios";
import { useState } from "react";
import EditModal from "./EditModal"
import './styles.css'

const EditButton = (props) => {
    const[openModel, setOpenModel] = useState(false);



    return (
        <div>
            <button onClick={() => {setOpenModel(true)}}>EDIT</button>
            {openModel && <EditModal song = {props.song} closeModel={setOpenModel}/>}
        </div>
    )
}
export default EditButton;