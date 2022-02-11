import React from 'react';
import './Popup.css'

function AddPhonePopup(props){
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
                <p className="popup_input_title">{props.input_title}</p>
                <input className="popup_input" type={props.input_type} placeholder={props.input_placeholder} />

                <div className="popup_btn" onClick={() => {}}>{props.btn_text}</div>
            </div>
        </div>
    );
}

export default AddPhonePopup;
