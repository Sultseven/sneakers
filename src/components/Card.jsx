import React, { useState, useEffect } from 'react';

import sneakers1Svg from '../assets/images/sneakers.jpg';
import onLike from '../assets/images/home-like.svg';
import unLike from '../assets/images/home-nolike.svg';
import unCheck from '../assets/images/home-plus.svg';
import onCheck from '../assets/images/home-check.svg';


function Card(){
    return(
        <div className="card">
            <div className="card__icon-favorite">
              <img src={unLike} width={32} height={32} alt="like"/>
            </div>
            <img src={ sneakers1Svg }  width={133} height={122} alt="sneakers"/>
            <h5>
              Мужские Кроссовки Nike Blazer Mid Suede
            </h5>
            <div className="card__price">
                <span>Цена:</span>
                <div className="d-flex justify-between align-center">
                  <b>1400 руб.</b>
                  <img className="card__price-icon" src={unCheck } alt="plus"/>
                </div>
            </div>
        </div>
    );
}

export default Card;