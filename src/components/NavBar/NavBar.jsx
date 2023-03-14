import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {

  return (
    <Navbar bg="light"  expand="lg">
    <Container>
      <Link to={"/"}>
      <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
      </Link>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">

            <Link to={`/category/${"men's clothing"}`}>
            <NavDropdown.Item href="#action/3.1">Men</NavDropdown.Item>
            </Link>
           <Link to={`/category/${"women's clothing"}`}>
            <NavDropdown.Item href="#action/3.1">Women</NavDropdown.Item>
            </Link>
            <Link to={`/category/${"jewelery"}`}>
            <NavDropdown.Item href="#action/3.1">jewelery</NavDropdown.Item>
            </Link>
            <Link to={`/category/${"electronics"}`}>
            <NavDropdown.Item href="#action/3.1">electronics</NavDropdown.Item>
            </Link>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <Link to={'/cart'}>
      <div>
        <CartWidget/>
      </div>
      </Link>
      
    </Container>
  </Navbar>
  )
}

export default NavBar