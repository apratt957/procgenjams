import React, { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"

var morphing = keyframes`
    0% {
      border-radius: 50%;
    }
    15% {
      border-radius: 54% 60% 45% 80% / 40% 70% 23% 68%;
    }
    30% {
      border-radius: 50% 16% 33% 67% / 55% 27% 73% 45%;
    }
    45% {
      border-radius: 29% 45% 58% 42% / 63% 15% 62% 37%;
    }
    60% {
      border-radius: 50% 50% 20% 67% / 55% 27% 30% 45%;
    }
    75% {
      border-radius: 54% 60% 25% 80% / 40% 70% 23% 68%;
    }
    90% {
      border-radius: 33% 50% 58% 42% / 63% 45% 32% 60%;
    }
  `

const Playing = styled.div`
  animation: ${morphing} 20s infinite;
  border: 2px solid black;
  background-color: pink;
  height: 300px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Circle = styled.div`
  border: 2px solid black;
  height: 300px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const SongCard = ({ song, playSong, stopSong, currentSong }) => {
  if (song.name === currentSong) {
    return (
      <Playing>
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
      </Playing>
    )
  } else {
    return (
      <Circle>
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
      </Circle>
    )
  }
}

export default SongCard
