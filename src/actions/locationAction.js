import { GET_LOCATION, PAN_TRIGGER1, SET_MID_LOCATION } from './types';

export const getLocation = (input) => dispatch => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${input}+Delhi&key=AIzaSyBz82qkO3WWUUiG8SR9cz6IqQKsOMcwwpM`, {
    }).then(res => res.json())
    .then(data => dispatch({
        type: GET_LOCATION,
        location: input,
        payload: {
          lat: data.results[0].geometry.location.lat,
          lng: data.results[0].geometry.location.lng,
          admin_area: data.results[0].address_components.find((obj) => obj ? (obj.types.find((area) => area ? area === 'administrative_area_level_2' :null )) : "Delhi").long_name
        }
    })
    )
}

export const panToTrigger1 = () => dispatch => {
  dispatch({
    type: PAN_TRIGGER1,
  })
}

export const setMidLocation = (stores) => dispatch => {
    var latSum = 0
    var lngSum = 0
    var midLat = 0
    var midLng = 0
    if(Array.isArray(stores.details)) {
        stores.details.map((store) => {
            latSum = latSum + store.Latitude
            lngSum = lngSum + store.Longitude
        })
        midLat = latSum / stores.details.length
        midLng = lngSum / stores.details.length
    }

    dispatch({
        type: SET_MID_LOCATION,
        payload: {
            lat: midLat,
            lng: midLng
        }
    })
}
