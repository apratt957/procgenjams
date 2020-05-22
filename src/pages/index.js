import React from "react"

import Sounds from "../components/sounds"
import SiteInfo from "../components/siteinfo"

const IndexPage = () => {
  return (
    <main style={{ display: "flex", height: "100%" }}>
      <SiteInfo />
      <Sounds />
    </main>
  )
}

export default IndexPage
