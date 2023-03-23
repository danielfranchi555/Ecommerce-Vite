import { Center } from '@chakra-ui/react';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {

  return (
    <Navbar bg="light"  expand="lg">
    <Container>
      <Link to={"/"}>
        <Center>
      <Navbar.Brand href="#home"> <img src={logo} style={{width:'50px'}}alt="logo" /> </Navbar.Brand>
        </Center>
      </Link>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>

      <Link to={'/cart'}>
      <div>
        <CartWidget/>
      </div>
      </Link>
      </Navbar.Collapse>
      
    </Container>
  </Navbar>
  )
}

export default NavBar