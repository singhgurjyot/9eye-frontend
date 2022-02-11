import { PAN_TRIGGER1 } from '../actions/types';

export default function(state =false, action){
  switch(action.type){
    case PAN_TRIGGER1:
      return !state
    default:
      return state;
  }
}
