import React, { useState, useEffect } from "react"
import Tone from "tone"
import { songs } from "../songs"

import Layout from "../components/layout"

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
  return (
    <Layout>
      {songList.map(song => {
        if (currentSong === song.name) {
          return <button onClick={stopSong}>Stop</button>
        } else {
          return <button onClick={() => playSong(song)}>{song.name}</button>
        }
      })}
    </Layout>
  )
}

export default Sounds
