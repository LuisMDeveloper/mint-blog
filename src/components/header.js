import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="navbar fixed-top navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        {siteTitle}
      </Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
