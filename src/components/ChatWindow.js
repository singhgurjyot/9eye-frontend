import React, { useState, useEffect } from 'react';
import './ChatWindow.css';
import { connect } from 'react-redux';
import { contactUsPost } from '../actions/contactFormActions.js';
import { triggerLoading } from '../actions/loadingActions.js';
import Popup from './Popup';

function ChatWindow(props) {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const submitChat = (e) => {
        e.preventDefault();
        props.triggerLoading();
        props.contactUsPost(fname, lname, email, phone, message);
    }

    useEffect(() => {
        setIsLoading(props.isLoading)
    }, [props.isLoading])

    return (
      <div className="chat_form_container">
        {isLoading?<Popup type="spinner" title="Please wait.."/>:null}
        <form className="chat_form">
          <input className="chat_form_input f_name" placeholder="First Name" onChange={(e) => setFname(e.target.value)}/>
          <input className="chat_form_input l_name" placeholder="Last Name" onChange={(e) => setLname(e.target.value)}/>
          <input type="email" className="chat_form_input email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input type="tel" className="chat_form_input phone" placeholder="Phone No." onChange={(e) => setPhone(e.target.value)} />
          <textarea className="chat_form_input chat_message" placeholder="Type your message here..." onChange={(e) => setMessage(e.target.value)} />
          <button className="chat_send_button" onClick={submitChat}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="chat_send_icon" fill="#ffffff" viewBox="0 0 511.9 512.1">
              <path d="M476,3.2L12.5,270.6c-18.1,10.4-15.8,35.6,2.2,43.2L121,358.4l287.3-253.2c5.5-4.9,13.3,2.6,8.6,8.3L176,407v80.5
              	c0,23.6,28.5,32.9,42.5,15.8L282,426l124.6,52.2c14.2,6,30.4-2.9,33-18.2l72-432C515,7.8,493.3-6.8,476,3.2z"/>
            </svg>
            &nbsp;&nbsp;&nbsp;Send Message
          </button>
        </form>
      </div>
    );
}

const mapStateToProps = (state) => ({
    isLoading: state.progress.isLoading
})

export default connect(mapStateToProps, { contactUsPost, triggerLoading })(ChatWindow);
