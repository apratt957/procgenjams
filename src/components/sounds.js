import React, { useState } from "react"
import Tone from "tone"
import { songs } from "../songs"
import SongCard from "../components/songCard"

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
  return songList.map(song => (
    <SongCard
      key={song.name}
      song={song}
      playSong={playSong}
      stopSong={stopSong}
      currentSong={currentSong}
    />
  ))
}

export default Sounds
