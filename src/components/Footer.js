import React from 'react';
import subscribe from '../assets/subscribe-banner 1.svg'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl';
import tweet from '../assets/tw.svg'
import face from '../assets/fb.svg'
import insta from '../assets/ig.svg'
import linked from '../assets/in.svg'


export default function Footer() {
    return (
        <div>
            <footer className='footer'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 footer_left">
                            <img src={subscribe} alt=""/>
                        </div>
                        <div className="col-lg-6 footer_right">
                            <h3>Be a member of our community 🎉</h3>
                            <p>We’d make sure you’re always first to know what’s happening on Vasiti—thus, the world.</p>
                            <InputGroup className="mb-2 mt-4">
                                <FormControl id="inlineFormInputGroup" placeholder="enter your email address"/>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>SUBSCRIBE</InputGroup.Text>
                                </InputGroup.Prepend>
                            </InputGroup>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-lg-2 footer_links">
                            <h6>Company</h6>
                            <ul>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Term of Use</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Press & Media</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 footer_links">
                            <h6>Products</h6>
                            <ul>
                                <li><a href="#">Marketplace</a></li>
                                <li><a href="#">Magazine</a></li>
                                <li><a href="#">Seller</a></li>
                                <li><a href="#">Wholesale</a></li>
                                <li><a href="#">Services</a></li>

                            </ul>
                        </div>

                        <div className="col-lg-3 footer_links">
                            <h6>Careers</h6>
                            <ul>
                                <li><a href="#">Become a Campus Rep</a></li>
                                <li><a href="#">Become a Vasiti Influencer</a></li>
                                <li><a href="#">Become a Campus writer</a></li>
                                <li><a href="#">Become an Affiliate</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 footer_links">
                            <h6>Get in touch</h6>
                            <ul>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Partner with us</a></li>
                                <li><a href="#">Advertise with us</a></li>
                                <li><a href="#">Help/FAQs</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 footer_links">
                            <h6>Join our community</h6>
                            <ul>
                                <img className='ml-1' src={face} alt=""/>
                                <img src={insta} alt=""/>
                                <img src={tweet} alt=""/>
                                <img src={linked} alt=""/>
                                <li className='pt-4'><a href="#">Email</a>
                                <a className='ml-3' href="#">Newsletter</a></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
