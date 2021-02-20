import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'
import FormGroup from 'react-bootstrap/FormGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import FormLabel from 'react-bootstrap/FormLabel'
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';



export default function FormTestimonial() {
  
    return (
        <div>
            <div className="container ">
                <Form className='testimonial  mx-auto  '>
                    <h3>Share your amazing story!</h3>
                    <Form.Label>Upload your Picture</Form.Label>
                    <Form.File 
                        id="custom-file-translate-scss"
                        label="Choose Image"
                        lang="en"
                        custom
                    />
                    <Row className='pt-4'>
                        <Col>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control  />
                        </Col>
                        <Col>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control  />
                        </Col>
                    </Row>
                    <Form.Group className='pt-4 pb-3' controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Share your story</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Row className='pb-3'>
                        <Col>
                            <Form.Label>What did you interact with Vasiti as?</Form.Label>
                        </Col>
                        <Col>
                            <Form.Check inline type="radio" className='custom-radio' label="Customer" />
                            <Form.Check inline type="radio" label="Vendor" />   
                        </Col>
                    </Row>
                    <div className='btn_form'>
                       <Button className='pl-5 pr-5 pt-3 pb-3'>Share your story!</Button>

                    </div>

                </Form>
            </div>
        </div>
    )
}
