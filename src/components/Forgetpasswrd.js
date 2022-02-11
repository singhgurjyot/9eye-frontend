import React, { useState, useEffect } from "react";
import "./forgetpasswrd.css";
import { Link, Redirect, withRouter } from "react-router-dom";
import { triggerLoading } from "../actions/loadingActions";
import { forgotPasswordEmail } from "../actions/forgotPasswordActions";
import { connect } from "react-redux";
import Popup from "./Popup";
import { Helmet } from "react-helmet";

const Forget = (props) => {
	const [email, setEmail] = useState("");
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [forgot, setForgot] = useState(false);

	const emailSend = (e) => {
		e.preventDefault();
		if (email.includes("@")) {
			setError(false);
			props.triggerLoading();
			props.forgotPasswordEmail(email);
		} else {
			setError(true);
		}
	};

	useEffect(() => {
		setIsLoading(props.isLoading);
	}, [props.isLoading]);

	useEffect(() => {
		setForgot(props.forgot);
	}, [props.forgot]);

	return (
		<div className="Forget_page">
			{props.isLoggedIn ? <Redirect to="/" /> : null}
			{isLoading ? <Popup type="spinner" title="Please wait..." /> : null}
			{forgot.status ? (
				<Popup type="success" title={forgot.message} />
			) : null}
			{forgot.status
				? setTimeout(() => props.history.push("/"), 4000)
				: null}

			<div className="Forget_container">
				<Helmet>
					<meta charSet="utf-8" />
					<title>99Health | Reset Password</title>
					<meta
						name="description"
						content="99-Health’s mission is to create a one stop destination for all healthcare related needs."
					/>
				</Helmet>
				<p className="heading_Forget">Forgot Password</p>
				<div className="Forget_form">
					<input
						className="Forget_input email"
						placeholder="Registered Email ID"
						onChange={(e) => {
							setError(false);
							setEmail(e.target.value);
						}}
					/>
					{error ? (
						<div className="forget_error">Enter your Email ID </div>
					) : null}
					<Link to="/login">
						<div className="login_options return_login">
							Back to Login
						</div>
					</Link>
					<button className="button_Forget" onClick={emailSend}>
						Forgot Password
					</button>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	isLoggedIn: state.login.isLoggedIn,
	isLoading: state.progress.isLoading,
	forgot: state.forgot,
});

const ForgetWithRouter = withRouter(Forget);
export default connect(mapStateToProps, {
	triggerLoading,
	forgotPasswordEmail,
})(ForgetWithRouter);
