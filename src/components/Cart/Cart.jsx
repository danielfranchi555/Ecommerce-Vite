import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { UseCartContext } from '../Context/Context'

const Cart = () => {
  const {cart,precioTotal} = UseCartContext()

   console.log(cart)
  return (
    <div style={{textAlign:'center'}}>
      <h1 style={{fontSize:'50px'}}>Cart</h1>
      <TableContainer>
  <Table variant='simple'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>Product</Th>
        <Th>Quantity</Th>
        <Th>SubTotal</Th>
      </Tr>
    </Thead>
    <Tbody>
      {cart.map((item)=>(
         <Tr key={item.id}>
        <Td> <img src={item.image} style={{width:'80px'}}alt="" /> </Td>
        <Td>{item.quantity}</Td>
        <Td>{item.quantity * item.price}$</Td>
      </Tr>
      ))} 
    </Tbody>
  </Table>
</TableContainer>
     {precioTotal()} 

        
    </div>
  )
}

export default Cart