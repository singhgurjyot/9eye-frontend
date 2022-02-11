import { GET_ALL_STORE_FLAG } from '../actions/types';

const inititalState = {flag: true}

export default function (state = inititalState, action){
  switch(action.type){
    case GET_ALL_STORE_FLAG:
      return{
        ...state,
        flag: !state
      };
    default:
      return state;
  }
}
