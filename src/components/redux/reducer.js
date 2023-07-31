import DISHES from "../data/dishes";
import COMMENTS from "../data/comment";
import { combineReducers } from "redux";


const dishReducer = (dishState=DISHES, action) => {
    return dishState;
}
const commentReducer = (commentState=COMMENTS, action) => {
    if(action.type === "ADD_COMMENT"){
        let comment = action.payload
        comment.id = commentState.length
        comment.date = new Date().toDateString();
        console.log(action)
        return commentState.concat(comment)
        
       }
    return commentState;
}

export const Reducer = combineReducers ({
    dishes: dishReducer,
    comments: commentReducer
})
