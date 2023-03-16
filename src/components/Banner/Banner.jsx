import React from 'react'

import bannerFotoDos from '../../img/banner-dos-min.jpg'

const Banner = () => {
  return (

    <div style={{width:'100%'}}  >
        <div style={{width:'100%', backgroundImage:`url(${bannerFotoDos})`,height:'400px',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} ></div>
    </div>
  )
}

export default Banner