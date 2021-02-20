import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Vasiti from '../assets/Vasiti-Logo-black.svg';
import Button from 'react-bootstrap/Button';
import testiImage from '../assets/Testimonial image.svg';
import tolu from '../assets/tolu.svg';
import Users from './Users';
import woman from '../assets/woman-shoppingbag-card.svg';
import Vendors from './Vendors';
import Footer from './Footer';


export default function NavbarTab() {
    return (
        <div>
            <Navbar  className='container' expand="lg">
                <Navbar.Brand href="#home"> <img src={Vasiti} alt=""/> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <span className ="Nav ml-auto">     
                        <Nav className="justify-content-center">
                            <Nav.Link href="#home">ABOUT US</Nav.Link>
                            <Nav.Link href="#home">STORIES</Nav.Link>
                            <Nav.Link href="#home">CONTACT</Nav.Link>
                            <Nav.Link href="#home">LOG IN</Nav.Link>
                            <Button >SIGN UP</Button>
                        </Nav>    
                    </span>
                </Navbar.Collapse>
            </Navbar>

            <div className="border">
                <Navbar className='container' expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="mx-auto second_nav">
                            <Nav.Link href="#home">MARKETPLACE</Nav.Link>
                            <Nav.Link href="#link">WHOLESALE CENTER</Nav.Link>
                            <Nav.Link href="#home">SELLER CENTER</Nav.Link>
                            <Nav.Link href="#home">SERVICES</Nav.Link>
                            <Nav.Link href="#home">INTERNSHIPS</Nav.Link>
                            <Nav.Link href="#home">EVENTS</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>

            <section className='home container'>
                <div className="row">
                    <div className="col-lg-6 home_left">
                        <h1>Amazing Experiences from Our Wonderful Customers</h1>
                        <sub>Here is what customers and vendors are saying about us, you can share your stories with us too.</sub>
                    </div>
                    <div className="col-lg-6 home_right">
                        <img src={testiImage} alt="testimonial image"/>
                    </div>
                </div>
            </section>

            <section className="experience">
                <div className='container exp_top'>
                    <div className="row">
                        <div className="col-lg-6  experience_left">
                            <img src={tolu} alt=""/>
                        </div>
                        <div className="col-lg-6 mr-auto experience_right">
                            <h4>Tolu & Joy’s Experience</h4>
                            <sub> CUSTOMER</sub>
                            <p>I had the best experience shopping with vasiti. Usability of the website was great, very good customer service,
                             an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti.
                              Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!</p>
                              <a href="">Share your own story!</a>

                              <div className="share"> </div>
                        </div>
                    </div>
                </div>
            </section>

            <Users/>

            <section className="experience_two">
                <div className='container exp_top_two'>
                    <div className="row">
                        
                        <div className="col-lg-6 mr-auto experience_right_two">
                            <h4>Tolu & Joy’s Experience</h4>
                            <sub> VENDOR</sub>
                            <p>I had the best experience shopping with vasiti. Usability of the website was great, very good customer service,
                             an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti.
                              Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!</p>
                              <a href="">Share your own story!</a>

                              <div className="share"> </div>
                        </div>
                        <div className="col-lg-6  experience_left_two">
                            <img src={woman} alt="woman with a bag"/>
                        </div>
                    </div>
                </div>
            </section>

            <Vendors/>

            <Footer/>
        </div>
    )
}
