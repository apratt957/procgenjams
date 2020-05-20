import React, { useState, useEffect } from "react"
import Tone from "tone"
import { songs } from "../songs"

import Layout from "../components/layout"

const Sounds = () => {
  let [songList, setSongList] = useState(songs)
  let [isPlaying, setIsPlaying] = useState(false)

  const stopSong = () => {
    setIsPlaying(false)
    Tone.Transport.stop()
    Tone.Transport.cancel()
    Tone.context.close()
  }

  const playSong = song => {
    setIsPlaying(true)
    song.makeSong()
  }
  return (
    <Layout>
      {songList.map(song => (
        <button
          key={song.name}
          disabled={isPlaying}
          onClick={() => playSong(song)}
        >
          Play {song.name}
        </button>
      ))}

      <button onClick={stopSong}>stop song</button>
    </Layout>
  )
}

export default Sounds
