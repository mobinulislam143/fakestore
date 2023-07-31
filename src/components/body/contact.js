import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap'

class Contact extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstname : "",
            lastname : "",
            email:"",
            message:"",
            agree: false,
            mobile: '',
            contactType: 'Tel.'
        }
        this.handleInputChange = this.handleInputChange.bind()
        this.handlesubmit = this.handlesubmit.bind()
    }

    handleInputChange = event =>{
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        const name = event.target.name;
        this.setState ({
            [name]: value
        })
      
    }
    handlesubmit = event =>{
        console.log(this.state)
        event.preventDefault()

    }
    render(){
        return(
            <div className='container'>
                <div className='row row-content'>
                    <div className='col-12'>
                        <h3>Send us your Feedback</h3>
                    </div>
                    <div className='col-12' style={{textAlign: "left"}}>
                        <div className='formGroup col-6' style={{margin: "auto"}}>
                            <Form onSubmit={this.handlesubmit} >
                               <FormGroup row>
                                    <Label md={3} htmlFor='firstname'>First Name:</Label>
                                    <Col>
                                        <Input type="text" name='firstname' placeholder='First Name' value={this.state.firstname} onChange={this.handleInputChange} />
                                    </Col>
                               </FormGroup>
                               <FormGroup row>
                                    <Label md={3} htmlFor='lastname'>Last Name:</Label>
                                    <Col>
                                        <Input type="text" name='lastname' placeholder='Last Name' value={this.state.lastname} onChange={this.handleInputChange} />
                                    </Col>
                               </FormGroup>
                               <FormGroup row>
                                    <Label md={3} htmlFor='mobile'>Mobile:</Label>
                                    <Col>
                                        <Input type="number" name='mobile' placeholder='Mobile' value={this.state.mobile} onChange={this.handleInputChange} />
                                    </Col>
                               </FormGroup>
                               <FormGroup row>
                                    <Label md={3} htmlFor='email'>Email:</Label>
                                    <Col>
                                        <Input type="email" name='email' placeholder='email' value={this.state.email} onChange={this.handleInputChange} />
                                    </Col>
                               </FormGroup>
                               <FormGroup row>
                                    
                                    <Col md={{ size:6, offset:2 }}>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" name='agree'checked={this.state.agree} onChange={this.handleInputChange} /><strong>May we contact you</strong>

                                            </Label>

                                        </FormGroup>
                                    </Col>
                                    <Col md={{ size:3, offset:1 }}>
                                        <Input type='select' name="contactType" value={this.state.contactType} onChange={this.handleInputChange} >
                                            <option>Tel.</option>
                                            <option>Email</option>
                                        </Input>
                                    </Col>
                               </FormGroup>
                               <FormGroup row>
                                    <Label htmlFor='message' md={2}>Your Feedback</Label>
                                    <Col md={10}>
                                        <Input 
                                        type='textarea' 
                                        name='message' 
                                        onChange={this.handleInputChange}
                                        row="6"
                                        value={this.state.message}
                                         >

                                        </Input>
                                    </Col>
                               </FormGroup>
                               <FormGroup>
                                    <Col md={{size:10, offset:2}} >
                                        <Button type='submit' color='primary'>Send Feedback</Button>
                                    </Col>
                               </FormGroup>
                               
                            </Form>
                        </div>
                    </div>
                </div>         
            </div>
        )
    }
}


export default Contact