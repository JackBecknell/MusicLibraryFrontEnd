import React, { useState } from "react";
import axios from "axios";

function FilterSongsModal (props) {
    
    //arrayOfTraits stores all song objects
    let arrayOfTraits = props.songs.map((song) => song)
    //checkArray will store already used song attributes(dependant upon filter type)
    let checkArray = []
    //newArrayOfTraits will store uniqe(by Attribute) song objects 
    let newArrayOfTraits = []

    //this for loop updates newArrayOfTraits by adding all song objects that are unique(by trait)
    for(let i = 0; i < arrayOfTraits.length; i++){
        if (checkArray.includes(arrayOfTraits[i][props.trait])){
            continue
        }else{
            newArrayOfTraits.push(arrayOfTraits[i]);
            checkArray.push(arrayOfTraits[i][props.trait]);
        }
    }


    function checkValue (trait, traitValue, songs) {
        let newDisplay = songs.map((song)=>{
            if(song[trait] === traitValue){
                return song
            }else{
                return null
            }
        }).filter((i)=>(i != null))
        props.setDisplay(newDisplay)
    }
    function handleClick (trait, traitValue, songs) {
        checkValue(trait, traitValue, songs)
    }

    return (
        <div className="dropdown">
            <button className="dropbtn">{props.buttonName}</button>
            <div className="dropdown-content">
                {newArrayOfTraits.map((song, index)=> {
                    return(
                            <button key={index+1} onClick={() => {handleClick(props.trait, song[props.trait], props.songs)}}>{song[props.trait]}</button>
                        )
                })}
            </div>
        </div>
    )
}
export default FilterSongsModal;

//This works but there are duplicates
// {props.songs.map((song, index) => {
//     return(
//         <button key={index+1} onClick={() => {handleClick(song[props.trait])}}>{song[props.trait]}</button>
//     )
// })}
