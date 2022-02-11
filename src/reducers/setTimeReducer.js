import { SET_SELECTED_TIME } from '../actions/types';

const initialState = false

export default function(state = initialState, action){
  switch(action.type){
    case SET_SELECTED_TIME:
      return action.payload
    default:
      return state;
  }
}
