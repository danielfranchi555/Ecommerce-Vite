import { AspectRatio, Center, Image } from '@chakra-ui/react'
import React from 'react'

import bannerFotoDos from '../../img/banner-dos-min.jpg'

const Banner = () => {
  return (
  
    <AspectRatio maxW='10000px' ratio={10 / 4}>
    <Image src={bannerFotoDos} alt='naruto' objectFit='cover' />
  </AspectRatio>
 
    ) 
}

export default Banner