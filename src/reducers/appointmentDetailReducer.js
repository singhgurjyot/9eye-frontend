import { GET_APPOINTMENT } from '../actions/types';

const initialState = {}

export default function(state = initialState, action){
  switch(action.type){
    case GET_APPOINTMENT:
      return action.payload
    default:
      return state;
  }
}
