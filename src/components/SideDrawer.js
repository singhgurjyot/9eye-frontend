import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/99HEALTHLOGO.png';
import { connect } from 'react-redux';
import { authLogout } from '../actions/loginActions';
import './SideDrawer.css'

const SideDrawer = props => (
    <div id="side_drawer">

        <div className="side_logo_container">
            <Link to="/">
                <img alt="logo" className="side_logo" src={logo} />
            </Link>
        </div>

        <ul className="side_ul">
            <li className="side_li">
                <Link to="/">
                    <div className="side_navBtn" onClick={props.closeClick}>HOME</div>
                </Link>
            </li>

            <li className="side_li">
                <Link to="/book_now">
                    <div className="side_navBtn" onClick={props.closeClick}>BOOK NOW</div>
                </Link>
            </li>

            <li className="side_li">
                <Link to="/blind-relief-delhi">
                    <div className="side_navBtn" onClick={props.closeClick}>NGO</div>
                </Link>
            </li>

            <li className="side_li">
                <Link to="/about_us">
                    <div className="side_navBtn" onClick={props.closeClick}>ABOUT US</div>
                </Link>
            </li>

            <li className="side_li">
                <Link to="/contact_us">
                    <div className="side_navBtn" onClick={props.closeClick}>CONTACT US</div>
                </Link>
            </li>

            <li>
                <Link to="/login">
                    <div className='side_navBtn' onClick={props.closeClick} style={!props.isLoggedIn ?({display:"block"}):({display:"none"})}>LOGIN</div>
                </Link>
            </li>

            <li>
                <Link to="/signup">
                    <div className='side_navBtn' onClick={props.closeClick} style={!props.isLoggedIn ?({display:"block"}):({display:"none"})}>SIGN UP</div>
                </Link>
            </li>

            <li>
                <Link to="/user_info">
                    <div className='side_navBtn' onClick={props.closeClick} style={props.isLoggedIn ?({display:"block"}):({display:"none"})}>MY ACCOUNT</div>
                </Link>
            </li>

            {/* when user login display logOut Button */}
            <li>
                <div className="side_navBtn" style={props.isLoggedIn ?({display:"block"}):({display:"none"})} onClick={props.authLogout}>LOGOUT</div>
            </li>
        </ul>
        <div className="side_cross" onClick={props.closeClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 31.414 31.414">
              <g id="Group_775" data-name="Group 775" transform="translate(-487.793 -642.793)">
                <line className="side_cross_line" id="Line_33" data-name="Line 33" x2="30" y2="30" transform="translate(488.5 643.5)" fill="none" stroke="#707070" stroke-linecap="round" stroke-width="3"/>
                <line className="side_cross_line" id="Line_34" data-name="Line 34" x1="30" y2="30" transform="translate(488.5 643.5)" fill="none" stroke="#707070" stroke-linecap="round" stroke-width="3"/>
              </g>
            </svg>
        </div>
    </div>
);



const mapStateToProps = state => ({
    isLoggedIn: state.login.isLoggedIn
})

export default connect(mapStateToProps, { authLogout })(SideDrawer);
