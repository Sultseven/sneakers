import React, { useState, useEffect } from 'react';

import sneakers1Svg from '../assets/images/sneakers.jpg';
import onLike from '../assets/images/home-like.svg';
import unLike from '../assets/images/home-nolike.svg';
import unCheck from '../assets/images/home-plus.svg';
import onCheck from '../assets/images/home-check.svg';



function Card(){
    const [isAdded, setIsAdded] =  useState(false);
    const [isAddedL, setIsAddedL] = useState(false);
    
    const onClickCheck = () =>{
      setIsAdded(!isAdded);
    }

    const onClickLike = () =>{
      setIsAddedL(!isAddedL);
      console.log('Click onClickLike');
    }


    return(
        <div className="card">
            <div className="card__icon-favorite">
              <img src={isAddedL ? onLike : unLike } width={32} height={32} alt="like" onClick={ onClickLike } />
            </div>
            <img src={ sneakers1Svg }  width={133} height={122} alt="sneakers" />
            <h5>
              Мужские Кроссовки Nike Blazer Mid Suede
            </h5>
            <div className="card__price">
                <span>Цена:</span>
                <div className="d-flex justify-between align-center">
                  <b>1400 руб.</b>
                  <img className="card__price-icon" src={ isAdded ? onCheck : unCheck } alt="plus" onClick={ onClickCheck }/>
                </div>
            </div>
        </div>
    );
}

export default Card;