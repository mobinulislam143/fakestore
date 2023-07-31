import React from "react";
import dateFormat from "dateformat";
const now = new Date();

const LoadComment = (props) => {
    return(
        props.comments.map(comment => {
            return(
                
            <div style={{position: "relative"}} key={comment.id}>
                <h5 style={{fontWeight: '700'}}>
                    <span style={{display: 'inline'}}>.</span>
                    {comment.author}
                </h5>
               
                <p>{comment.comment}</p>
                <p>Rating: {comment.rating}</p>
                <p>{dateFormat(now, "isoDateTime")}</p>
            </div>
            )
        })
    )
}
export default LoadComment