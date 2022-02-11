import { LOGIN, LOGIN_FAILED, LOGOUT, LOGOUT_FAIL, LOGOUT_POPUP, LOGIN_MESSAGE_RESET, FETCH_ADDRESS } from '../actions/types'

const initialState = {
  isLoggedIn: false,
  userDetails: "",
  logoutPopup: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userDetails: action.payload,
        loginMessage: false,
        isLoggedIn: true,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        userDetails: "",
        loginMessage: action.payload,
        isLoggedIn: false,
      };
    case LOGIN_MESSAGE_RESET:
      return {
        ...state,
        loginMessage: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        logoutSuccess: true,
        userDetails: "",
      };
    case LOGOUT_FAIL:
        return{
            ...state,
            isLoggedIn: true,
            logoutSuccess: false
        }
    case LOGOUT_POPUP:
        return{
            ...state,
            logoutPopup: !state.logoutPopup
        }
    case FETCH_ADDRESS:
        return{
            ...state,
            userDetails: {
                ...state.userDetails,
                address: action.payload
            }
        }
    default:
      return state;
  }
}
