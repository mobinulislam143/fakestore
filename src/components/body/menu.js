import React, {Component} from "react";
import MenuItem from "./menuItem"
import Dishdetail from "./dishdetail";
import { Modal, ModalBody, ModalFooter, Button} from "reactstrap";
import {connect} from 'react-redux'

const mapStateProps = state =>{
    return{
        dishes: state.dishes,
        comments: state.comments
    }
}
const mapDispatchToProps = dispatch=> {
    return {
        addComment: (dishId, author, rating, comment) => dispatch ({
            type: 'ADD_COMMENT',
            payload: {
                dishId: dishId,
                author: author,
                rating: rating,
                comment: comment,
            }
        })      
    }
}
class Menu extends Component{
    constructor(props){
        super(props);
        this.state= {
            selectedDish: null,
            modalOpen: false,
        }
    }    
    onDishSelect = dish => {
        this.setState({
            selectedDish: dish,
            modalOpen: !this.state.modalOpen
        })
    }
    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    render(){
        const menu = this.props.dishes.map(item => {
            return(
                <MenuItem 
                    dish={item}
                    key={item.id}
                    DishSelect={this.onDishSelect}    
                />
            )
        })
        let dishDetail = null
        if (this.state.selectedDish != null){
            const comments= this.props.comments.filter(comment=> {
                return comment.dishId === this.state.selectedDish.id;
            })
            dishDetail = <Dishdetail 
                dish={this.state.selectedDish} 
                comments={comments}
                addComment={this.props.addComment}
                 />
        }

        return(
            <div className="container">
                <div className="row  row-cols-3 g-3">
                  {menu}
                  <Modal isOpen={this.state.modalOpen} >
                    <ModalBody>
                        {dishDetail}
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.toggleModal}>Close</Button>
                    </ModalFooter>
                  </Modal>

                </div>
            </div>
        );
    }

}
export default connect(mapStateProps, mapDispatchToProps) (Menu);