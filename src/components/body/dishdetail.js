import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import LoadComment from './loadComment';
import CommentForm from './commentform';

const Dishdetail = (props) => {
    return(
        <div>
        <Card style={{marginTop: '10px'}}>
            <CardImg src={props.dish.image} alt='props.dish.name' />
            <CardBody style={{textAlign: 'left'}}>
                <CardTitle>{props.dish.name}</CardTitle>
                <CardText>{props.dish.desc}</CardText>

                <hr/>
                <h2 style={{textAlign: 'center'}}>Comments</h2>

                <LoadComment comments={props.comments} />
                <hr/>
                <CommentForm dishId={props.dish.id} addComment={props.addComment} />
            </CardBody>
        
        </Card>

        </div>
    )
}
export default Dishdetail;