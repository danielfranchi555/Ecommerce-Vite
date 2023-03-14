import { Button, Center, Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UseCartContext } from '../Context/Context'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
  const [products,setProducts]=useState([])
  const [loading,setLoading]= useState(true)

   const {category}= useParams()
    const getProducts = async ()=>{
        const data = await fetch('https://fakestoreapi.com/products')
        const resp = await data.json()
        setProducts(resp)
        setLoading(false)
        console.log(products)
    }


    useEffect(()=>{
     getProducts()
    },[])
  
    const productosFiltrados = products.filter((prod)=>prod.category === category)
    console.log(productosFiltrados)
  return (
    <> 
       <Center >
         {loading ? <Spinner  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'/> :
       !category? <ItemList products={products}/>  :<ItemList products={productosFiltrados}/>
      
      
      }
     
       </Center>
      
        
     
    </>
       
        
  
  )
}

export default ItemListContainer