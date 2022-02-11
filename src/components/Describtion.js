import React from 'react';
import './Describtion.css';
import about_us_header from './assets/about_us_header.svg';

function Describtion() {
    return (
        <div className="about_us_header">
            <p className="about_us">OUR STORY</p>
            <div className="about_us_row">
                <p className="describtion">What started off as a casual idea quickly grew into a full-time commitment because of immense need for a one-stop solution for all the eye care needs. With 99-Health we are trying to reduce the scattering and misinformation in the minds of consumer, and spread awareness among the people.</p>
                <img className="img_desc" src={about_us_header} alt="header_image"/>
            </div>
        </div>
    );
}

  export default Describtion;
