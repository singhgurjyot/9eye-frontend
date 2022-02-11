import { CONTACT_FORM, CONTACT_FORM_ERROR } from '../actions/types';

const inititalState = []

export default function (state = inititalState, action){
  switch(action.type){
    case CONTACT_FORM: {
        return{
          ...state,
          status: true,
          details: action.payload
        };
    }
    case CONTACT_FORM_ERROR: {
        return{
          ...state,
          status: false,
          details: action.payload
        };
    }
    default:
      return state;
  }
}
