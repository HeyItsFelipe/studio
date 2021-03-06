import React, {Component} from 'react';
import './Nav.scss';
import Logo from './Logo/Logo';
import Hamburger from './Logo/Assets/menu.svg';
import Social from './Social/Social';

class Nav extends Component {
  switch() {
    const nav = document.getElementById('navbarNav'),
        menuButton = document.querySelector('.navbar-toggler');

    nav.classList.toggle('slide-nav');
    menuButton.classList.toggle('nav-rotated');
  }

  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">

          <a className="navbar-brand" href="#">
            <Logo/>
          </a>

          <button className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={this.switch}>
            <img src={Hamburger} alt="mobile menu"/>
          </button>

          <div className="navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span
                    className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>

            <Social/>

          </div>
        </nav>
    );
  }
}

export default Nav;
