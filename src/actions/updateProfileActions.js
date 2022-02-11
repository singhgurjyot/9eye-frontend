import {
	ADD_ADDRESS,
	ADD_ADDRESS_FAIL,
	ADD_ADDRESS_ERR_RESET,
	FETCH_ADDRESS,
	ADDRESS_DEL,
} from "./types";
import { backupDomain } from "../backup/backupDomain";
import axios from "axios";
var array = [];

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

export const changeEmail = (email) => {
	fetch(`${backupDomain}/api/emailupdate/`, {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify(email),
	});
};

export const fetchAddress = () => (dispatch) => {
	axios({
		method: "get",
		url: `${backupDomain}/api/addresslist/`,
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
	})
		.then((data) => {
			dispatch({
				type: FETCH_ADDRESS,
				payload: data.data,
			});
		})
		.catch((err) => {
			console.log("Error in fetching address. Contact the developers.");
		});
};

export const addAddressErrReset = () => (dispatch) => {
	dispatch({
		type: ADD_ADDRESS_ERR_RESET,
	});
};

export const addAddress = (Address) => (dispatch) => {
	array = [...array, Address];
	const obj = {
		address: {
			address: Address,
		},
	};

	axios({
		method: "post",
		url: `${backupDomain}/api/address/`,
		data: JSON.stringify(obj),
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
	})
		.then((data) => {
			dispatch({
				type: ADD_ADDRESS,
				payload: data,
			});
		})
		.catch((err) => {
			dispatch({
				type: ADD_ADDRESS_FAIL,
				payload: err,
			});
		});
};

export const updateAddress = (address, index) => (dispatch) => {
	const obj = {
		new_address: address,
		address: {
			address: array[index],
		},
	};
	axios({
		method: "post",
		url: `${backupDomain}/api/addressupdate/`,
		data: JSON.stringify(obj),
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
	});
};

export const deleteAddress = (address) => (dispatch) => {
	const obj = {
		address: {
			address: address,
		},
	};
	axios({
		method: "post",
		url: `${backupDomain}/api/addressdel/`,
		data: JSON.stringify(obj),
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
	})
		.then((data) => {
			dispatch({
				type: ADDRESS_DEL,
				payload: data,
			});
		})
		.catch((err) => {
			console.log("Couldn't delete address. Contact the developers.");
		});
};
