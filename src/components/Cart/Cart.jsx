import { Button, Center, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React  from 'react'
import { UseCartContext } from '../Context/Context'
import Form from '../Form/Form'

const Cart = () => {
  const {cart,precioTotal,setCart,setCountProducts,countProducts} = UseCartContext()

  console.log(countProducts)

  const deleteProduct =(product)=>{
   const newArray = cart.filter(prod => prod.id != product.id)

   setCart(newArray)
   setCountProducts(countProducts - product.quantity)
  } 



 

  return (
    <div style={{textAlign:'center'}}>
      <h1 style={{fontSize:'50px'}}>Cart</h1>
      { !cart ? <h1>no hay productos </h1>:
         <TableContainer color='black' >
  <Table variant='simple' >
    <TableCaption>Imperial to metric conversion factors</TableCaption>
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
      {cart.map((item)=>(
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
   
<Center>

<Form/>
</Center>

    $ {precioTotal()}

        
    </div>
  )
}

export default Cart