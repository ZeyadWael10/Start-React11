import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "./navbar.module.css"
export default function Navbar() {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg ${style.bgColor} py-2`}>
  <div className="container">
    <NavLink className="navbar-brand text-white text-uppercase ps-sm-5" to="">START REACT</NavLink>
    <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className={`nav-link text-white text-uppercase btn ${style.activeBtn}`}  aria-current="page" to="">HOME</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white text-uppercase" to="portfolio">PORTFOLIO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white text-uppercase" to="contact">CONTACT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white text-uppercase" to="about">ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white text-uppercase" to="movies">MOVIES</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
