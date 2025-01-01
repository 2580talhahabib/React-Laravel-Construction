import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AboutImg from '../../assets/images/about-us.jpg'
const Home = () => {
  return (
    <>
    <header>
    <div className="container py-3 ">
    <Navbar expand="lg" >
        <Navbar.Brand href="#home" className='logo'><span>UrbanEdge</span> Construction</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='Nav-link'>Home</Nav.Link>
            <Nav.Link href="#home" className='Nav-link'>About Us</Nav.Link>
            <Nav.Link href="#home" className='Nav-link'>Services</Nav.Link>
            <Nav.Link href="#home" className='Nav-link'>Projects</Nav.Link>
            <Nav.Link href="#link" className='Nav-link'>Blogs</Nav.Link>
            <Nav.Link href="#link" className='Nav-link'>Contact Us</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
    </Navbar>        
    </div>
  
  </header>
  <main >
    {/* hero section  */}
<section className='section-1'>
<div className="hero d-flex align-items-center">
    <div className="container-fluid">
        <div className="text-center">
            <span>Welcome Amazing Constructions</span>
            <h1>Crafting dreams with <br/> precision and excellence. </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, nam animi! Similique temporibus .</p>
            <div className="mt-4">
            <a className='btn btn-primary'>Contact Now</a>
            <a className='btn btn-secondary ms-2'>View Projects</a>
            </div>
        </div>
    </div>
</div>
</section>
{/* About us section  */}
<section className='section-2 py-5'>
    <div className="container py-5">
        <div className="row">
            <div className="col-md-6">
                <img src={AboutImg} alt="" className='w-100' />
            </div>
            <div className="col-md-6">
            <span>About us</span>
            <h2>Crafting structures that last a life time</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, blanditiis? Voluptatem illo deleniti laborum soluta doloremque similique tempora voluptates dolore quibusdam, assumenda provident itaque!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores qui labore nesciunt delectus, nihil commodi, ullam aperiam at fuga necessitatibus, obcaecati dicta unde in.</p>
            </div>
        </div>
    </div>
</section>
  </main>
  <footer>

  </footer>
    </>


  )
}

export default Home
