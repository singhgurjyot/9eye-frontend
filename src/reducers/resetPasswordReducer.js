import { RESET_PASSWORD, RESET_PASSWORD_ERROR } from '../actions/types';

const inititalState = {
    message: false
}

export default function (state = inititalState, action){
  switch(action.type) {
    case RESET_PASSWORD:
      return{
        ...state,
        status: true,
        message: action.payload
      };
    case RESET_PASSWORD_ERROR:
        return{
            ...state,
            status: false,
            message: action.payload
        }
    default:
      return state;
  }
}
