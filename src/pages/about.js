import React from "react"
import SiteInfo from "../components/siteinfo"

const About = () => {
  return (
    <main style={{ display: "flex", height: "100%" }}>
      <SiteInfo />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "15px 10px 15px 100px",
          width: "90vw",
          marginTop: "25vh",
        }}
      >
        <p>
          All music on this site will loop infinitely. It's chill beats to study
          to but Forever. Thank you for listening.
        </p>
      </div>
    </main>
  )
}

export default About
