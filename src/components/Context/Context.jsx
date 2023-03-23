import {useToast } from '@chakra-ui/react'
import React, { createContext, useContext, useEffect, useState } from 'react'
 // CREO EL CONTEXTO //
export const CartContext = createContext()

//CREO UNA FUNCION QUE RETORNE EL CONTEXTO  PARA USARLO//
export const UseCartContext = ()=> useContext(CartContext)  


const Context = ({children}) => {

  

// traigo los productos del localStorage 
const getProducts = ()=>{
  let datos = localStorage.getItem("cart")
  if(datos){
    return JSON.parse(datos)
  }else{
    return []
  }
 }


//traigo la cantidad total del localStorage
 const getQuantity = () => {
  const totalQuantity = localStorage.getItem("quantity")

  if (totalQuantity){
      return JSON.parse(totalQuantity)
  }else{
    return 0
  }
 }

  const [success,setSuccess]= useState(false)
  const [cart,setCart]=useState(getProducts())
  const [id,setId]=useState(null)
  const [countProducts,setCountProducts]= useState(getQuantity())

  const toast = useToast()



  useEffect(()=>{
    localStorage.setItem("quantity",JSON.stringify(countProducts))
   },[countProducts])
 


  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cart))
   },[cart])

   

   


/*FUNCION PARA AGREGAR PRODUCTOS AL CARRITO */
  const addProduct = (product)=>{
   const idx = cart.findIndex((prod)=>prod.id === product.id) 
   if(idx !== -1 ){
   //si el producto existe// 
     cart[idx].quantity = cart[idx].quantity + product.quantity
     setCountProducts( countProducts + product.quantity) 
     setCart([...cart])
     toast({
      title: 'Producto agregado al carrito.',
      status: 'success',
      bg:'#66bfbf',
      duration: 3000,
      isClosable: true,
      Button :true
    })
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


 const subTotal = (quantity,price)=>{
  return quantity * price.toFixed(3) 
  
}

  return (
    <CartContext.Provider value={{
 addProduct,
 setCart,
 precioTotal,
 countProducts,
 cart,
 setCountProducts,
 setSuccess,
 success,
 subTotal,
 id,
 setId
    }}>
         {children}
    </CartContext.Provider>
  )
}

export default Context