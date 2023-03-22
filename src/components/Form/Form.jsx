import { Box, Button, Center, Flex, FormLabel, Input, InputGroup, InputLeftElement, Spacer, Text, Wrap, WrapItem } from '@chakra-ui/react'
import {db} from '../../firebase'
import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { UseCartContext } from '../Context/Context'
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import { Await } from 'react-router-dom'

const Form = () => {
 
  const initialState = {}

  const {cart,precioTotal} = UseCartContext()

  const[buyer,setBuyer]=useState(initialState)
  const [order,setOrder]= useState({})

  
 const orderCollection = collection(db,'orders')
  
  const handleChange = (e)=>{
        const {name,value} = e.target
        setBuyer({...buyer,[name]:value})
        setOrder({...order,buyer,cart})

   }

    const handleSubmit = async  (e)=>{

     e.preventDefault()
     if(!buyer.email || !buyer.name || !buyer.phone ){
      alert('Porfavor completa todos los datos')
     }else{
      console.log(order)
     }
    await addDoc(orderCollection,order)
     /*  setBuyer({name:'',email:'',phone:''}) */

    } 


  return (
<Flex direction='column' gap='10px' mt='20px'width={{base:'300px',md:'700px'}}>
  <Box p='4' bg='black'>
   <Text color='white'>
     Completa el formulario para terminar la compra
    </Text>
  </Box>
  <Spacer />
  <Box p='4' >
    <form onSubmit={handleSubmit}>
      <FormLabel  m='10px'>  Email</FormLabel>
      <InputGroup  >
    <InputLeftElement
      children={<EmailIcon color='gray.300' />}
    />
    <Input onChange={handleChange} value={buyer.email}   variant='filled'  type='email'  name='email'  placeholder='Email' />
  </InputGroup>     
  
  <FormLabel  m='10px'>  Name</FormLabel>
  <InputGroup  >
  
    <Input onChange={handleChange} value={buyer.name}   variant='filled'  type='text'  name='name' placeholder='Name' />
  </InputGroup>      
  
  <FormLabel  m='10px'>  Phone</FormLabel>
  <InputGroup  >
    <InputLeftElement
      children={<PhoneIcon color='gray.300' />}
    />
    <Input onChange={handleChange} value={buyer.phone}   variant='filled'  type='number'  name='phone' placeholder='Phone ' />
  </InputGroup> 
<Center>
<Flex>
  <Box p='4'  >
  <span style={{fontWeight:'700',marginRight:'10px'}}>Precio Total </span>  ${precioTotal()}
  <Button type='submit' size='lg' ml='20px' color='#66bfbf' border='solid' variant='outline'>Checkout</Button>
  </Box>
</Flex>
</Center>


  
  </form>  
  </Box>
</Flex>
  )
}
export default Form
