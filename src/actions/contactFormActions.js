import { CONTACT_FORM, CONTACT_FORM_ERROR, LOADING } from "./types";
import { backupDomain } from "../backup/backupDomain";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

export const contactUsPost = (fname, lname, email, phone, message) => (
	dispatch,
) => {
	const postData = {
		FirstName: fname,
		LastName: lname,
		Email: email,
		Phone: phone,
		message: message,
	};
	axios({
		url: `${backupDomain}/api/contactusform/`,
		method: "POST",
		data: JSON.stringify(postData),
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
	})
		.then((data) =>
			dispatch({
				type: CONTACT_FORM,
				payload: data.data,
			}),
		)
		.then(() =>
			dispatch({
				type: LOADING,
			}),
		)
		.catch((err) => {
			if (err.response) {
				switch (err.response.status) {
					case 400: {
						dispatch({
							type: CONTACT_FORM_ERROR,
							payload: err.response.data,
						});
						dispatch({
							type: LOADING,
						});
						break;
					}
					case 403: {
						dispatch({
							type: CONTACT_FORM_ERROR,
							payload: "Somthing went wrong.",
						});
						dispatch({
							type: LOADING,
						});
						break;
					}
					case 500: {
						dispatch({
							type: CONTACT_FORM_ERROR,
							payload:
								"Oops! Something went wrong. Please try again later.",
						});
						dispatch({
							type: LOADING,
						});
						break;
					}
					default: {
						dispatch({
							type: CONTACT_FORM_ERROR,
							payload:
								"Something went wrong. Please try again later.",
						});
						dispatch({
							type: LOADING,
						});
					}
				}
			} else if (err.request) {
				console.log(err);
			} else {
				console.log(err);
			}
		});
};
