import { SET_SELECTED_DATE } from './types';

export const setSelectedDate = (date) => dispatch => {
      dispatch({
        type: SET_SELECTED_DATE,
        payload: date
      })
}
