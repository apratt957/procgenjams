import React from "react"

const SongCard = ({ song, playSong, stopSong, currentSong }) => {
  return (
    <div className={song.name === currentSong ? "playing" : "circle"}>
      <p>{song.name}</p>
      {currentSong === song.name ? (
        <button key={song.name} onClick={stopSong}>
          &#x25a0;
        </button>
      ) : (
        <button key={song.name} onClick={() => playSong(song)}>
          &#x25BA;
        </button>
      )}
    </div>
  )
}

export default SongCard
