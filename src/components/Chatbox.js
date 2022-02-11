import React, { useState } from 'react';
import './Chatbox.css';
import ChatWindow from './ChatWindow';

function Chatbox() {
    const [chat, setChat] = useState(false);

    const toggleBox = (e) => {
      chat?setChat(false):setChat(true);
    }

    return (
        <div className="chatbox">
        {!chat?<div className="chat_button" onClick={toggleBox}>
          <svg version="1.1" fill="#EFE0EE" className="chatbox_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 448">
            <path d="M256,0C114.6,0,0,93.1,0,208c0,49.6,21.4,95,57,130.7C44.5,389.1,2.7,434,2.2,434.5c-2.2,2.3-2.8,5.7-1.5,8.7S4.8,448,8,448
            c66.3,0,116-31.8,140.6-51.4c32.7,12.3,69,19.4,107.4,19.4c141.4,0,256-93.1,256-208S397.4,0,256,0z M128,240c-17.7,0-32-14.3-32-32
            s14.3-32,32-32s32,14.3,32,32S145.7,240,128,240z M256,240c-17.7,0-32-14.3-32-32s14.3-32,32-32s32,14.3,32,32S273.7,240,256,240z
             M384,240c-17.7,0-32-14.3-32-32s14.3-32,32-32s32,14.3,32,32S401.7,240,384,240z"/>
          </svg>
        </div>:null}


          {chat?(
              <div className="chat_window">
                <div className="chat_header">
                  <p className="chat_heading">Chat with Us</p>
                  <div className="close_button" onClick={toggleBox}>
                    <svg version="1.1" fill="#ffffff" className="close_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 352">
                      <path d="M242.7,176L342.8,75.9c12.3-12.3,12.3-32.2,0-44.5L320.6,9.2c-12.3-12.3-32.2-12.3-44.5,0L176,109.3L75.9,9.2
                      	C63.7-3.1,43.7-3.1,31.5,9.2L9.2,31.4c-12.3,12.3-12.3,32.2,0,44.5L109.3,176L9.2,276.1c-12.3,12.3-12.3,32.2,0,44.5l22.2,22.2
                      	c12.3,12.3,32.2,12.3,44.5,0L176,242.7l100.1,100.1c12.3,12.3,32.2,12.3,44.5,0l22.2-22.2c12.3-12.3,12.3-32.2,0-44.5L242.7,176z"/>
                    </svg>
                  </div>
                </div>
              <ChatWindow />
            </div>
          ):null}
        </div>
    );
}

export default Chatbox;
