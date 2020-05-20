import Tone from "tone"
import { unmute } from "./utils/unmute"

const song1 = {
  name: "Slow Song",
  makeSong: () => {
    Tone.context = new AudioContext()
    unmute(Tone.context)
    function makeSynth() {
      let envelope = {
        attack: 0.01,
        release: 4,
        releaseCurve: "bounce",
      }
      let filterEnvelope = {
        baseFrequency: 100,
        octaves: 2,
        attack: 1,
        decay: 0,
        release: 1000,
      }

      return new Tone.DuoSynth({
        volume: -20,
        harmonicity: 1,
        voice0: {
          oscillator: { type: "sawtooth" },
          envelope,
          filterEnvelope,
        },
        voice1: {
          oscillator: { type: "sine4", detune: -20 },
          envelope,
          filterEnvelope,
        },
        vibratoRate: 0.5,
        vibratoAmount: 0.1,
      })
    }

    let leftSynth = makeSynth()
    let rightSynth = makeSynth()

    let leftPanner = new Tone.Panner(-0.5)
    let rightPanner = new Tone.Panner(0.5)
    let echo = new Tone.FeedbackDelay("4n", 0.001)
    let delay = new Tone.Delay()
    let delayFade = new Tone.Gain()

    delay.delayTime.value = 1
    delayFade.gain.value = 0.8

    leftSynth.connect(leftPanner)
    rightSynth.connect(rightPanner)
    leftPanner.connect(echo)
    rightPanner.connect(echo)

    echo.toMaster()
    echo.connect(delay)
    delay.connect(Tone.context.destination)
    delay.connect(delayFade)
    delayFade.connect(delay)

    const notes = ["E3", "A4", "B4", "G4", "E5", "G5", "D4"]

    const makeRandomNote = noteList => {
      return noteList[Math.floor(Math.random() * noteList.length)]
    }

    new Tone.Loop(time => {
      leftSynth.triggerAttackRelease(makeRandomNote(notes), "1:2", time)
      leftSynth.setNote(makeRandomNote(notes), "+0:2")

      leftSynth.triggerAttackRelease(makeRandomNote(notes), "0:2", "+6:0")

      leftSynth.triggerAttackRelease(makeRandomNote(notes), "0:2", "+11:2")

      leftSynth.triggerAttackRelease(makeRandomNote(notes), "2:0", "+19:0")
      leftSynth.setNote(makeRandomNote(notes), "+19:1:2")
      leftSynth.setNote(makeRandomNote(notes), "+19:3:0")
      leftSynth.setNote(makeRandomNote(notes), "+19:4:2")
    }, "25m").start()

    new Tone.Loop(time => {
      // Trigger D4 after 5 measures and hold for 1 full measure + two 1/4 notes
      rightSynth.triggerAttackRelease(makeRandomNote(notes), "1:2", "+5:0")
      // Switch to E4 after one more measure
      rightSynth.setNote(makeRandomNote(notes), "+6:0")

      // Trigger B3 after 11 measures + two 1/4 notes + two 1/16 notes. Hold for one measure
      rightSynth.triggerAttackRelease(makeRandomNote(notes), "1m", "+11:2:2")
      // Switch to G3 after a 1/2 note more
      rightSynth.setNote(makeRandomNote(notes), "+12:0:2")

      // Trigger G4 after 23 measures + two 1/4 notes. Hold for a half note.
      rightSynth.triggerAttackRelease(makeRandomNote(notes), "0:2", "+23:2")
    }, "26m").start()
    Tone.Transport.start()
  },
}

const song2 = {
  name: "Scary Song",
  makeSong: () => {
    Tone.context = new AudioContext()
    unmute(Tone.context)
    function makeSynth() {
      let envelope = {
        attack: 0.01,
        release: 4,
        releaseCurve: "bounce",
      }
      let filterEnvelope = {
        baseFrequency: 100,
        octaves: 2,
        attack: 1,
        decay: 0,
        release: 1000,
      }

      return new Tone.DuoSynth({
        volume: -20,
        harmonicity: 1,
        voice0: {
          oscillator: { type: "sawtooth" },
          envelope,
          filterEnvelope,
        },
        voice1: {
          oscillator: { type: "sine4", detune: -20 },
          envelope,
          filterEnvelope,
        },
        vibratoRate: 0.5,
        vibratoAmount: 0.1,
      })
    }

    let leftSynth = makeSynth()
    let rightSynth = makeSynth()

    let leftPanner = new Tone.Panner(-0.5)
    let rightPanner = new Tone.Panner(0.5)
    let echo = new Tone.FeedbackDelay("4n", 0.001)
    let delay = new Tone.Delay()
    let delayFade = new Tone.Gain()

    delay.delayTime.value = 1
    delayFade.gain.value = 0.8

    leftSynth.connect(leftPanner)
    rightSynth.connect(rightPanner)
    leftPanner.connect(echo)
    rightPanner.connect(echo)

    echo.toMaster()
    echo.connect(delay)
    delay.connect(Tone.context.destination)
    delay.connect(delayFade)
    delayFade.connect(delay)

    const notes = ["E1", "E1", "E1", "E1", "E1", "E1", "E1"]

    const makeRandomNote = noteList => {
      return noteList[Math.floor(Math.random() * noteList.length)]
    }

    new Tone.Loop(time => {
      leftSynth.triggerAttackRelease(makeRandomNote(notes), "1:2", time)
      leftSynth.setNote(makeRandomNote(notes), "+0:2")

      leftSynth.triggerAttackRelease(makeRandomNote(notes), "0:2", "+6:0")

      leftSynth.triggerAttackRelease(makeRandomNote(notes), "0:2", "+11:2")

      leftSynth.triggerAttackRelease(makeRandomNote(notes), "2:0", "+19:0")
      leftSynth.setNote(makeRandomNote(notes), "+19:1:2")
      leftSynth.setNote(makeRandomNote(notes), "+19:3:0")
      leftSynth.setNote(makeRandomNote(notes), "+19:4:2")
    }, "25m").start()

    new Tone.Loop(time => {
      // Trigger D4 after 5 measures and hold for 1 full measure + two 1/4 notes
      rightSynth.triggerAttackRelease(makeRandomNote(notes), "1:2", "+5:0")
      // Switch to E4 after one more measure
      rightSynth.setNote(makeRandomNote(notes), "+6:0")

      // Trigger B3 after 11 measures + two 1/4 notes + two 1/16 notes. Hold for one measure
      rightSynth.triggerAttackRelease(makeRandomNote(notes), "1m", "+11:2:2")
      // Switch to G3 after a 1/2 note more
      rightSynth.setNote(makeRandomNote(notes), "+12:0:2")

      // Trigger G4 after 23 measures + two 1/4 notes. Hold for a half note.
      rightSynth.triggerAttackRelease(makeRandomNote(notes), "0:2", "+23:2")
    }, "26m").start()
    Tone.Transport.start()
  },
}

export const songs = [
  song1,
  song2,
  song1,
  song2,
  song1,
  song2,
  song1,
  song2,
  song1,
  song2,
  song1,
  song2,
]
