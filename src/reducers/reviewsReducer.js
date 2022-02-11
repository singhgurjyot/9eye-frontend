import { GET_REVIEW, GET_REVIEW_ERROR } from '../actions/types';

const initialState = []

export default function(state = initialState, action){
    switch(action.type){
        case GET_REVIEW:
            return action.payload
        case GET_REVIEW_ERROR:
            return action.payload
        default:
            return state;
    }
}
