import { Box, Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { UseCartContext } from '../Context/Context'

const Form = () => {



   const initialState = {
        email:'',
        name:'',
        phone:'',
        products: {
           product:'iphone 12',
           quantity :'2',
           totalPrice :'500$'
        }
   }


    const[info,setInfo]=useState(initialState)

  const handleChange = (e)=>{
        const {name,value} = e.target 
        setInfo({...info,[name]:value})
  }

    const handleSubmit = (e)=>{
    e.preventDefault()
    if(info.email === '' || info.name === '' || info.phone === ''){
        alert('ingresa todos los datos')
    }else{
       setInfo(initialState)
    }
    
    
   
    }



  return (
    <Box mt='50px' maxW ='300px'>  
    <h1>Formulario</h1>
    <form onSubmit={handleSubmit}>
     <Input onChange={handleChange} value={info.email} variant='filled' placeholder='email' type='email' name='email' />
     <Input onChange={handleChange} value={info.name} variant='filled' placeholder='name' type='text'  name='name'/>
     <Input onChange={handleChange} value={info.phone}    variant='filled' placeholder='phone' type='number' name='phone' />
     <Button type='submit' > Enviar</Button>
    </form>
        


    </Box>
  )
}

export default Form