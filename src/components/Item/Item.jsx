import { Button, ButtonGroup, Card, CardBody, CardFooter, Center, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({prod}) => {
  return (
    <>
<Card  style={{margin:'50px'}} >
  <CardBody>
    <Center>
         <Image
      src={prod.image}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      maxW={{ base: '100%', sm: '170px' }}
      />
    </Center>
   
    <Stack mt='6' spacing='3'>
      <Heading w='140px' h='100px' size='md'>{prod.title}</Heading>
      <Text color='#42b883' style={{fontWeight:'700'}} fontSize='2x2'>
        {prod.price}$
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
        <Link to={`/detalle/${prod.id}`}> 
         <Button colorScheme='teal' variant='outline'  border=' solid 1px #42b883'>
        View Detail
      </Button>
        </Link>
     
    </ButtonGroup>
  </CardFooter>
</Card>  
</>
  )
}

export default Item