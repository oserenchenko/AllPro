import React from "react";
import { Link } from 'react-router-dom';
import Logo from "../../images/color_logo_transparent.png";
import "./Nav.css";

const Nav = () => (
<nav className="navbar navbar-light bg-light navbar-expand-lg">
  <Link className="navbar-brand" to="#"> 
    <img src={Logo} height="120" className="d-inline-block align-top" alt=""/>
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">Gallery</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">Contact</Link>
      </li>
    </ul>
  </div>
</nav>
);

export default Nav;