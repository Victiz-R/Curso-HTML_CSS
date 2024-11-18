import React from 'react';
import { IoMdCart } from "react-icons/io";

import './CartButton.css'

function CartButton(){
  return(
    <button type="submit" className="cart__button">
  <IoMdCart />
  <span className='cart-status'>1</span>
    </button>

  );
}

export default CartButton;