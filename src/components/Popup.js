import React from 'react';
import './Popup.css'
import { Link } from "react-router-dom";

function Popup(props){
    return(
        <div className="popup_page">
            <div className="popup_card">
                {props.type === "spinner"?
                    <div className="spinner"></div>
                    :null}
                {props.type === "success"?
                    <svg fill="#771572" className="success" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="#771572" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>
                    :null}
                {props.type === "fail"?
                    <svg version="1.1" height="3rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="#FF5D00" d="M569.5,440c18.5,32-4.7,72-41.6,72H48.1c-36.9,0-60-40.1-41.6-72L246.4,24c18.5-32,64.7-32,83.2,0L569.5,440
                        L569.5,440z M288,354c-25.4,0-46,20.6-46,46s20.6,46,46,46s46-20.6,46-46S313.4,354,288,354z M244.3,188.7l7.4,136
                        c0.3,6.4,5.6,11.3,12,11.3h48.5c6.4,0,11.6-5,12-11.3l7.4-136c0.4-6.9-5.1-12.7-12-12.7h-63.4C249.4,176,244,181.8,244.3,188.7
                        L244.3,188.7z"/>
                    </svg>
                    :null}
                {props.type === "input"?<div className="popup_close_button" onClick={props.closePopup}>
                  <svg version="1.1" fill="#ffffff" className="close_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 352">
                    <path d="M242.7,176L342.8,75.9c12.3-12.3,12.3-32.2,0-44.5L320.6,9.2c-12.3-12.3-32.2-12.3-44.5,0L176,109.3L75.9,9.2
                      C63.7-3.1,43.7-3.1,31.5,9.2L9.2,31.4c-12.3,12.3-12.3,32.2,0,44.5L109.3,176L9.2,276.1c-12.3,12.3-12.3,32.2,0,44.5l22.2,22.2
                      c12.3,12.3,32.2,12.3,44.5,0L176,242.7l100.1,100.1c12.3,12.3,32.2,12.3,44.5,0l22.2-22.2c12.3-12.3,12.3-32.2,0-44.5L242.7,176z"/>
                  </svg>
                </div>:null}
                {props.title?<p className="popup_title">{props.title}</p>:null}
                {props.input_title?<p className="popup_input_title">{props.input_title}</p>:null}
                {props.subtitle?<p className="popup_subtitle">{props.subtitle}</p>:null}
                {props.type === "input"?
                    <input className="popup_input" type={props.input_type} placeholder={props.input_placeholder} />:null
                }
                {props.btn_text?<Link to={props.btn_to}><div className="popup_btn" onClick={props.trigger}>{props.btn_text}</div></Link>:null}
            </div>
        </div>
    );
}

export default Popup;
