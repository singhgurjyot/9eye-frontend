import React, { useState,useEffect} from 'react';
import './ResetPassword.css';
import { resetPassword } from '../actions/forgotPasswordActions';
import { triggerLoading } from '../actions/loadingActions';
import { connect } from 'react-redux';
import Popup from './Popup';
import { Redirect, withRouter } from 'react-router-dom';
import {Helmet} from "react-helmet";

const Reset = (props) => {

    const [password, updatePassword] = useState("")
    const [passwordConfirm, updateConfirmPassword] = useState("")
    const [uid, setUid] = useState("")
    const [token, setToken] = useState("")

    const [errorMatchPassword, setErrorMatchPassword] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    const [errorConfirmPassword, setErrorConfirmPassword] = useState(false)

    const [isLoading, setIsLoading] = useState(false)
    const [isReset, setIsReset] = useState(false)

    useEffect(()=>{
        setUid(props.match.params.uid)
        setToken(props.match.params.token)
    }, [props.match.params.uid, props.match.params.token])

    const changePassword = (e) => {
        e.preventDefault();
        if(password === '') {
            setErrorPassword(true)
        } else if (passwordConfirm === '') {
            setErrorConfirmPassword(true)
        } else if (password !== passwordConfirm && password){
            setErrorMatchPassword(true)
        } else {
            setErrorMatchPassword(false)
            props.triggerLoading();
            props.resetPassword(uid, token, password);
        }
    }

    useEffect(() => {
        setIsLoading(props.isLoading)
    }, [props.isLoading])

    useEffect(() => {
        setIsReset(props.isReset)
    }, [props.isReset])

    return (
		<div className="Reset_page">
			<Helmet>
				<meta charSet="utf-8" />
				<title>99Health | Reset Password</title>
				<meta
					name="description"
					content="99Health’s mission is to create a one stop destination for all healthcare related needs."
				/>
			</Helmet>
			{props.isLoggedIn ? <Redirect to="/" /> : null}
			{isLoading ? <Popup type="spinner" title="Please wait..." /> : null}
			{isReset.status ? (
				<Popup
					type="success"
					title="Your password has been changed."
					subtitle="Redirecting to login page."
				/>
			) : null}
			{isReset.status
				? setTimeout(() => props.history.push("/login"), 4000)
				: null}
			<div className="Reset_container">
				<p className="heading_Reset">Reset Password</p>
				<div className="Reset_form">
					<input
						type="password"
						className="Reset_input email"
						placeholder="New Password"
						onChange={(e) => {
							setErrorPassword(false);
							updatePassword(e.target.value);
						}}
					/>
					{errorPassword ? (
						<div className="reset_error">Enter a new Password</div>
					) : null}
					<input
						type="password"
						className="Reset_input email"
						placeholder="Confirm Password"
						onChange={(e) => {
							setErrorConfirmPassword(false);
							updateConfirmPassword(e.target.value);
						}}
					/>
					{errorConfirmPassword ? (
						<div className="reset_error">
							Enter the Password again
						</div>
					) : null}
					<div
						className="reset_error"
						style={
							errorMatchPassword
								? { display: "block" }
								: { display: "none" }
						}
					>
						Password doesn't match!
					</div>
					<button className="button_Reset" onClick={changePassword}>
						Reset Password
					</button>
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.login.isLoggedIn,
    isLoading: state.progress.isLoading,
    isReset: state.pwdReset
})

const ResetWithRouter = withRouter(Reset)
export default connect(mapStateToProps, { resetPassword, triggerLoading })(ResetWithRouter);
