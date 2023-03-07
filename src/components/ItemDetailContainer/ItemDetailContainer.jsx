import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [product,setProduct]=useState({})
    const {id}= useParams()

    const getProduct = async ()=>{
         const data = await fetch(`https://fakestoreapi.com/products/${id}`)
         const resp = await data.json()
         setProduct(resp)
         console.log(product)
    }
    
    useEffect(()=>{
      getProduct()
    },[])


  return (
    <ItemDetail product={product}/>
  )
}

export default ItemDetailContainer