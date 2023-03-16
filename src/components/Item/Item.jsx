import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Center, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

const Item = ({prod}) => {

 

  return (
    <Fade >
<Card maxW='xs'>
  <CardBody>
    <Image
      src={prod.image}
  
      borderRadius='lg'
      maxW={{ base: '100%', sm: '200px' }}
      maxH={{ base: '100%', sm: '200px' }}

    />
    <Stack mt='6' spacing='3'>
      <Heading size='md' w='140px' h='50px' >{prod.title}</Heading>
      <Text>
    
      </Text>
      <Text color='black' mt='10px' fontWeight='200' fontSize='2xl'>
        <Box mt='10'>
        ${prod.price}

        </Box>
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Link to={`/detalle/${prod.id}`}>
       <Button color='#42b883' variant='outline' colorScheme='blue'>
        View Detail
      </Button>
      </Link>
     
    </ButtonGroup>
  </CardFooter>
</Card>
</Fade>
  )
}

export default Item