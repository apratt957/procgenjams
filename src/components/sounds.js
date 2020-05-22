import React, { useEffect } from "react"
import Tone from "tone"
import { useDispatch, useSelector } from "react-redux"
import { songs } from "../songs"
import { play, stop, getSongs } from "../state/createStore"
import SongCard from "../components/songCard"

const Sounds = () => {
  const dispatch = useDispatch()
  let songList = useSelector(state => state.songList)
  let isPlaying = useSelector(state => state.isPlaying)
  let currentSong = useSelector(state => state.currentSong)

  useEffect(() => {
    dispatch(getSongs(songs))
  })

  const stopSong = () => {
    dispatch(stop())
    Tone.Transport.stop()
    Tone.Transport.cancel()
    Tone.context.close()
  }

  const playSong = async song => {
    if (isPlaying) {
      await stopSong()
      dispatch(play(song.name))
      song.makeSong()
    } else {
      dispatch(play(song.name))
      song.makeSong()
    }
  }

  return (
    <div
      style={{
        display: "grid",
        gap: "1rem",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        margin: "15px 10px 15px 100px",
        width: "90vw",
      }}
    >
      {songList.map(song => (
        <SongCard
          key={song.name}
          song={song}
          playSong={playSong}
          stopSong={stopSong}
          currentSong={currentSong}
        />
      ))}
    </div>
  )
}

export default Sounds
