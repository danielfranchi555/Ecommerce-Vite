import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Center, Flex, FormLabel, Input, InputGroup, InputLeftElement, Spacer, Text, Wrap, WrapItem } from '@chakra-ui/react'
import {db} from '../../firebase'
import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { UseCartContext } from '../Context/Context'
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'

const Form = () => {
 
  const initialState = {}

  const {cart,precioTotal,setSuccess,success,setCart} = UseCartContext()
  const [buyer,setBuyer]=useState(initialState)
  const [order,setOrder]= useState({})
  const [id,setId]=useState(null)
  
 const orderCollection = collection(db,'orders')
  

 const totalPrice = ()=>  precioTotal ()

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
    await addDoc(orderCollection,order).then(({id})=>setId(id))
    setSuccess(true)
      setBuyer({name:'',email:'',phone:''})
    } 


  return (
    <>
        {success ? 
        <Alert
        status='success'
        variant='subtle'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        height='200px'
      >
        <AlertIcon boxSize='40px' mr={0} />
        <AlertTitle mt={4} mb={1} fontSize='lg'>
          Muchas gracias por tu compra !!
        </AlertTitle>
        <AlertDescription maxWidth='sm'>
          Tu numero de orden es  <Text fontWeight='700' fontSize='20px'>"{id}"</Text> 
        </AlertDescription>
      </Alert>
        :
    
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
    }
    </>

  )
}
export default Form
