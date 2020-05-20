import React from "react"

const SongCard = ({ song, playSong, stopSong, currentSong }) => {
  return (
    <div style={{ marginLeft: "1.5rem" }}>
      <h3>{song.name}</h3>
      {currentSong === song.name ? (
        <button key={song.name} onClick={stopSong}>
          Stop
        </button>
      ) : (
        <button key={song.name} onClick={() => playSong(song)}>
          Play
        </button>
      )}
    </div>
  )
}

export default SongCard
