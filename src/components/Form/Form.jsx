import { Box, Button, Input } from '@chakra-ui/react'
import {db} from '../../firebase'
import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { UseCartContext } from '../Context/Context'

const Form = () => {
  const {cart,precioTotal} = UseCartContext()

  const[info,setInfo]=useState({
    
    items:[cart],
    total:precioTotal()
  }
    )
  const[order,setOrder]= useState(null)
 



  
  const handleChange = (e)=>{
        
      
  
  }

    const handleSubmit =  (e)=>{
    e.preventDefault()
    if(info.email === '' || info.name === '' || info.phone === ''){
        alert('ingresa todos los datos')
    }else{   
      setOrder(info)  
       console.log(order) 
    }
    }


    console.log(order)
  return (
    <Box mt='50px' maxW ='300px'>  
    <h1>Formulario</h1>
    <form onSubmit={handleSubmit}>
     <Input onChange={handleChange} value={info.email}  variant='filled' placeholder='email' type='email' name='email' />
     <Input onChange={handleChange} value={info.name}   variant='filled' placeholder='name' type='text'  name='name'/>
     <Input onChange={handleChange} value={info.phone}  variant='filled' placeholder='phone' type='number' name='phone' />
     <Button type='submit' > Enviar</Button>
    </form>
        


    </Box>
  )
}

export default Form