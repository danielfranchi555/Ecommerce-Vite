import { Box, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { UseCartContext } from '../Context/Context'

const ItemCount = ({initial,stock,onAdd}) => {
    const [count ,setCount] =useState(initial)

    const increment = ()=>{
        setCount(count + 1)
    }
    const decrement = ()=>{
        setCount(count - 1)
    }

    const {cart} =UseCartContext()

    console.log(cart)
  return (
    <div style={{display:'flex', alignItems:'center', marginLeft:'10px'}}>
       <Button  mr='20px' padding ={5} onClick={()=>onAdd(count)} variant='solid' color='#42b883'>
        Add to Cart
      </Button>
     { count <= initial ? 
    <button  className='disabled btn'  onClick={()=>decrement()}>-</button>
    :
    <button className='btn' style={{backgroundColor:'#42b883'}} onClick={()=>decrement()}>-</button>
     }
     <Box m='10px'>

      <span style={{fontWeight:'600'}}>{count}</span> 
     </Box>

      {
        count >= stock ?
              <button className='btn disabled' onClick={()=>increment()}>+</button>
              :
              <button className='btn' style={{backgroundColor:'#42b883'}}  onClick={()=>increment()}>+</button>
      }
    </div>
  )
}

export default ItemCount