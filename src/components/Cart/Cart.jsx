import { Box, Button, Center, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React  from 'react'
import { UseCartContext } from '../Context/Context'
import Form from '../Form/Form'

const Cart = () => {
  const {cart,precioTotal,setCart,setCountProducts,countProducts} = UseCartContext()


  const deleteProduct =(product)=>{
   const newArray = cart.filter(prod => prod.id != product.id)
   setCart(newArray)
   setCountProducts(countProducts - product.quantity)
  } 



 

  return (
    <div style={{textAlign:'center'}}>
      <h1 style={{fontSize:'50px'}}>Cart</h1>
      {cart.length === 0 ?
     <h1 style={{fontSize:'30px'}}>No hay productos en el carrito</h1>  
     :
              <TableContainer color='black' >
  <Table variant='simple' >
    <Thead>
      <Tr>
        <Th>Product</Th>
        <Th>Price</Th>
        <Th>Quantity</Th>
        <Th>SubTotal</Th>
        <Th>Delete</Th>
      </Tr>
    </Thead>
    <Tbody> 
      {
      cart.map((item)=>(
         <Tr key={item.id}>
        <Td> <img src={item.image} style={{width:'100px'}}alt="" /> </Td>
        <Td>$ {item.price}</Td>
        <Td>{item.quantity}  </Td>
        <Td>$ {item.quantity * item.price}</Td>
        <Td><Button bg='red' onClick={()=>deleteProduct(item)} color='white' >Delete</Button></Td>
      </Tr>
      ))} 
    </Tbody>
  </Table>
</TableContainer>
      
    }

{cart.length != 0 &&
<Center>

<Form/>
</Center>
}

        
    </div>
  )
}

export default Cart