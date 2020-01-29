/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  let initialWidth = window.innerWidth;
  const[width, setWidth] = useState(initialWidth);
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  function adjustLayout(){
    setWidth(window.innerWidth);
  }
  window.addEventListener('resize', adjustLayout);
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} initialWidth={width} />
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <main style={{minHeight: "calc(100vh - 170px)"}}>{children}</main>
        <footer style={{
      backgroundImage: `linear-gradient(to left, turquoise, navy)`,
      width: "100vw",
      margin: "10px 0 0 0",
      height: 50,
      display: `flex`,
      flexDirection: `row`,
      alignItems: `center`,
      justifyContent: `space-around`}}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
