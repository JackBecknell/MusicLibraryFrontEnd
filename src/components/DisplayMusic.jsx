import DeleteButton from './DeleteButton'
import EditButton from './EditButton'
import LikeButton from './LikButton'
import './styles.css'

const DisplayMusic = (props) => {

    return (
        <div className='table'>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.currentSongs.slice(0).reverse().map((song, index) => {
                        return(
                            <tr key={index+1}>
                                <td><LikeButton pk={song.id} likes={song.likes}/></td>
                                <td>{song.title}</td>
                                <td>{song.artist}</td>
                                <td>{song.album}</td>
                                <td>{song.genre}</td>
                                <td>{song.release_date}</td>
                                <td><DeleteButton song = {song.id}/></td>
                                <td><EditButton song = {song}/></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default DisplayMusic;