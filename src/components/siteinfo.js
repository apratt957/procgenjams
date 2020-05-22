import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Navlink = styled.div`
  writing-mode: vertical-rl;
  text-orientation: upright;
  margin-bottom: 2rem;
`

const SiteInfo = () => {
  return (
    <div
      style={{
        width: "5vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        height: "100%",
      }}
    >
      <ul>
        <Navlink>
          <Link to="/about">ABOUT</Link>
        </Navlink>
        <Navlink>
          <Link to="/">SONGS</Link>
        </Navlink>
      </ul>
    </div>
  )
}

export default SiteInfo
