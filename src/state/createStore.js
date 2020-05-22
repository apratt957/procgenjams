import { createStore } from "redux"

export const play = songName => ({
  type: "PLAY_SONG",
  songName,
})

export const stop = () => ({
  type: "STOP_SONG",
})

export const getSongs = songs => ({
  type: "GET_SONGS",
  songs,
})

const reducer = (state, action) => {
  switch (action.type) {
    case "PLAY_SONG":
      return { ...state, isPlaying: true, currentSong: action.songName }
    case "STOP_SONG":
      return { ...state, isPlaying: false, currentSong: "" }
    case "GET_SONGS":
      return { ...state, songList: action.songs }
    default:
      return state
  }
}

const initialState = {
  isPlaying: false,
  currentSong: "",
  songList: [],
}

const reduxStore = () => createStore(reducer, initialState)
export default reduxStore
