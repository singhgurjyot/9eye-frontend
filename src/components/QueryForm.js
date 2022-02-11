import React, { useState, useEffect } from "react";
import "./QueryForm.css";
import { contactUsPost } from "../actions/contactFormActions.js";
import { connect } from "react-redux";
import { triggerLoading } from "../actions/loadingActions.js";
import Popup from "./Popup";
import { withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

const QueryForm = (props) => {
	const [fname, setFname] = useState("");
	const [lname, setLname] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [emptyError, setEmptyError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [success, setSuccess] = useState(false);

	const submitForm = (e) => {
		
		if(fname === '' || lname==='' || email===''|| phone==='' || message ===''){
			e.preventDefault();
			setEmptyError(true);
		}
		else{
			e.preventDefault();
			props.triggerLoading();
			props.contactUsPost(fname, lname, email, phone, message);
		}
	};

	useEffect(() => {
		setIsLoading(props.isLoading);
	}, [props.isLoading]);

	useEffect(() => {
		try {
			setSuccess(props.contact.status);
		} catch (e) {
			console.log(e);
		}
	}, [props.contact]);

	return (
		<div className="query_form_container">
			<Helmet>
				<meta charSet="utf-8" />
				<title>99Health | Contact Us</title>
				<meta
					name="description"
					content="99Health’s mission is to create a one stop destination for all healthcare related needs."
				/>
			</Helmet>
			{isLoading ? <Popup type="spinner" title="Please wait.." /> : null}
			{success ? (
				<Popup type="success" title="We have recieved your query." />
			) : null}
			{success ? setTimeout(() => props.history.push("/"), 3000) : null}

			<p className="form_header">Contact Us</p>
			<form className="query_form">
				<span className="query_form_name">
					<input
						id="fname"
						className="form_input first_name"
						placeholder="First Name"
						onChange={(e) => setFname(e.target.value)}
					/>
					
					<input
						id="lname"
						className="form_input last_name"
						placeholder="Last Name"
						onChange={(e) => setLname(e.target.value)}
					/>
					
				</span>
				<input
					id="email"
					type="email"
					className="form_input email"
					placeholder="Email"
					onChange={(e) => setEmail(e.target.value)}
				/>
				
				<input
					id="phone"
					type="tel"
					className="form_input phone"
					placeholder="Phone No."
					onChange={(e) => setPhone(e.target.value)}
				/>
				
				<textarea
					id = "message"
					className="form_input message"
					placeholder="Type your message here..."
					onChange={(e) => setMessage(e.target.value)}
				/>
				{emptyError?<div className='empty_error'>Please fill all the details</div>:null}
				<button
					type="submit"
					className="query_form_button"
					onClick={submitForm}
				>
					Submit
				</button>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => ({
	isLoading: state.progress.isLoading,
	contact: state.contact,
});

const QueryFormWithHistory = withRouter(QueryForm);
export default connect(mapStateToProps, { contactUsPost, triggerLoading })(
	QueryFormWithHistory,
);
