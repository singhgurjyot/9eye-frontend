import { GET_GPS, GET_GPS_ERROR, PAN_TRIGGER } from './types';

export const getGPS = () => dispatch => {
    navigator.geolocation.getCurrentPosition((position) => {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyBz82qkO3WWUUiG8SR9cz6IqQKsOMcwwpM`, {
        }).then(res => res.json())
        .then(data => dispatch({
          type: GET_GPS,
          locationDetails: data.results[0].address_components.find((sub_address) => (sub_address.types.find((local) => local==="sublocality_level_1"))),
          payload: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            dist: data.results[0].address_components.find((sub_address) => (sub_address.types.find((admin) => admin==="administrative_area_level_2"))).long_name,
            pin: data.results[0].address_components.find((sub_address) => (sub_address.types.find((admin) => admin==="postal_code"))).long_name,
            state: data.results[0].address_components.find((sub_address) => (sub_address.types.find((admin) => admin==="administrative_area_level_1"))).long_name
        },
        status: true
      }))


    }, (position_error) => {
          dispatch({
                type: GET_GPS_ERROR,
                locationDetails: null,
                payload: null,
                status: false
            })
    }, {enableHighAccuracy: true,
        timeout: 3000}
    )
}

export const panToTrigger = () => dispatch => {
      dispatch({
        type: PAN_TRIGGER,
      })
}
