import React, {Component} from 'react'
import {Form, Button, Input } from "reactstrap"


class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            author: '',
            rating: '',
            comment: '',
        }
        
        this.handleChangeInput = this.handleChangeInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChangeInput = event => {
        this.setState ({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        if (this.state.author === '' || this.state.rating === '' || this.state.comment === '' ){
            alert('Please Put all field!!')
        }
        else{
            this.props.addComment(
                this.props.dishId, 
                this.props.author, 
                this.props.rating,  
                this.props.comment
                )
            this.setState({
                author: '',
                rating: '',
                comment: '',
            });
            event.preventDefault()
        }
    }
    render(){

        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Input type='text' name='author' className='mb-3' value={this.state.author} placeholder='Your name' onChange={this.handleChangeInput} required />
                    <Input 
                        type='select' 
                        name='rating' 
                        value={this.state.rating}
                        onChange={this.handleChangeInput}
                        >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    <br/>
                    <Input 
                        type='text' 
                        name='comment' 
                        value={this.state.comment} 
                        placeholder='Your comment'  
                        className='mb-3' 
                        onChange={this.handleChangeInput} 
                        required>
                        </Input>
                    <Button type='submit' >Submit</Button>
                </Form>
            </div>
        )
    }
}

export default (CommentForm);