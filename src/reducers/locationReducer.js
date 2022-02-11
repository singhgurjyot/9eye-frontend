import { GET_LOCATION, SET_MID_LOCATION } from '../actions/types';

const inititalState = {
}

export default function(state = inititalState, action){
  switch(action.type){
    case GET_LOCATION:
      return{
        ...state,
        location: action.location,
        coords: action.payload
      };
    case SET_MID_LOCATION:
        return{
            ...state,
            coords: action.payload
        }
    default:
      return state;
  }
}
