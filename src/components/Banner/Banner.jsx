import { Box } from '@chakra-ui/react'
import React from 'react'

import bannerFoto from '../../img/banner.jpg'

const Banner = () => {
  return (

    <div  >
        <div style={{width:'600px', backgroundImage:`url(${bannerFoto})`,height:'300px',backgroundRepeat:'no-repeat',width:'100%',backgroundPosition:'center'}} ></div>
    </div>
  )
}

export default Banner