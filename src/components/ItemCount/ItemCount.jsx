import { Box, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

const ItemCount = ({initial,stock,onAdd}) => {
  
    const [count ,setCount] =useState(initial)

    const increment = ()=>{
        setCount(count + 1)
    }
    const decrement = ()=>{
        setCount(count - 1)
    }


  return (
    <div  style={{display:'flex',marginTop:'20px'}}>
      <div>
          <Button  mr='10px'  onClick={()=>onAdd(count)} variant='solid' color='#66bfbf'>
        Add to Cart
      </Button>
      </div>
     
     { count <= initial ? 
     <div>

       <button  className='disabled btn'  onClick={()=>decrement()}>-</button>
     </div>
    :
    <div>
      <button className='btn' style={{backgroundColor:'#66bfbf'}} onClick={()=>decrement()}>-</button>
    </div>
     }
     <Box m='10px'>

      <span style={{fontWeight:'600'}}>{count}</span> 
     </Box>

      {
        count >= stock ?
              <button className='btn disabled' onClick={()=>increment()}>+</button>
              :
              <button className='btn' style={{backgroundColor:'#66bfbf'}}  onClick={()=>increment()}>+</button>
      }
    </div>
  )
}

export default ItemCount