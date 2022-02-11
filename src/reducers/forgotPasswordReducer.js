import { FORGOT_PASSWORD, FORGOT_PASSWORD_ERROR } from '../actions/types';

const inititalState = {
    message: false
}

export default function (state = inititalState, action){
  switch(action.type) {
    case FORGOT_PASSWORD:
      return{
        ...state,
        status: true,
        message: action.payload
      };
    case FORGOT_PASSWORD_ERROR:
        return{
            ...state,
            status: false,
            message: action.payload
        }
    default:
      return state;
  }
}
