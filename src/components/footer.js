import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
        return(
            <div className="footer">
                <div className="menus">

                    {/* column1 */}
                    <div className="col">
                        <p className="list_header">Quick Links</p>
                        <ul className="list quick_links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/book_now">Book Now</Link></li>
                            <li><Link to="/about_us">About Us</Link></li>
                            <li><Link to="/contact_us">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* column2 */}
                    <div className="col">
                        <p className="list_header">Contact us</p>
                        <ul className="list quick_links">
                            <li>Call us at: +91 8826284185</li>
                            <li>Write to us: <a className="email_link" href="mailto:support@9health.in">support@99health.in</a></li>
                        </ul>
                    </div>

                    {/* column3*/}
                    <div className="col">
                        <p className="list_header">Legal</p>
                        <ul className="list quick_links">
                            <li><Link to="/legal/disclaimer">Disclaimer</Link></li>
                            <li><Link to="/legal/privacy_policy">Privacy Policy</Link></li>
                            <li><Link to="/legal/terms_and_conditions">Terms and Conditions</Link></li>
                        </ul>
                    </div>

                    {/* column4*/}
                    <div className="col">
                        <p className="list_header">Connect with us</p>
                        <a href="https://api.whatsapp.com/send?phone=+918376992909" rel="noopener noreferrer" target="_blank">
                            <svg aria-hidden="true" className="footer_icon whatsapp" fill="#333333" focusable="false" data-prefix="fab" data-icon="whatsapp" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
                        </a>
                        <a href="https://twitter.com/9eye_in" rel="noopener noreferrer" target="_blank">
                            <svg aria-hidden="true" className="footer_icon twitter" fill="#333333" viewBox="0 0 512 415.8" focusable="false" data-prefix="twitter" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg">
                                <path d="M459.4,103.6c0.3,4.5,0.3,9.1,0.3,13.6c0,138.7-105.6,298.6-298.6,298.6c-59.5,0-114.7-17.2-161.1-47.1
                                c8.4,1,16.6,1.3,25.3,1.3c49.1,0,94.2-16.6,130.3-44.8c-46.1-1-84.8-31.2-98.1-72.8c6.5,1,13,1.6,19.8,1.6c9.4,0,18.8-1.3,27.6-3.6
                                c-48.1-9.7-84.1-52-84.1-103v-1.3c14,7.8,30.2,12.7,47.4,13.3c-28.3-18.8-46.8-51-46.8-87.4c0-19.5,5.2-37.4,14.3-53
                                C87.4,82.8,165,124.4,252.1,129c-1.6-7.8-2.6-15.9-2.6-24C249.5,47.1,296.3,0,354.4,0c30.2,0,57.5,12.7,76.7,33.1
                                c23.7-4.5,46.5-13.3,66.6-25.3c-7.8,24.4-24.4,44.8-46.1,57.8c21.1-2.3,41.6-8.1,60.4-16.2C497.7,70.2,479.8,88.7,459.4,103.6
                                L459.4,103.6z"/>
                            </svg>

                        </a>
                        <a href="https://www.instagram.com/9eye.in/" rel="noopener noreferrer" target="_blank">
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" className="footer_icon instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                        </a>
                        <a href="https://www.facebook.com/9eye.in" rel="noopener noreferrer" target="_blank">
                        <svg aria-hidden="true" fill="#333333" className="footer_icon facebook" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                        </a>
                        <a href="https://www.linkedin.com/company/9eye" rel="noopener noreferrer" target="_blank">
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" className="footer_icon linkedin" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                        </a>
                        <a href="https://pin.it/yEXA4Rl" rel="noopener noreferrer" target="_blank">
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="pinterest" className="footer_icon pinterest" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"></path></svg>
                        </a>
                    </div>

                </div>
                {/*<div className="app_link_container">
                    <a className="app_link" href="https://drive.google.com/uc?export=download&id=17ywFSTRAdU6phxVqKI-i18EuMBOhtjt9" target="_blank" rel="noopener noreferrer">
                        <svg version="1.1" className="android_logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 671.2 376.4">
                            <path d="M499.3,113.4L555,17c3.1-5.4,1.2-12.3-4.1-15.4c-5.3-3.1-12.3-1.3-15.3,4.1l-56.4,97.7
                                c-43-19.7-91.5-30.6-143.6-30.6c-52.1,0-100.5,11-143.6,30.6L135.6,5.6c-3.1-5.4-10-7.2-15.4-4.1c-5.4,3.1-7.2,10-4.1,15.4
                                l55.7,96.4c-96,52-161,149.2-171.8,263h671.2C660.5,262.6,595.4,165.4,499.3,113.4z M181.5,282.1c-15.6,0-28.1-12.6-28.1-28.1
                                c0-15.6,12.6-28.1,28.1-28.1c15.6,0,28.1,12.6,28.1,28.1C209.7,269.5,197.1,282.1,181.5,282.1z M489.6,282.1
                                c-15.6,0-28.1-12.6-28.1-28.1c0-15.6,12.6-28.1,28.1-28.1c15.6,0,28.1,12.6,28.1,28.1C517.8,269.5,505.2,282.1,489.6,282.1z"/>
                        </svg>
                        <div>Download 9eye App</div>
                    </a>

                </div>*/}
                <div className="copyright">
                <p>
                &copy; {new Date().getFullYear()}</p>
                <p>Nioeye Solutions Pvt. Ltd.</p>
                </div>

            </div>
        );

}

export default Footer;
