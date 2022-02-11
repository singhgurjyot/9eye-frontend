import { GET_REVIEW, GET_REVIEW_ERROR } from "./types";
import { backupDomain } from "../backup/backupDomain";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

export const getReviews = (storeid) => (dispatch) => {
	axios({
		url: `${backupDomain}/api/getreview/`,
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		data: JSON.stringify({ Storeid: storeid }),
	})
		.then((res) => {
			switch (res.status) {
				case 200: {
					return res.data;
				}
				case 204: {
					return "No Reviews yet.";
				}
				default: {
					return res.data;
				}
			}
		})
		.then((data) => {
			dispatch({
				type: GET_REVIEW,
				payload: data,
			});
		})
		.catch((err) => {
			if (err.response) {
				switch (err.response.status) {
					case 403:
						dispatch({
							type: GET_REVIEW_ERROR,
							payload: "Something went wrong. Please contact us.",
						});
						break;
					case 500:
						dispatch({
							type: GET_REVIEW_ERROR,
							payload: "Internal Server Error. Try again later.",
						});
						break;
					default:
						dispatch({
							type: GET_REVIEW_ERROR,
							payload: "Error. Try again Later.",
						});
				}
			} else if (err.request) {
				console.log(err);
			} else {
				console.log(err);
			}
		});
};
