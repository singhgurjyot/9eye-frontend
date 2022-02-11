import React, { useState, useEffect } from 'react';
import './Popup.css'
import { addAddress, addAddressErrReset } from '../actions/updateProfileActions.js'
import { connect } from 'react-redux';

function AddAddressPopup(props){

    const [ add1, setAdd1 ] = useState("")
    const [ add2, setAdd2 ] = useState("")
    const [ city, setCity ] = useState("")
    const [ state, setState ] = useState("")
    const [ pincode, setPincode ] = useState(null)

    const [ add1Err, setAdd1Err ] = useState(false)
    const [ cityErr, setCityErr ] = useState(false)
    const [ stateErr, setStateErr ] = useState(false)
    const [ pincodeErr, setPincodeErr ] = useState(false)

    var address = ""

    useEffect(() => {
        address = add1 + ", " + add2 + ", " + city + ", " + state + ", " + pincode
    }, [add1, add2, city, state, pincode])

    const addAddressCall = () => {
        if (add1 === "") {
            setAdd1Err(true)
        } else if (city === "") {
            setCityErr(true)
        } else if (state === "") {
            setStateErr(true)
        } else if (pincode === "") {
            setPincodeErr(true)
        } else {
            props.addAddress(address)
        }
    }

    useEffect(() => {
        props.addAddressErrReset();
    }, [])

    return(
        <div className="popup_page">
            <div className="popup_card">
                <div className="popup_close_button" onClick={props.closePopup}>
                  <svg version="1.1" fill="#ffffff" className="close_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 352">
                    <path d="M242.7,176L342.8,75.9c12.3-12.3,12.3-32.2,0-44.5L320.6,9.2c-12.3-12.3-32.2-12.3-44.5,0L176,109.3L75.9,9.2
                      C63.7-3.1,43.7-3.1,31.5,9.2L9.2,31.4c-12.3,12.3-12.3,32.2,0,44.5L109.3,176L9.2,276.1c-12.3,12.3-12.3,32.2,0,44.5l22.2,22.2
                      c12.3,12.3,32.2,12.3,44.5,0L176,242.7l100.1,100.1c12.3,12.3,32.2,12.3,44.5,0l22.2-22.2c12.3-12.3,12.3-32.2,0-44.5L242.7,176z"/>
                  </svg>
                </div>
                <p className="popup_input_title">Add Address</p>
                <input className={add1Err?"popup_input add1 popup_input_error":"popup_input add1"} type="text" placeholder="Address Line 1" onChange={(e) => { setAdd1Err(false); setAdd1(e.target.value); }}/>
                <input className="popup_input add2" type="text" placeholder="Address Line 2" onChange={(e) => { setAdd2(e.target.value); }}/>
                <input className={cityErr?"popup_input city popup_input_error":"popup_input city"} type="text" placeholder="City" onChange={(e) => { setCityErr(false); setCity(e.target.value); }}/>
                <input className={stateErr?"popup_input state popup_input_error":"popup_input state"} type="text" placeholder="State" onChange={(e) => { setStateErr(false); setState(e.target.value); }}/>
                <input className={pincodeErr?"popup_input pincode popup_input_error":"popup_input pincode"} type="number" placeholder="Pincode" onChange={(e) => { setPincodeErr(false); setPincode(e.target.value); }}/>

                <div className="popup_btn" onClick={() => addAddressCall()}>{props.btn_text}</div>
                {!props.addAddressSuccess?<div className="add-address-error">Add Address Unsuccessful.</div>:null}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    addAddressSuccess: state.updateProfile.addAddressSuccess
})

export default connect(mapStateToProps, { addAddress, addAddressErrReset })(AddAddressPopup);
