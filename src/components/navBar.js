import React from "react"
import * as Styles from "../styles/navBar.module.css"
import { Link } from "gatsby"

const NavLink = props => (
  <li className="item">
    <Link
      to={props.link}
      activeClassName={Styles.isCurrent}
      className="navAnimation"
      partiallyActive={true}
    >
      {props.title}
    </Link>
  </li>
)

export default function NavBar(props) {
  return (
    <div className={Styles.nav}>
      <ul>
        <NavLink title="Home" link="/home" />
        <NavLink title="Contact" link="/contact/" />
        <NavLink title="About" link="/about-me/" />
        <NavLink title="Portfolio" link="/portfolio/" />
        <NavLink title="Resume" link="/resume/" />
      </ul>
    </div>
  )
}
