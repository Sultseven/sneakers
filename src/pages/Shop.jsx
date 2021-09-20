import react from 'react';

export const Shop = () =>{
    return(
    <div className="shop">
        <div className="shop__slider">
           Здесь мб будет слайдер
        </div>
        <div className="shop__search d-flex justify-between align-center">
          <p className="shop__search-text">Все кроссовки</p>
          <input type="search" name="search" id="id_search" placeholder="Поиск" />
        </div>
        <div className="shop__cards">
            shop cards
        </div>
     </div>
    );
}