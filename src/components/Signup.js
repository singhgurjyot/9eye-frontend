import React, { useState } from 'react';
import './Signup.css'
import { connect } from 'react-redux';
import { triggerLoading } from '../actions/loadingActions';
import { Redirect, Link } from "react-router-dom"
import { authSignup, authLogin,signUpMessageReset } from '../actions/loginActions';
import Popup from './Popup.js';
import { Helmet } from "react-helmet";

const Create_Account = (props) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [errorFirstName, setErrorFirstName] = useState(false)
    const [errorLastName, setErrorLastName] = useState(false)
    const [errorUsername, setErrorUsername] = useState(false)
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    const [errorConfirmPassword, setErrorConfirmPassword] = useState(false)

    const submitSignup = (event) => {
        event.preventDefault();
        if(firstName === ''){
            setErrorFirstName(true)
        } else if(lastName === '') {
            setErrorLastName(true)
        } else if(username === '') {
            setErrorUsername(true)
        }else if(email === '') {
            setErrorEmail(true)
        } else if(password === '') {
            setErrorPassword(true)
        } else if(lastName === '') {
            setErrorConfirmPassword(true)
        } else if(password !== confirmPassword) {
            setErrorConfirmPassword(true)
        } else {
            props.signUpMessageReset();
            props.triggerLoading();
            props.authSignup(firstName, lastName, username, email, password);
        }
    }

        return(
        <div className="signup_page">
            <Helmet>
                <meta charSet="utf-8" />
                <title>99Health | Create your account</title>
                <meta
                    name="description"
                    content="99Health’s mission is to create a one stop destination for all healthcare related needs."
                />
            </Helmet>
            {props.isLoggedIn?<Redirect to="/" />:null}
            <div className="signup_container">

                {props.isLoading?
                    <Popup type="spinner"
                           title="Please wait..." />
                    :null}

                {props.isRegistered?
                    <Popup type="success"
                           title="A verification link has been sent to your email"
                           subtitle="Please click on the link that has been sent to your email to continue with the registration process."
                           btn_to="/"
                           btn_text="Go to Home"
                           />
                    :null}

                <p className='heading_signup'>Create your Account</p>
                <div className="signup_form">
                    <span className="name">
                        <input name="first_name" className='signup_input fn' placeholder="First Name" onChange={(e) => {setErrorFirstName(false); setFirstName(e.target.value)}}/>
                        <input name="last_name" className='signup_input ln' placeholder="Last Name" onChange={(e) => {setErrorLastName(false); setLastName(e.target.value)}}/>
                    </span>
                    {errorFirstName?<div className="signup_error">Enter a First Name</div>:null}
                    {errorLastName?<div className="signup_error">Enter a Last Name</div>:null}
                    <input name="username" className={props.usernameErrorMessage? 'signup_input error':'signup_input username' } placeholder="Username" onChange={(e) => {setErrorUsername(false); setUsername(e.target.value)}}  />
                    {errorUsername?<div className='signup_error'>Enter a username</div>:null}
                    <div id='ic' className='signup_error username' style={props.usernameErrorMessage?({display:"block"}):({display:"none"})} >
                        {props.usernameErrorMessage}
                    </div>
                    <input name="email" className={props.emailErrorMessage? 'signup_input error' : 'signup_input email'} placeholder="Email" onChange={(e) => {setErrorEmail(false); setEmail(e.target.value)}}/>
                    {errorEmail?<div className='signup_error'>Enter a valid email address</div>:null}
                    <div id='ic' className='signup_error email' style={props.emailErrorMessage?({display:"block"}):({display:"none"})} >
                        {props.emailErrorMessage}
                    </div>
                    <input name="password" type="password" className="signup_input password" placeholder="Password" onChange={(e) => {setErrorPassword(false); setPassword(e.target.value)}}/>
                    {errorPassword?<div className='signup_error'>Enter a password</div>:null}
                    <input name="confirm_password" type="password" className="signup_input cpassword" placeholder="Confirm Password" onChange={(e) => {setErrorConfirmPassword(false); setConfirmPassword(e.target.value)}}/>
                    {errorConfirmPassword?<div className='signup_error'>Enter the password again</div>:null}
                    <div id='ic' className='signup_error' style={(password !== confirmPassword)?({display:"block"}):({display:"none"})} >Password doesn't match!</div>
                    <button className="button_signup" onClick={submitSignup} >Sign Up</button>
                    <Link to="/login">
                        <div className="login_link">or Login</div>
                    </Link>
                </div>
            </div>
        </div>
        );
}

const mapStateToProps = state => ({
    isLoggedIn: state.login.isLoggedIn,
    isRegistered: state.signup.isRegistered,
    isLoading: state.progress.isLoading,
    usernameErrorMessage: state.signup.usernameErrorMessage,
    emailErrorMessage: state.signup.emailErrorMessage

})

export default connect(mapStateToProps, { authSignup, authLogin, triggerLoading, signUpMessageReset })(Create_Account);
