import SearchBar from "./SearchBar"
import React, { useState, useEffect } from "react";
import '../styles.css'


const NavBar = (props) => {
    const[searchParameter, setSearchParameter] = useState('')

    useEffect (()=>{
        console.log(`You searched for ${searchParameter}`)
      },[searchParameter])

    function handleSubmit (event) {
        event.preventDefault();
        let searchByInput = {
            searchParam: searchParameter
        };
        console.log(searchByInput)
        //Here we would use props.'funtion call from app or another parent that takes the userinput and searches songs by it'(searchByInput)
    }

    return (
        <nav className='nav_bar default_style'>
            
            <a href="#" className='nav_item'><b>Music</b>Library</a>
            
        </nav>
    )
}

export default NavBar;