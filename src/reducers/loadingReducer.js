import { LOADING } from '../actions/types';

const inititalState = {
    isLoading: false,
    isDone: false
}

export default function(state = inititalState, action) {
  switch(action.type){
    case LOADING: {
        return{
            ...state,
            isLoading: !state.isLoading,
        };
    }
    default:
      return state;
  }
}
