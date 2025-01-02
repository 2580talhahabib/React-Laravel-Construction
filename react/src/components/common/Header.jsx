import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Header = () => {
  return (
    <>
        <header>
    <div className="container py-3 ">
    <Navbar expand="lg" >
        <Navbar.Brand href="/" className='logo'><span>UrbanEdge</span> Construction</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className='Nav-link'>Home</Nav.Link>
            <Nav.Link href="/about" className='Nav-link'>About Us</Nav.Link>
            <Nav.Link href="#home" className='Nav-link'>Services</Nav.Link>
            <Nav.Link href="#home" className='Nav-link'>Projects</Nav.Link>
            <Nav.Link href="#link" className='Nav-link'>Blogs</Nav.Link>
            <Nav.Link href="#link" className='Nav-link'>Contact Us</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
    </Navbar>        
    </div>
  
  </header>
    </>
  )
}

export default Header
