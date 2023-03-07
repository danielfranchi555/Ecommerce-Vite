import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ChakraProvider } from '@chakra-ui/react'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';

function App() {

  return (
 <ChakraProvider>
  <BrowserRouter>
    <NavBar/>
     <Routes>
      <Route path='/' element={<ItemListContainer/>} />
      <Route path='/category/:category' element={<ItemListContainer/>} />
      <Route path='/detalle/:id' element={<ItemDetailContainer/>} />
      <Route path='/cart' element={<Cart/>} />
     </Routes>
    </BrowserRouter>
 </ChakraProvider>
    
   
  )
}

export default App
