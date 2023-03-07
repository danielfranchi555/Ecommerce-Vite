import { Button, Card, CardBody, CardFooter, Center, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({product}) => {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
        <div style={{width:'700px',margin:'20px'}}>
             <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
    <Center>
         <Image
    objectFit='cover'
    maxW={{ base: '200px', sm: '200px' }}
    src={product.image}
    alt='Caffe Latte'
  />
    </Center>
  <Stack>
    <CardBody>
      <Heading size='md'>The perfect latte</Heading>

      <Text py='2'>
       {product.description}
      </Text>
    </CardBody>

    <CardFooter>
        <Link to={'/cart'}>
        <Button variant='solid' colorScheme='blue'>
        Add to Cart
      </Button>
        </Link>
      
    </CardFooter>
  </Stack>
</Card>
        </div>
       
    </div>
  )
}

export default ItemDetail