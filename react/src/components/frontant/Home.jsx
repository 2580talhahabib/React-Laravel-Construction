import React from 'react'
import Card from 'react-bootstrap/Card';
import AboutImg from '../../assets/images/about-us.jpg'
import construction2 from '../../assets/images/construction2.jpg'
import construction3 from '../../assets/images/construction3.jpg'
import construction4 from '../../assets/images/construction4.jpg'
import construction6 from '../../assets/images/construction6.jpg'
import icon1 from '../../assets/images/icon-1.svg'
import icon2 from '../../assets/images/icon-2.svg'
import icon3 from '../../assets/images/icon-3.svg'

import Header from '../common/Header';
import Footer from '../common/Footer';
const Home = () => {
  return (
    <>
<Header/>
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
{/* our services  */}
<section className="section-3  ">
  <div className="container-fluid bg-light py-5 ">
    <div className="section-header text-center py-5">
      <span>Our services</span>
      <h2>our construction services</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, vitae neque quasi nam suscipit nihil?</p>
    </div>
<div className="row">
     <div className="cart col-md-3 col-lg-3 ">
    <div className="image " >
     <img src={construction2} alt="" className='w-100 '/>
    </div>
    <div className="content">
      <h4>Specialty Construction</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor  elit.</p>
      <button>READ MORE</button>
    </div>
   </div>
   {/* - */}
   <div className="cart col-md-3 col-lg-3 ">
    <div className="image " >
     <img src={construction3} alt="" className='w-100 '/>
    </div>
    <div className="content">
      <h4>Civil Construction</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor  elit.</p>
      <button>READ MORE</button>
    </div>
   </div>
    {/* - */}
    <div className="cart col-md-3 col-lg-3 ">
    <div className="image " >
     <img src={construction4} alt="" className='w-100 '/>
    </div>
    <div className="content">
      <h4>Residential Construction</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor  elit.</p>
      <button>READ MORE</button>
    </div>
   </div>
    {/* - */}
    <div className="cart col-md-3 col-lg-3 ">
    <div className="image " >
     <img src={construction6} alt="" className='w-100 '/>
    </div>
    <div className="content">
      <h4>Corporate Construction</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor  elit.</p>
      <button>READ MORE</button>
    </div>
   </div>
</div>
  </div>
</section>
{/* why chose us  */}
<div className="section-4 py-5">
  <div className="container py-5">
  <div className="section-header text-center py-5">
      <span>Why Chose Us</span>
      <h2>Discover our wide variety of projects</h2>
      <p>Created in close partnership with our clients and collaborators.this approach merges industry experties.<br/>dedicate of our experience innovation and flexibility</p>
    </div>
    <div className="row m-5">
      <div className="col-lg-4 ">
      <Card style={{ width: '20rem', borderRadius:'3em' ,cursor:'pointer' }}>
      <Card.Body>
        <div className="cardicon">
          <img src={icon1} alt="" className='p-1' />
        </div>
        <Card.Title className=''>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.we were add some text on this card
        </Card.Text>
      
      </Card.Body>
    </Card>
      </div>
      <div className="col-lg-4  ">
      <Card style={{ width: '20rem', borderRadius:'3em' ,cursor:'pointer' }}>
      <Card.Body>
        <div className="cardicon">
          <img src={icon2} alt="" className='p-1' />
        </div>
        <Card.Title className=''>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.we were add some text on this card
        </Card.Text>
      
      </Card.Body>
    </Card>
      </div>
      <div className="col-lg-4 ">
      <Card style={{ width: '20rem', borderRadius:'3em' ,cursor:'pointer' }}>
      <Card.Body>
        <div className="cardicon">
          <img src={icon3} alt="" className='p-1' />
        </div>
        <Card.Title className=''>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.we were add some text on this card
        </Card.Text>
      
      </Card.Body>
    </Card>
      </div>
    </div>
  </div>
</div>
{/* our projects  */}
<section className="section-3  ">
  <div className="container-fluid bg-light py-5 ">
    <div className="section-header text-center py-5">
      <span>Our Projects</span>
      <h2>our construction services</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, vitae neque quasi nam suscipit nihil?</p>
    </div>
<div className="row">
     <div className="cart col-md-3 col-lg-3">
    <div className="image " >
     <img src={construction2} alt="" className='w-100 '/>
    </div>
    <div className="content">
      <h4>Faisalabad Porject</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor  elit.</p>
      <button>READ MORE</button>
    </div>
   </div>
   {/* - */}
   <div className="cart col-md-3 col-lg-3 ">
    <div className="image " >
     <img src={construction3} alt="" className='w-100 '/>
    </div>
    <div className="content">
      <h4>Lahore Porject</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor  elit.</p>
      <button>READ MORE</button>
    </div>
   </div>
    {/* - */}
    <div className="cart col-md-3 col-lg-3 ">
    <div className="image " >
     <img src={construction4} alt="" className='w-100 '/>
    </div>
    <div className="content">
      <h4>Karchi Porject</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor  elit.</p>
      <button>READ MORE</button>
    </div>
   </div>
    {/* - */}
    <div className="cart col-md-3 col-lg-3 ">
    <div className="image " >
     <img src={construction6} alt="" className='w-100 '/>
    </div>
    <div className="content">
      <h4>Paris Project</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor  elit.</p>
      <button>READ MORE</button>
    </div>
   </div>
</div>
  </div>
</section>

<section className='section-5'>

</section>
  </main>
<Footer/>
    </>


  )
}

export default Home
