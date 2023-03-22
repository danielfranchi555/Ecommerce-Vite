import {  Image } from '@chakra-ui/react'
import React from 'react'
import  Fade  from 'react-reveal'
import banner from '../../img/banner-ecommerce.jpg'

const Banner = () => {
  return (
    <Fade>
  <Image
  w={{base:'100%',md:'100%'}}
  h={{base:'140px',md:'300px'}}
  objectFit='cover'
  src={banner}
  alt='Dan Abramov'
/>
    </Fade>

  

 
    ) 
}

export default Banner