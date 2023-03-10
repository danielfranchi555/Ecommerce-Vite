import { Box, useToast } from '@chakra-ui/react'
import React, { createContext, useContext, useState } from 'react'
// CREO EL CONTEXTO //
export const CartContext = createContext()

//CREO UNA FUNCION QUE RETORNE EL CONTEXTO  PARA USARLO//
export const UseCartContext = ()=> useContext(CartContext) 


const Context = ({children}) => {
  const saludo = ()=> console.log('saludo')
  const [cart,setCart]= useState([])
  const toast = useToast()



/*FUNCION PARA AGREGAR PRODUCTOS AL CARRITO */
  const addProduct = (product)=>{
   const idx = cart.findIndex((prod)=>prod.id === product.id) 
   if(idx !== -1 ){
     //si el producto existe// 
     const cant = cart[idx].quantity
     cart[idx].quantity = cant + product.quantity
   }else{
   // y si no existe que lo agregue al cart//
     setCart([...cart,product])
     toast({
      title: 'Producto agregado al carrito.',
      button:'hola',
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  } 
   
}
  
  
//FUNCION PARA CALCULAR EL PRECIO TOTAL //
 const precioTotal = ()=>{
 const totalPrice = cart.reduce((acc,prod)=>(acc= acc + prod.price * prod.quantity),0)
  return totalPrice.toFixed(2)
 }
 
 //FUNCION QUE RETORNA LA CANTIDAD DE OBJETOS//
 const prodCant = ()=>{
   const cantidadProducts = cart.reduce((acc,prod)=>(acc = acc + prod.quantity ),0 )
   return cantidadProducts
 }



  return (
    <CartContext.Provider value={{
 saludo,
 addProduct,
 precioTotal,
 prodCant,
 cart
    }}>
         {children}
    </CartContext.Provider>
  )
}

export default Context