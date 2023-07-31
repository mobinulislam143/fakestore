import React from "react";
import {Card, CardImg, CardBody, CardTitle, Col} from 'reactstrap'

const MenuItem = props =>{
    return(
       <>
        <Col>
        <Card style={{margin: '10px'}}>
            <CardBody >
                <CardImg style={{opacity: "60%", width:"100%", height: '250px'}} 
                src={props.dish.image} />
                    <CardTitle 
                        onClick={()=> props.DishSelect(props.dish)} 
                        style={{cursor: 'pointer'}}>
                        {props.dish.name}</CardTitle>
            </CardBody>
            </Card>
        </Col>           
       </>
        
    )
}
export default MenuItem