import { Center, Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [product,setProduct]=useState({})
    const [loading,setLoading] = useState(true)
    const {id}= useParams()

    const getProduct = async ()=>{
         const data = await fetch(`https://fakestoreapi.com/products/${id}`)
         const resp = await data.json()
         setProduct(resp)
         setLoading(false)
         console.log(product)
    }
    
    useEffect(()=>{
      getProduct()
    },[])


  return (
    <>
    <Center mt='20px'>
      {loading? <Spinner  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl' /> :
        <ItemDetail product={product}/>
  }
    </Center>
    
    </>
  )
}

export default ItemDetailContainer