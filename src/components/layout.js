import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle="Procgen Jams" />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
        }}
      >
        <main style={{ width: "100%" }}>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
