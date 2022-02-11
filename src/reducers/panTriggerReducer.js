import { PAN_TRIGGER } from '../actions/types';

export default function(state = false, action){
  switch(action.type){
    case PAN_TRIGGER:
      return !state
    default:
      return state;
  }
}
