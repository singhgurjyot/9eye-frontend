import { LOGIN_VERIFY, RESEND_VER } from '../actions/types'

const initialState = {
    loginVerifyErrorMessage: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case LOGIN_VERIFY:
            return {
                ...state,
                loginVerifyErrorMessage: action.payload
            };
        case RESEND_VER:
            return {
                ...state,
                loginVerifyErrorMessage: action.payload
            };
        default: return {
            ...state
            }
    }
}
