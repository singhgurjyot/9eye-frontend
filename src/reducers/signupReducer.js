import { SIGNUP_FAILED, SIGNUP, SIGNUP_MESSAGE_RESET } from '../actions/types'

const initialState = {
    isRegistered: false,
    signupMessage: "",
    usernameErrorMessage: false,
    emailErrorMessage: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SIGNUP:
            return {
                ...state,
                isRegistered: true,
                signupMessage: action.payload

            };
        case SIGNUP_FAILED:
            if(action.payload.indexOf("Username") !== -1){
                return {
                    ...state,
                    isRegistered: false,
                    usernameErrorMessage: action.payload
                }
            } else if(action.payload.indexOf("Email")!== -1){
                return {
                    ...state,
                    isRegistered: false,
                    emailErrorMessage: action.payload
                }
            } else {
                return {
                    ...state,
                    isRegistered: false,
                    emailErrorMessage: "Something Went Wrong. Please contact us."
                }
            }
        case SIGNUP_MESSAGE_RESET:
            return {
                ...state,
                isRegistered: false,
                signupMessage: action.payload,
                usernameErrorMessage: action.payload,
                emailErrorMessage: action.payload
            }
        default:
            return state;
    }
};
