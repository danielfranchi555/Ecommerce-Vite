import { Box, Center, Text } from '@chakra-ui/react'
import carritoPng from '../../img/carrito-compras.png'
import { UseCartContext } from '../Context/Context'
const CartWidget = () => {

  //ESTADO PARA MOSTRAR LA CANTIDAD DE PRODUCTOS 
  const {countProducts}= UseCartContext()


  
  return (
    <div style={{display:'flex',alignItems:'center'}}>
     <div>
        <Box   color='black' w='20px' borderRadius='full' style={{fontWeight:'500'}}>
          <Center>

           <Text>{countProducts} </Text>
          </Center>
           </Box>
    </div>
    <div>
        <img style={{width:'45px'}} src={carritoPng} alt="" />
    </div>     
    
    </div>
  )
}

export default CartWidget