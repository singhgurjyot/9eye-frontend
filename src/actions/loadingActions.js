import { LOADING } from './types';

export const triggerLoading = () => dispatch => {
    dispatch({
        type: LOADING
    })
}
