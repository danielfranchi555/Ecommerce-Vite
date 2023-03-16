import { Box, Button, Card, CardBody, CardFooter, Center, Heading, Image, Stack, Text, useToast } from '@chakra-ui/react'
import React from 'react'
import { UseCartContext } from '../Context/Context'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({product}) => {
  const toast = useToast()

  const {cart,addProduct} =UseCartContext()
 

const onAdd = (quantity)=>{
  addProduct({...product,quantity})

}
  return (
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  maxW={{ base: '400px', sm: '700px' }}
  mt='60px'

>
  <Center>
      <Image
    objectFit='cover'
    maxW={{ base: '130px', sm: '200px' }}
    src={product.image}
    alt='Caffe Latte'
    mt='10px'
    m='20px'
  />
  </Center>

  <Stack>
      <Center>
          <CardBody maxH={{ base: '290px', sm: '200px' }}>
      <Heading size='md'>{product.title}</Heading>
      <Text py='2' style={{fontSize:'14px'}}>
        {product.description}
      </Text>
    </CardBody>
      </Center>
  


    <Center>
       <CardFooter>
    <ItemCount toast={toast} onAdd={onAdd}  product={product} initial ={1} stock ={5}/> 
     
    </CardFooter>
    </Center>
   
  </Stack>
</Card>
  )
}

export default ItemDetail