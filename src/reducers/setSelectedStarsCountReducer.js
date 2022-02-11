import { SET_SELECTED_STARS } from '../actions/types';

const initialState = false

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_SELECTED_STARS:
            return action.payload
        default:
            return state;
    }
}
