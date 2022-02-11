import { GET_GPS, GET_GPS_ERROR } from '../actions/types';

const inititalState = {
}

export default function(state = inititalState, action){
  switch(action.type){
    case GET_GPS:
      return{
        ...state,
        coords: action.payload,
        location: action.locationDetails,
        status: action.status
      };
    case GET_GPS_ERROR:
        return{
            ...state,
            status: action.status
        }
    default:
      return state;
  }
}
