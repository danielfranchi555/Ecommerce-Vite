import { Box, Center, Spinner } from '@chakra-ui/react'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase'
import Banner from '../Banner/Banner'
import Categories from '../Categories/Categories'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
  const [products,setProducts]=useState([])
  const [loading,setLoading]= useState(true)

   const {category}= useParams()

   const getProducts =  ()=>{
    const queryCollection = collection(db,'products')
     onSnapshot((queryCollection),(prod)=>{
       setProducts(prod.docs.map(prod=> ({id:prod.id,...prod.data()})))

       setLoading(false)
     })
 }



   const productsFilter =  ()=>{
     const queryCollection = collection(db,'products')
      const queryFiltrada = query(queryCollection,where('categorie', '==',`${category}`))
      onSnapshot((queryFiltrada),(prod)=>{
         setLoading(false)
        setProducts(prod.docs.map(prod=> ({id:prod.id,...prod.data()})))
      })
    
   
  }
  useEffect(()=>{
    productsFilter()
   },[category])
    
 useEffect(()=>{
  if(category){
    productsFilter()
  }else{

    getProducts()
  }
 },[category])

  
  return (
    
     <>

       {loading ?
       <Center>
       <Spinner justify='center'  mt='20px' thickness='4px' speed='0.65s'  emptyColor='gray.200'  color='blue.500'  size='xl'/>
        </Center>
   :
   
 
   <Box >
    <Banner></Banner>
     <Box mt='15px'>
      <Categories/>
    </Box>
      <Box >
       <ItemList  products={products}/> 
       </Box>
   </Box>
   

  
      }
    </>   
   
       
        
  
  )
}

export default ItemListContainer