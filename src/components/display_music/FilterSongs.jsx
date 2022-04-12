// import axios from "axios";
import { useState } from "react";
import FilterSongsModal from "./FilterSongsModal";
import '../styles.css'

const FilterSongs = (props) => {
    
    const [filterButtonName, setFilterButtonName] = useState('ALL')
    const [filterTrait, setFilterTrait] = useState('')
    const [modelButtonName, setModelButtonName] = useState('')
    const [filterModelOpen, setFilterModelOpen] = useState(false)
    
    function handleClick (buttonName, openModel, dbQueryTrait, modalBtnName){
        setFilterButtonName(buttonName)
        setModelButtonName(modalBtnName)
        setFilterModelOpen(openModel)
        setFilterTrait(dbQueryTrait)
    }
    
    function handleReset () {
        props.resetDisplay()
        setFilterButtonName('ALL')
        setFilterModelOpen(false)
    }

    return (
        <div>
            <div className="filter-and-modal">
                <div>
                    <button className='reset-btn'onClick={handleReset}>RESET FILTER</button>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">{filterButtonName}</button>
                    <div className="dropdown-content">
                        <button onClick={() => {handleClick('TITLE', true, 'title', 'Titles')}}>Title</button>
                        <button onClick={() => {handleClick('ARTIST', true, 'artist', 'Artists')}}>Artist</button>
                        <button onClick={() => {handleClick('ALBUM', true, 'album', "Albums")}}>Album</button>
                        <button onClick={() => {handleClick('RELEASE DATE', true, 'release_date', 'Release Dates')}}>Release Date</button>
                        <button onClick={() => {handleClick('GENRE', true, 'genre', 'Genres')}}>Genre</button>
                    </div>
                </div>
                <div>
                    {filterModelOpen && <FilterSongsModal songs={props.songs} trait={filterTrait} buttonName={modelButtonName} setDisplay={props.setDisplay}/>}
                </div>
            </div>
        </div>

    )
}
export default FilterSongs;