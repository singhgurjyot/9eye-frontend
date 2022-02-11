import { ADD_ADDRESS, ADD_ADDRESS_FAIL, ADD_ADDRESS_ERR_RESET } from '../actions/types';

const initialState = {
    addAddressSuccess: true
}

export default function(state = initialState, action){
    switch(action.type){
        case ADD_ADDRESS:
            return {
                addAddressSuccess: true
            }
        case ADD_ADDRESS_FAIL:
            return{
                addAddressSuccess: false
            }
        case ADD_ADDRESS_ERR_RESET:
            return{
                addAddressSuccess: true
            }
        default:
            return state;
    }
}
