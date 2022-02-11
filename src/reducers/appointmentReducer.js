import { MAKE_APPT, RESET_APPOINTMENT } from '../actions/types';

const initialState = false

export default function(state = initialState, action){
  switch(action.type){
    case MAKE_APPT:
      return action.payload
    case RESET_APPOINTMENT:
        return action.payload
    default:
      return state;
  }
}
