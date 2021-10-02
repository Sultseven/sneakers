import react from 'react';

import arrowSvg from "../assets/images/arrow.svg"
import removeSvg from "../assets/images/drawer-remove.svg"
import Cart from './Cart';

function Drawer(props){
  console.log(props)
	return(
         <div className="overlay">
            <div className="drawerBlock">
              <h2 className="mb-30 d-flex align-center justify-between">
                Корзина 
                <img className="removeIcon" src={ removeSvg } alt="icon-remove" onClick={ props.onClickClose }/>
              </h2>
              <div className="items">
                <Cart/>
                <Cart/>
                <Cart/>
              </div>

              <div className="cartTotalBlock">
                <ul>
                  <li>
                    <span>Итого:</span>
                    <div></div>
                    <b>21 498 руб. </b>
                  </li>
                  <li>
                    <span>Налог 5%:</span>
                    <div></div>
                    <b>1074 руб. </b>
                  </li>
                </ul>
                <button className="greenButton">
                  Оформить заказ <img src={arrowSvg} alt="Arrow" />
                </button>
              </div>

            </div>
         </div>
	     );
}

export default Drawer;
