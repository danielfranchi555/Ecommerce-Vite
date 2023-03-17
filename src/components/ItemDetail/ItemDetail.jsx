import { Box, Card, CardBody, CardFooter, Center, Heading, Image, Stack, Text, useToast } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { UseCartContext } from '../Context/Context'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({product}) => {
  const toast = useToast()

  const {addProduct,cart} =UseCartContext()
 
const onAdd = (quantity)=>{
  addProduct({...product,quantity})
}

useEffect(()=>{
  localStorage.setItem('products', JSON.stringify(cart))
},[cart])



  return (
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  maxW={{ base:'340px', sm: '700px' }}
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

  <Center >
          <CardBody style={{display:'flex',flexDirection:'column',justifyContent:'center'}}  maxH={{ base: '260px', sm: '260px' }}>
      <Heading py='1' size='xs'>{product.title}</Heading>
         <Text py='1'  style={{fontSize:'14px'}}>
        {product.description}
              <Box fontSize='30px'  >  ${product.price} </Box>
       <ItemCount toast={toast} onAdd={onAdd}  product={product} initial ={1} stock ={5}/> 
      </Text>
      
     
          
    </CardBody>
  


    
       
   
  </Center>
</Card>
  )
}

export default ItemDetail