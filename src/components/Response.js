import React from 'react';
import hurray from '../assets/hurray.svg'
import Button from 'react-bootstrap/Button';


export default function Response() {
    return (
        <div>
            <div className="container">
                <div className="response mx-auto">
                    <img className='pt-4' src={hurray} alt="hurry image"/>
                    <h3 className='pt-4'>Thank you for sharing your story!</h3>
                    <p className='pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Button className='close_btn'>Close</Button>
                </div>
            </div>
        </div>
    )
}
