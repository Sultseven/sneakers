import react from 'react';

import Card from '../components/Card'
import Hello from '../components/Hello'
import jsSvg from '../assets/images/sneakers.jpg';

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
            {arr.map((obj) => (
                <Card 
                  image={obj.image}
                  title={obj.title}
                  price={obj.price}
                />
            ))}
        </div>
     </div>
    );
    
}
