import React from "react"
import SiteInfo from "../components/siteinfo"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "man.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <main style={{ display: "flex", height: "100%" }}>
      <SiteInfo />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          margin: "15px 10px 15px 100px",
          width: "90vw",
          marginTop: "25vh",
        }}
      >
        <p>
          All music on this site will loop infinitely. It's chill beats to study
          to but Forever. Thank you for listening.
        </p>
        <Img
          style={{ height: "40vh", width: "30vh" }}
          fluid={data.fileName.childImageSharp.fixed}
          alt=""
        />
      </div>
    </main>
  )
}

export default About
