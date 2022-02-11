import { GET_STORE, GET_ALL_STORE_FLAG } from "./types";
import { backupDomain } from "../backup/backupDomain";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

export const getNearbyStoreDetails = (dist, state, pin, lat, lng) => (
	dispatch,
) => {
	axios({
		url: `${backupDomain}/api/Storegeo/`,
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		data: JSON.stringify({
			district: dist,
			state: state,
			pincode: pin,
			Latitude: lat,
			Longitude: lng,
		}),
	})
		.then((res) => {
			switch (res.status) {
				case 200: {
					return res.data;
				}
				case 204: {
					return "No Stores Found.";
				}
				default: {
					return res.data;
				}
			}
		})
		.then((data) => {
			dispatch({
				type: GET_STORE,
				payload: data,
			});
		})
		.catch((err) => {
			if (err.response) {
				// client received an error response (5xx, 4xx)
				switch (err.response.status) {
					case 403: {
						dispatch({
							type: GET_STORE,
							payload:
								"Something went wrong. Please login again.",
						});
						break;
					}
					case 500: {
						dispatch({
							type: GET_STORE,
							payload:
								"Oops! Something went wrong. Please try again later.",
						});
						break;
					}
					default: {
						dispatch({
							type: GET_STORE,
							payload:
								"Something went wrong. Please try again later.",
						});
						break;
					}
				}
			} else if (err.request) {
				// client never received a response, or request never left
				console.log(err);
			} else {
				// anything else
				console.log(err);
			}
		});
};

export const getStoreDetails = (qry) => (dispatch) => {
	axios({
		url: `${backupDomain}/api/search/`,
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		data: JSON.stringify({ Search: qry }),
	})
		.then((res) => {
			switch (res.status) {
				case 200: {
					return res.data;
				}
				case 204: {
					return "No Stores Found.";
				}
				default: {
					return res.data;
				}
			}
		})
		.then((data) => {
			dispatch({
				type: GET_STORE,
				payload: data,
			});
		})
		.catch((err) => {
			if (err.response) {
				// client received an error response (5xx, 4xx)
				switch (err.response.status) {
					case 403: {
						dispatch({
							type: GET_STORE,
							payload:
								"Something went wrong. Please login again.",
						});
						break;
					}
					case 500: {
						dispatch({
							type: GET_STORE,
							payload:
								"Oops! Something went wrong. Please try again later.",
						});
						break;
					}
					default: {
						dispatch({
							type: GET_STORE,
							payload:
								"Something went wrong. Please try again later.",
						});
						break;
					}
				}
			} else if (err.request) {
				// client never received a response, or request never left
				console.log(err);
			} else {
				// anything else
				console.log(err);
			}
		});
};

export const getAllStoreDetails = () => (dispatch) => {
	axios({
		url: `${backupDomain}/api/Storelist/`,
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	})
		.then((res) => {
			switch (res.status) {
				case 200: {
					return res.data;
				}
				case 204: {
					return "No Stores Found.";
				}
				default:
					return res.data;
			}
		})
		.then((data) => {
			dispatch({
				type: GET_STORE,
				payload: data,
			});
			dispatch({
				type: GET_ALL_STORE_FLAG,
			});
		});
};

export const getStore = (id) => (dispatch) => {
	axios({
		url: `${backupDomain}/api/storeid/`,
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		data: JSON.stringify({ Storeid: id }),
	})
		.then((res) => {
			switch (res.status) {
				case 200: {
					return res.data;
				}
				case 204: {
					return "No Stores Found.";
				}
				default: {
					return res.data;
				}
			}
		})
		.then((data) => {
			dispatch({
				type: GET_STORE,
				payload: [data],
			});
		})
		.catch((err) => {
			if (err.response) {
				// client received an error response (5xx, 4xx)
				switch (err.response.status) {
					case 403: {
						dispatch({
							type: GET_STORE,
							payload:
								"Something went wrong. Please login again.",
						});
						break;
					}
					case 500: {
						dispatch({
							type: GET_STORE,
							payload:
								"Oops! Something went wrong. Please try again later.",
						});
						break;
					}
					default: {
						dispatch({
							type: GET_STORE,
							payload:
								"Something went wrong. Please try again later.",
						});
						break;
					}
				}
			} else if (err.request) {
				// client never received a response, or request never left
				console.log(err);
			} else {
				// anything else
				console.log(err);
			}
		});
};
