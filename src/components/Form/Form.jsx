import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Center, Flex, FormLabel, Input, InputGroup, InputLeftElement, Spacer, Text, Wrap, WrapItem } from '@chakra-ui/react'
import {db} from '../../firebase'
import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { UseCartContext } from '../Context/Context'
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import swal from 'sweetalert';


const Form = () => {
 
  const initialState = {}

  const {cart,precioTotal,setCart,setCountProducts,setSuccess,setId} = UseCartContext()
  const [buyer,setBuyer]=useState(initialState)
  const [order,setOrder]= useState({})
  
 const orderCollection = collection(db,'orders')



 const items = cart.map(item => ({id:item.id ,product:item.title,cant:item.quantity, price:item.price}))
 const total = precioTotal()
  const handleChange = (e)=>{
        const {name,value} = e.target
        setBuyer({...buyer,[name]:value})
        setOrder({...order,buyer,items,total})

   }

    const handleSubmit = async  (e)=>{    
     e.preventDefault()
     if(!buyer.email || !buyer.name || !buyer.phone ){
      alert('Porfavor completa  los campos correctamente')
     }else if ( buyer.email != buyer.repeat){
      alert('Los email no son correctos')
     }else{
      await addDoc(orderCollection,order).then(({id})=>setId(id))
      setSuccess(true)
    
      setCountProducts(0)
      setCart([])
      setBuyer({name:'',email:'',phone:'',repeat:''})
     }
  
    } 


  return (
    <>
      
    
<Flex direction='column' gap='10px' mt='40px'width={{base:'300px',md:'700px'}}>
  <Box p='4' bg='black'>
   <Text fontWeight='700' color='white'>
   Complete the form to finish </Text>
  </Box>
  <Spacer />
  <Box  >
    <form onSubmit={handleSubmit}>
      <FormLabel  m='10px'>  Email</FormLabel>
      <InputGroup  >
    <InputLeftElement
      children={<EmailIcon color='gray.300' />}
    />
    <Input onChange={handleChange} value={buyer.email}   variant='filled'  type='email'  name='email'  placeholder='Email' />
  </InputGroup> 
  <FormLabel  m='10px'>  Email</FormLabel>

  <InputGroup  >
    <InputLeftElement
      children={<EmailIcon color='gray.300' />}
    />
    <Input onChange={handleChange} value={buyer.repeat}   variant='filled'  type='email'  name='repeat'  placeholder='Repeat Email' />
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
  <span style={{fontWeight:'700',marginRight:'10px'}}>Total Price </span>  ${precioTotal()}
  <Button type='submit' size='lg' ml='20px' color='#66bfbf' border='solid' variant='outline'>Checkout</Button>
  </Box>
</Flex>
</Center>
  </form>  
  </Box>
</Flex>
    
    </>

  )
}
export default Form
