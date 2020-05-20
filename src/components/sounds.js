import React, { useState } from "react"
import Tone from "tone"
import { songs } from "../songs"

const Sounds = () => {
  let [songList, setSongList] = useState(songs)
  let [isPlaying, setIsPlaying] = useState(false)
  let [currentSong, setCurrentSong] = useState("")

  const stopSong = () => {
    setIsPlaying(false)
    setCurrentSong("")
    Tone.Transport.stop()
    Tone.Transport.cancel()
    Tone.context.close()
  }

  const playSong = async song => {
    if (isPlaying) {
      await stopSong()
      setIsPlaying(true)
      setCurrentSong(song.name)
      song.makeSong()
    } else {
      setIsPlaying(true)
      setCurrentSong(song.name)
      song.makeSong()
    }
  }
  return songList.map(song => {
    if (currentSong === song.name) {
      return (
        <button key={song.name} onClick={stopSong}>
          Stop
        </button>
      )
    } else {
      return (
        <button key={song.name} onClick={() => playSong(song)}>
          {song.name}
        </button>
      )
    }
  })
}

export default Sounds
