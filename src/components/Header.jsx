import React from 'react';
import { NavLink } from 'react-router-dom';


import logoSvg from '../assets/images/header-logo.svg';
import profileSvg from '../assets/images/header-profile.svg';
import likeSvg from '../assets/images/header-like.svg';
import shopSvg from '../assets/images/header-shop.svg';

function Header(){
	return(
	  <header className="header">
        <div className="header__logo">
          <NavLink to="/">
            <img className="header__logo-svg" src={logoSvg} alt="logo"/>
            <div className="logo__text">
              <h2>React Sneakers</h2>
              <p>Магазин лучших кроссовок</p>
            </div>
          </NavLink>
        </div>
        <nav className="menu">
          <ul className="menu__lists">
            <li className="menu__list-item">
              <NavLink className="menu__list-item-link"  to="/drawer">
                <img className="header__shop-svg" src={shopSvg} alt="shop"/><span className="header__shop-number">1205 руб.</span>
              </NavLink>
            </li>
            <li className="menu__list-item">
              <NavLink className="menu__list-item-link"  to="/favorites">
                <img className="header__like-svg" src={likeSvg} alt="like"/>
              </NavLink>
            </li>
            <li className="menu__list-item">
              <NavLink className="menu__list-item-link" to="/home">
                <img className="header__profle-svg" src={profileSvg} alt="profile"/>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
	);
}

export default Header;