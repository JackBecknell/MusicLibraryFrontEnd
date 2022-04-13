import DeleteButton from './DeleteButton'
import EditButton from "./edit_button/EditButton";
import LikeButton from './LikButton'
import '../styles.css'

const DisplayMusic = (props) => {

    return (
        <div className='table'>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th className="actual-table-head">Title</th>
                        <th className="actual-table-head">Artist</th>
                        <th className="actual-table-head">Album</th>
                        <th className="actual-table-head">Genre</th>
                        <th className="actual-table-head">Release Date</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.currentSongs.slice(0).reverse().map((song, index) => {
                        return(
                            <tr key={index+1}>
                                <td><LikeButton pk={song.id} likes={song.likes} reload={props.reload}/></td>
                                <td className="actual-table">{song.title}</td>
                                <td className="actual-table">{song.artist}</td>
                                <td className="actual-table">{song.album}</td>
                                <td className="actual-table">{song.genre}</td>
                                <td className="actual-table">{song.release_date}</td>
                                <td><DeleteButton song = {song.id} reload={props.reload}/></td>
                                <td><EditButton song = {song} reload={props.reload}/></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            
        </div>
    )
}

export default DisplayMusic;