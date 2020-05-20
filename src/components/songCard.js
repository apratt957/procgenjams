import React from "react"

const SongCard = ({ song, playSong, stopSong, currentSong }) => {
  const square = {
    border: "2px solid black",
    height: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }
  const circle = {
    border: "2px solid black",
    height: "300px",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }
  return (
    <div style={song.name === currentSong ? circle : square}>
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
