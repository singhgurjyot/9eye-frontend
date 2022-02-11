import { SET_SELECTED_DATE } from '../actions/types';

const initialState = false

export default function(state = initialState, action){
  switch(action.type){
    case SET_SELECTED_DATE:
      return action.payload
    default:
      return state;
  }
}
