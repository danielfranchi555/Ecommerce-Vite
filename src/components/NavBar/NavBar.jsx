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
          <NavDropdown title="Categories" id="basic-nav-dropdown">

            <Link to={`/category/${"iphone"}`}>
            <NavDropdown.Item href="#action/3.1">Iphone</NavDropdown.Item>
            </Link>
           <Link to={`/category/${"macbook"}`}>
            <NavDropdown.Item href="#action/3.1">Macbook</NavDropdown.Item>
            </Link>
            <Link to={`/category/${"watch"}`}>
            <NavDropdown.Item href="#action/3.1">Watch</NavDropdown.Item>
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