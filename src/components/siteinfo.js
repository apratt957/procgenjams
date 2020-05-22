import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import reduxStore from "../state/createStore"

const ListItem = styled.div`
  writing-mode: vertical-rl;
  text-orientation: upright;
  margin-bottom: 2rem;
`

const NavLink = styled(Link)`
  text-decoration: none;
  &:visited {
    color: black;
  }
  &:hover,
  &:focus {
    color: #ff8080;
  }
`

const active = {
  textDecoration: "none",
  color: "red",
}

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
        <ListItem>
          <NavLink to="/about" activeStyle={active}>
            ABOUT
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/" activeStyle={active}>
            SONGS
          </NavLink>
        </ListItem>
      </ul>
    </div>
  )
}

export default SiteInfo
