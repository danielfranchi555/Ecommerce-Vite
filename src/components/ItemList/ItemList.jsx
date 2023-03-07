import { Center, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import Item from '../Item/Item'

const ItemList = ({products}) => {
  return (
    <Wrap justify='center'>
        {products.map((prod)=>(
            <WrapItem  >
                <Center>
                    <Item prod={prod}/>
                </Center>
            </WrapItem>
        ))}
    
    </Wrap>
  )
}

export default ItemList