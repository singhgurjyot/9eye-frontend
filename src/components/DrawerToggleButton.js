import React from 'react';
import './DrawerToggleButton.css';

const drawerToggleButton = props => (
    <div className="toggle">
        <button className="toggle-button" onClick={props.click}>
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">
              <g id="Group_774" data-name="Group 774" transform="translate(0.199 0.221)">
                <circle id="Ellipse_59" data-name="Ellipse 59" cx="19" cy="19" r="19" transform="translate(-0.199 -0.221)" fill="#efe0ee"/>
                <g id="Group_773" data-name="Group 773" transform="translate(11.57 15.164)">
                  <line id="Line_31" data-name="Line 31" x2="15" transform="translate(0.231 -0.384)" fill="none" stroke="#707070" strokeLinecap="round" strokeWidth="1"/>
                  <line id="Line_32" data-name="Line 32" x2="9" transform="translate(6.231 7.616)" fill="none" stroke="#707070" strokeLinecap="round" strokeWidth="1"/>
                </g>
              </g>
            </svg>
        </button>
    </div>
);

export default drawerToggleButton;
