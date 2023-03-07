import React from 'react'
import carritoPng from '../../img/carrito-compras.png'
const CartWidget = () => {
  return (
    <div style={{display:'flex',alignItems:'center'}}>
     <div>
        <span style={{fontWeight:'700'}}>2</span>
    </div>
    <div>
        <img style={{width:'45px'}} src={carritoPng} alt="" />
    </div>     
    
    </div>
  )
}

export default CartWidget