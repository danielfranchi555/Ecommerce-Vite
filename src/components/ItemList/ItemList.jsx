import { Center, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import Item from '../Item/Item'
 

const ItemList = ({products}) => {
  return (
    <div>
        <Wrap justify='center'  mt='60px'>
        {products.map((prod)=>(
            <WrapItem key={prod.id}  >
                <Center>
                    <Item prod={prod}/>
                </Center>
            </WrapItem>
        ))}
    
    </Wrap>
         
     
   
    </div>
    
  )
}

export default ItemList