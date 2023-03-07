import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
  const [products,setProducts]=useState([])

   const {category}= useParams()
    const getProducts = async ()=>{
        const data = await fetch('https://fakestoreapi.com/products')
        const resp = await data.json()
        setProducts(resp)
        console.log(products)
    }


    useEffect(()=>{
     getProducts()
    },[])
  
    const productosFiltrados = products.filter((prod)=>prod.category === category)
    console.log(productosFiltrados)
  return (
    <>
  
      {!category? <ItemList products={products}/>  :<ItemList products={productosFiltrados}/>}
     
      
     
    </>
       
        
  
  )
}

export default ItemListContainer