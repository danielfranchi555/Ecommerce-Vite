import { Center, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import Item from '../Item/Item'
import Fade from 'react-reveal/Fade'
 

const ItemList = ({products}) => {
  return (
    <div>
      <Fade>
        <Wrap justify='center'  mt='60px'>
        {products.map((prod)=>(
            <WrapItem key={prod.id}  >
                <Center>
                    <Item prod={prod}/>
                </Center>
            </WrapItem>
        ))}
    
    </Wrap>
      </Fade>
         
     
   
    </div>
    
  )
}

export default ItemList