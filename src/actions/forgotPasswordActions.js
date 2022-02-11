import {
	FORGOT_PASSWORD,
	FORGOT_PASSWORD_ERROR,
	LOADING,
	RESET_PASSWORD,
	RESET_PASSWORD_ERROR,
} from "./types";
import { backupDomain } from "../backup/backupDomain";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

export const forgotPasswordEmail = (email) => (dispatch) => {
	axios({
		url: `${backupDomain}/api/passwordchange/`,
		method: "post",
		data: JSON.stringify({ email: email }),
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
	})
		.then((data) => {
			switch (data.status) {
				case 200:
					dispatch({
						type: FORGOT_PASSWORD,
						payload: data.data.message,
					});
					dispatch({
						type: LOADING,
					});
					break;
				default:
					dispatch({
						type: FORGOT_PASSWORD,
						payload: data.data.message,
					});
					dispatch({
						type: LOADING,
					});
			}
		})
		.catch((err) => {
			dispatch({
				type: FORGOT_PASSWORD_ERROR,
				payload: err.data,
			});
		});
};

export const resetPassword = (uid, token, password) => (dispatch) => {
	axios({
		url: `${backupDomain}/api/forgot_password/${uid}/${token}/`,
		method: "post",
		data: JSON.stringify({ uid: uid, token: token, password: password }),
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
	})
		.then((data) => {
			switch (data.status) {
				case 200:
					dispatch({
						type: RESET_PASSWORD,
						payload: data.data.message,
					});
					dispatch({
						type: LOADING,
					});
					break;
				default:
					dispatch({
						type: RESET_PASSWORD,
						payload: data.data.message,
					});
					dispatch({
						type: LOADING,
					});
			}
		})
		.catch((err) => {
			dispatch({
				type: RESET_PASSWORD_ERROR,
				payload: err.data,
			});
		});
};
