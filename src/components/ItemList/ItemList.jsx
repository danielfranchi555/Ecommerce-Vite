import { Center, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import Item from '../Item/Item'
 

const ItemList = ({products}) => {
  return (
    <div >
        <Wrap justify='center'   mt='60px'>
        {products.map((prod)=>(
           <Center>
            <WrapItem  key={prod.id}  w='200px' >
              <Center>
                    <Item prod={prod}/>
              </Center>
                
            </WrapItem>
           </Center>
            
            
        ))}
    
    </Wrap>
         
     
   
    </div>
    
  )
}

export default ItemList