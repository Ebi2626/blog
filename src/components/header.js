import { Link } from "gatsby"
import navItems from "./../data/navItems";
import PropTypes from "prop-types"
import Hamburger from "./hamburger";
import React from "react"

const Header = ({ siteTitle, initialWidth }) => (
  <header
    style={{
      backgroundImage: `linear-gradient(to left, turquoise, navy)`,
      marginBottom: `1.45rem`,
      display: `flex`,
      flexDirection: `row`,
      justifyContent: `space-around`,
      height: 100
    }}
  >
    <div
      style={{
        maxWidth: 300,
        margin: `0 20px`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <nav style={{position: "relative", width: "60vw", maxWidth: 800, minWidth: initialWidth > 700 ?  400: 100, height: "100%"}}>{ initialWidth > 700 ? (
        <ul style={{display: "flex", position: "relative", width: "100%", flexDirection:"row", justifyContent: "flex-end", alignItems: "center", listStyleType: "none",  height: "100%"}}>
          {navItems.map(el=>{(
            <li>
              <Link style={{color:"white", textDecoration: "none"}} to={el.toLowerCase().replace(" ", "-")}>{el}</Link>
          </li>)})
          }
</ul>) : (<Hamburger/>)}
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;