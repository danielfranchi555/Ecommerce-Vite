import React, { useEffect, useState } from 'react'
import carritoPng from '../../img/carrito-compras.png'
import { UseCartContext } from '../Context/Context'
const CartWidget = () => {
  const {cart,prodCant}= UseCartContext()




  return (
    <div style={{display:'flex',alignItems:'center'}}>
     <div>
        <span style={{fontWeight:'700'}}>{prodCant()}</span>
    </div>
    <div>
        <img style={{width:'45px'}} src={carritoPng} alt="" />
    </div>     
    
    </div>
  )
}

export default CartWidget