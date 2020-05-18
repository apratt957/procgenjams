import React from "react"
import { songs } from "../songs"

import Layout from "../components/layout"

const Sounds = () => {
  return (
    <Layout>
      {songs.map(song => (
        <button onClick={song}>Play</button>
      ))}
    </Layout>
  )
}

export default Sounds
