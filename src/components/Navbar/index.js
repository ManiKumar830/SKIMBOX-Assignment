import {Component} from 'react'
import {NavLink} from 'react-router-dom'

// eslint-disable-next-line import/no-extraneous-dependencies
import {FaBars as Hamburger} from 'react-icons/fa'

import './index.css'

class Navbar extends Component {
  state = {isActive: false}

  handleShowNavbar = () => {
    const {isActive} = this.state
    this.setState({isActive: !isActive})
  }

  render() {
    const {isActive} = this.state
    return (
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <img
              alt="logo"
              className="shopify-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg"
            />
          </div>

          <div className="menu-icon">
            <p className="free-trail-text">Start free trail</p>
            <Hamburger onClick={this.handleShowNavbar} />
          </div>
          <div className={`nav-elements  ${isActive && 'active'}`}>
            <ul>
              <li className="li-items">
                <NavLink to="/Solutions">Solutions</NavLink>
              </li>
              <li className="li-items">
                <NavLink to="/Pricing">Pricing</NavLink>
              </li>
              <li className="li-items">
                <NavLink to="/Resources">Resources</NavLink>
              </li>
            </ul>
          </div>

          <div className="login-container">
            <p className="login-text">Log in</p>
            <p className="start-trail-bg">Start free trail</p>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
