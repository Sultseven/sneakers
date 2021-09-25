import react from 'react';


import DrawerImgSneakers1 from "../assets/images/sneakers/1.png"
import removeSvg from "../assets/images/drawer-remove.svg"


function Cart(){
	return(
	  <div className="cart">
      <div className="cartItem d-flex align-center mb-20">
        <img src={ DrawerImgSneakers1 } alt="sneakers"/>
        <div className="">
          <p>
            Мужские Кроссовки Nike Air Max 270
          </p>
          <b>12 999 руб.</b>
        </div>
        <img className="removeIcon" src={ removeSvg } alt="icon-remove"/>
      </div>
    </div>
	);
}

export default Cart;