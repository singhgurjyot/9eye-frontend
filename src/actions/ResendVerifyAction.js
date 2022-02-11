import { RESEND_VER, RESEND_VER_FAIL, LOADING } from "./types";
import { backupDomain } from "../backup/backupDomain";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

export const resendVerification = (email) => (dispatch) => {
	axios({
		url: `${backupDomain}/api/resendver/`,
		method: "post",
		data: JSON.stringify({ email: email }),
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
	})
		.then((res) => {
			switch (res.status) {
				case 200:
					dispatch({
						type: RESEND_VER,
						payload: "Email Verification Resent.",
					});
					dispatch({
						type: LOADING,
					});
					break;
				default:
					dispatch({
						type: RESEND_VER,
						payload: "Email Verification Resent.",
					});
					dispatch({
						type: LOADING,
					});
			}
		})
		.catch((err) => {
			dispatch({
				type: RESEND_VER_FAIL,
			});
			dispatch({
				type: LOADING,
			});
			console.log(err);
		});
};
