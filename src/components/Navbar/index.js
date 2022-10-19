import {Link} from 'react-router-dom'
import Login from "../Login"
import Signup from "../Signup"
import {FaAngleDown} from "react-icons/fa";
import './index.css'

import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="header-container">
    <div className="logo-and-title-container">
      <img
        alt="wave"
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      />
      <h1 className="title">Estatery</h1>
    </div>

    <ul className="nav-items-list">
      <li className="link-item">
        <Link className="route-link" to="/">
          Rent
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/Buy">
          Buy
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/Sell">
          Sell
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/Manageproperty">
          Manage property <FaAngleDown/>
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/Resource">
          Resource <FaAngleDown/>
        </Link>
      </li>
    </ul>
    <div className='button-container'>
      <Login/>
      <Signup/>
      </div>
  </nav>
    </div>
  )
}

export default Navbar
