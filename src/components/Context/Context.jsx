import {  useToast } from '@chakra-ui/react'
import React, { createContext, useContext, useState } from 'react'
 // CREO EL CONTEXTO //
export const CartContext = createContext()

//CREO UNA FUNCION QUE RETORNE EL CONTEXTO  PARA USARLO//
export const UseCartContext = ()=> useContext(CartContext)  


const Context = ({children}) => {

  const [cart,setCart]= useState([])
  const [countProducts,setCountProducts]= useState(0)

  const toast = useToast()



  // HAGO UN GET DE TODOS LOS PRODUCTOS DEL LOCALSTORAGE//
   

/*FUNCION PARA AGREGAR PRODUCTOS AL CARRITO */
  const addProduct = (product)=>{
   const idx = cart.findIndex((prod)=>prod.id === product.id) 
   if(idx !== -1 ){
     //si el producto existe// 
     cart[idx].quantity = cart[idx].quantity + product.quantity
     setCountProducts( countProducts + product.quantity)
   }else{
   // y si no existe que lo agregue al cart//
   setCountProducts(countProducts + product.quantity)
   setCart([...cart,product])
     toast({
      title: 'Producto agregado al carrito.',
      status: 'success',
      bg:'#66bfbf',
      duration: 3000,
      isClosable: true,
      Button :true
    })
  } 
}





 //FUNCION PARA CALCULAR EL PRECIO TOTAL //
 const precioTotal = ()=>{
 const totalPrice = cart.reduce((acc,prod)=>(acc= acc + prod.price * prod.quantity),0)
  return totalPrice.toFixed(3)
 }




  return (
    <CartContext.Provider value={{
 addProduct,
 setCart,
 precioTotal,
 countProducts,
 cart,
 setCountProducts
    }}>
         {children}
    </CartContext.Provider>
  )
}

export default Context