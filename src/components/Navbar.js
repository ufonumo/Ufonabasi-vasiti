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
import FormTestimonial from './Form'
import { Switch, Route,Link} from "react-router-dom";
import Content from './Content';

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

        </div>
    )
}
