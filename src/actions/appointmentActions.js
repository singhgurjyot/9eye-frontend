import {
	GET_APPOINTMENT,
	SET_SELECTED_DATE,
	SET_SELECTED_TIME,
	SET_SELECTED_PERSONS,
	MAKE_APPT,
	MAKE_APPT_ERROR,
	LOADING,
	RESET_APPOINTMENT,
	SET_SELECTED_STARS,
} from "./types";
import { backupDomain } from "../backup/backupDomain";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

export const setSelectedDate = (date) => (dispatch) => {
	dispatch({
		type: SET_SELECTED_DATE,
		payload: date,
	});
};

export const setSelecetedTime = (time) => (dispatch) => {
	dispatch({
		type: SET_SELECTED_TIME,
		payload: time,
	});
};

export const setPersonCount = (persons) => (dispatch) => {
	dispatch({
		type: SET_SELECTED_PERSONS,
		payload: persons,
	});
};

export const setStarCount = (stars) => (dispatch) => {
	dispatch({
		type: SET_SELECTED_STARS,
		payload: stars,
	});
};

export const resetAppointment = () => (dispatch) => {
	dispatch({
		type: RESET_APPOINTMENT,
		payload: false,
	});
};

export const getAppointmentDetails = (storeid, date) => (dispatch) => {
	const redata = {
		Storeid: storeid,
		Appointment_date: date.toString(),
	};

	axios({
		url: `${backupDomain}/api/checkappt/`,
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		data: JSON.stringify(redata),
	})
		.then((res) => {
			switch (res.status) {
				case 200: {
					return res.data;
				}
				case 204: {
					return { message: "No content" };
				}
				default: {
					return res.data;
				}
			}
		})
		.then((data) =>
			dispatch({
				type: GET_APPOINTMENT,
				payload: data,
			}),
		);
};

export const makeAppointment = (
	appt_date,
	storeid,
	username,
	description,
	no_of_persons,
) => (dispatch) => {
	const postData = {
		Appointment_date: appt_date,
		Storeid: storeid,
		Username: username,
		Description: description,
		No_of_Persons: no_of_persons,
	};

	axios({
		url: `${backupDomain}/api/makeappt/`,
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		data: JSON.stringify(postData),
	})
		.then((res) => {
			switch (res.status) {
				case 201:
					dispatch({
						type: MAKE_APPT,
						payload: res.data,
						appointmentStatus: true,
					});
					dispatch({
						type: LOADING,
					});
					break;
				case 204:
					dispatch({
						type: MAKE_APPT,
						payload: res.data,
						appointmentStatus: true,
					});
					dispatch({
						type: LOADING,
					});
					break;
				default:
					dispatch({
						type: MAKE_APPT,
						payload: res.data,
						appointmentStatus: true,
					});
					dispatch({
						type: LOADING,
					});
			}
		})
		.catch((err) => {
			if (err.response) {
				switch (err.response.status) {
					case 403:
						dispatch({
							type: MAKE_APPT_ERROR,
							payload: err.response,
							appointmentStatus: false,
						});
						dispatch({
							type: LOADING,
						});
						break;
					case 500:
						dispatch({
							type: MAKE_APPT_ERROR,
							payload: "Internal Server Error. Try again later.",
							appointmentStatus: false,
						});
						dispatch({
							type: LOADING,
						});
						break;
					default:
						dispatch({
							type: MAKE_APPT_ERROR,
							payload: "Error. Try again Later.",
							appointmentStatus: false,
						});
						dispatch({
							type: LOADING,
						});
				}
			} else if (err.request) {
				console.log(err);
			} else {
				console.log(err);
			}
		});
};
