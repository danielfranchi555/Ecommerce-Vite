import { AspectRatio, Box, Center, Image } from '@chakra-ui/react'
import React from 'react'
import  Fade  from 'react-reveal'
import banner from '../../img/banner-ecommerce.jpg'

const Banner = () => {
  return (
    <Fade>
  <Image
  boxSize='100%'
  h='300px'
  objectFit='cover'
  src={banner}
  alt='Dan Abramov'
/>
    </Fade>

  

 
    ) 
}

export default Banner