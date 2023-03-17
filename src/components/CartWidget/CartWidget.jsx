import carritoPng from '../../img/carrito-compras.png'
import { UseCartContext } from '../Context/Context'
const CartWidget = () => {

  //ESTADO PARA MOSTRAR LA CANTIDAD DE PRODUCTOS 
  const {countProducts}= UseCartContext()
 
  return (
    <div style={{display:'flex',alignItems:'center'}}>
     <div>
        <span style={{fontWeight:'700'}}>{countProducts} 
          </span>
    </div>
    <div>
        <img style={{width:'45px'}} src={carritoPng} alt="" />
    </div>     
    
    </div>
  )
}

export default CartWidget