import React, { useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';

import LeftArrow from "../assets/images/leftArrow.svg";
import jsSvg from '../assets/images/sneakers.jpg';

import like from '../assets/images/home-like.svg';
import unlike from '../assets/images/home-nolike.svg';
import plus from '../assets/images/home-plus.svg';
import check from '../assets/images/home-check.svg';

import Card from '../components/Card';
import Header from '../components/Header'


const arr = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Sued", 
    price: 3200, 
    image: jsSvg,
    doSomething: function(a, b){
      return a + b
    }
  },
];

export const Home = (props) =>{
  return (
    <div className="home">
       <div className="home__search d-flex justify-between align-center">
        <p className="home__search-text d-flex justify-between align-center mr-10">
          <NavLink to="/">
              <img src={LeftArrow} alt="leftArrow"/>
          </NavLink>
          Мои покупки
        </p>
       </div>
       <div className="home__cards">
            <Card/>
            <div className="block_hooks">
                
            </div>
       </div>
    </div>
  );
}