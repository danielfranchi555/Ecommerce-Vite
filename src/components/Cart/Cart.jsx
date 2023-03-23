import { Alert, AlertIcon,  Button, Center, Table, TableContainer, Tbody, Td,Th, Thead, Tr } from '@chakra-ui/react'
import swal from 'sweetalert'
import { UseCartContext } from '../Context/Context'
import Form from '../Form/Form'

const Cart = () => {
   const {cart,setCart,setCountProducts,countProducts,subTotal,success,id} = UseCartContext()
  
   const alert = (id)=>{
    swal({
      title:'Muchas gracias por tu compra!!',
      text: ` tu nro de orden es  "${id}" `,

    });
  } 
  const deleteProduct =(product)=>{
   const newArray = cart.filter(prod => prod.id != product.id)
   setCart(newArray)
   setCountProducts(countProducts - product.quantity)
  } 

  const deleteAllProducts = ()=>{
    const emptyCart = []
    setCart(emptyCart)
    setCountProducts(countProducts === '0')

   }
  



 


  return (
    <div style={{textAlign:'center'}}>
      <h1 style={{fontSize:'50px'}}>Cart</h1>{
        success ? <h1>
         {alert(id)}
        </h1>:


      
      cart.length === 0  ?
         <Alert mt='50px' padding='30px' flexDirection='row'
         alignItems='center' justifyContent='center'
         textAlign='center'
        status='warning'>
     <AlertIcon />
     No hay productos en el carrito 
   </Alert>
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
        <Td>$ {subTotal(item.quantity,item.price)}</Td>
        <Td><Button  variant='outline' colorScheme='red' onClick={()=>deleteProduct(item)}  >Delete</Button></Td>
      </Tr>
      ))} 
     
    </Tbody>
  </Table>
  <Center mt='20px'>
      <Button  variant='outline' colorScheme='red' onClick={()=>deleteAllProducts()}>Delete All</Button>
      </Center>
</TableContainer>
    }
<Center>
{cart.length != 0 &&
<Form/>
}

</Center>


        
    </div>
  )
}

export default Cart