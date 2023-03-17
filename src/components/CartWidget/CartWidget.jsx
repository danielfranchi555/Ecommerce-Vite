import carritoPng from '../../img/carrito-compras.png'
import { UseCartContext } from '../Context/Context'
const CartWidget = () => {
  const {cart}= UseCartContext()

 
  
  const prodCant = ()=>{
    let cantidadProducts = cart.reduce((acc,prod)=>(acc = acc + prod.quantity ),0 )
    return cantidadProducts
  }

  
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