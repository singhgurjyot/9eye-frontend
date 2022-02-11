import { GET_STORE } from '../actions/types';

const inititalState = []

export default function (state = inititalState, action){
  switch(action.type){
    case GET_STORE:
      return{
        ...state,
        details: action.payload
      };
    default:
      return state;
  }
}
