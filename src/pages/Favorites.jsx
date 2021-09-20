import React from 'react';

import { NavLink } from 'react-router-dom';

import Card from '../components/Card';
import LeftArrow from "../assets/images/leftArrow.svg";
import jsSvg from '../assets/images/sneakers.jpg';

const arr = [
  {title: "Мужские Кроссовки Nike Blazer Mid Sued", price: 3200, image:jsSvg},
  {title: "Мужские Кроссовки Nike Blazer Mid Sued", price: 3200, image:jsSvg},
  {title: "Мужские Кроссовки Nike Blazer Mid Sued", price: 3200, image:jsSvg},
  {title: "Мужские Кроссовки Nike Blazer Mid Sued", price: 3200, image:jsSvg},
  {title: "Мужские Кроссовки Nike Blazer Mid Sued", price: 3200, image:jsSvg},
];


export const Favorites = () =>{
  return (
    <div className="favorites">
		  <div className="favorites__top">
        <p className="favorites__top-text d-flex align-center mr-10">
          <NavLink to="/">
              <img src={LeftArrow} alt="leftArrow"/>
          </NavLink>
          Мом Закладки
        </p>
      </div>
      <div className="home__cards">
        <Card/>
      </div>
    </div>
  );
}


