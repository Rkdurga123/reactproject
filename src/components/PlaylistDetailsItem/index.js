import './index.css'
// trackImage,
const PlaylistItem = props => {
  const {trackData, no, playSong} = props
  const {trackName, trackArtist, trackAlbum, duration, addedAt} = trackData

  return (
    <li
      className="specific-playlist-item"
      data-testid="specificPlaylistItem"
      onClick={() => playSong(trackData)}
    >
      <div className="hash large">
        <p>{no + 1}</p>
      </div>
      <div className="playlist-item-div large">
        <p className="playlist-item-data">{trackName}</p>
      </div>

      <div className="playlist-item-div large">
        <p className="playlist-item-data">{trackAlbum}</p>
      </div>

      <div className="playlist-item-div large">
        <p className="playlist-item-data">{duration}</p>
      </div>

      <div className="playlist-item-div large">
        <p className="playlist-item-data">{trackArtist}</p>
      </div>

      <div className="playlist-item-div large">
        <p className="playlist-item-data">{addedAt}</p>
      </div>
    </li>
  )
}

export default PlaylistItem
