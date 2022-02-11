import React, { useState, useEffect } from 'react';
import './Login.css';
import { Redirect, Link } from "react-router-dom"
import { connect } from 'react-redux';
import { authLogin, loginMessageReset } from '../actions/loginActions';
import { triggerLoading } from '../actions/loadingActions';
import Popup from './Popup.js';
import { resendVerification } from '../actions/ResendVerifyAction'
import {Helmet} from "react-helmet";

const Login = (props) => {

    const [email, setEmail] = useState("")
    const [password, updatePassword] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [loginError, setLoginError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleEmailChange = (e) => {
        props.loginMessageReset()
        setEmailError(false);
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        props.loginMessageReset()
        setPasswordError(false);
        updatePassword(e.target.value);
    }

    const authenticateLogin = (e) => {
        props.loginMessageReset()
       if(email === '' && password === '') {
           setEmailError(true);
           setPasswordError(true);
       }
       else if (email === '' ) {
           setEmailError(true);
       }
      else if(password === '') {
          setPasswordError(true);
      }
      else{
            e.preventDefault();
            props.triggerLoading();
            props.authLogin(email, password);
        }
    }

    const resendVerify = (e) => {
        props.triggerLoading();
        props.resendVerification(email);
    }

    useEffect(() => {
        props.loginMessageReset()
    }, [props])

    useEffect(() => {
        setIsLoading(props.isLoading)
    }, [props.isLoading]);

    useEffect(() => {
        setLoginError(props.loginMessage)
    }, [props.loginMessage])

    return(
        <div className="login_page">
            <Helmet>
                <meta charSet="utf-8" />
                <title>99Health | Login to your account</title>
                <meta
                    name="description"
                    content="Just login and continue where you left. Also access your appointment history, eyewear purchases, and your favourite optical stores in just a few steps
                    "
                />
            </Helmet>
            <div className='alert' style={props.loginVerifyErrorMessage?({display:'flex'}):({display:'none'})}>
                <div className='alert_text'>
                    <span><p>{props.loginVerifyErrorMessage}</p>
                    <div className='alert_a' onClick={resendVerify}>Resend mail</div></span>
                </div>
            </div>

            <div className="login_container">
                {isLoading?<Popup type="spinner" title="Please wait..."/>:null}
                {/* Redirect when user login */}
                {props.isLoggedIn?(<Redirect to="/"/>):null}

                <p className='heading_login'>Login</p>
                <div className="login_form">
                    <input id='email' className='login_input email' placeholder="Email" onChange={handleEmailChange}/>
                    {emailError?<div className='login_error email'>Please enter your registered email</div>:null}

                    <input type="password" id="password" className="login_input password" placeholder="Password" onChange={handlePasswordChange}/>
                    {passwordError?<div className='login_error password'>Please enter your password</div>:null}

                    {loginError?<div className="login_error">{props.loginMessage}</div>:null}

                    <div className="login_options_container">
                        <a className="login_options forgot" href="/forgot_password">Forgot Password?</a>
                        <Link to="/signup">
                        <div className="login_options create_account">Create Account</div>
                        </Link>
                    </div>
                    <button className="button_Login" onClick={authenticateLogin}>Login</button>
                </div>
            </div>
        </div>

    )
}

const mapStateToProps = state => ({
    isLoggedIn: state.login.isLoggedIn,
    isLoading: state.progress.isLoading,
    loginMessage: state.login.loginMessage,
    loginVerifyErrorMessage: state.loginVerify.loginVerifyErrorMessage
})

export default connect(mapStateToProps, { resendVerification, authLogin, triggerLoading, loginMessageReset })(Login);
