import React, { Component } from 'react'
import StoreCard from './StoreCard.js'
import CalendarWrapper from './Calendar.js'
import RatingBox from './RatingBox.js'
import TimeSet from './TimeSet.js'
import PersonCountSelector from './personCountSelector.js'
import Popup from './Popup.js'
import './StoreAppointment.css'
import { differenceInCalendarDays } from 'date-fns';
import { getAppointmentDetails, makeAppointment, resetAppointment } from '../actions/appointmentActions'
import { triggerLoading } from '../actions/loadingActions'
import { getStore } from '../actions/storeActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";

function isSameDay(a, b) {
	return differenceInCalendarDays(a, b) === 0;
}

class StoreAppointment extends Component {

	date_today = new Date();
	monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	state = {
		appointments: {},
		selectedDate: "",
		isLoading: false,
		appointment: false
	}

	timing = [];
	disableDateTime = {};

	fillDates = () => {
		var StApt = this.state.appointments

		for (var date in StApt) {
			var timings = {};
			for (var time in StApt[date]) {
				if (StApt[date][time] >= this.props.store.PersonLimit) {
					timings[`btn${time}`] = true;
				}
				this.disableDateTime[date] = timings;
			}
		}
	}

	fillTiming = () => {
		this.timing = [];
		for (var date in this.disableDateTime) {
			if (isSameDay(new Date(this.date_today.getFullYear(), this.date_today.getMonth(), date), this.state.selectedDate)) {
				this.timing = this.disableDateTime[date]
			} else continue;
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			appointments: nextProps.appointments,
			selectedDate: nextProps.selectedDate,
			isLoading: nextProps.isLoading,
			appointment: nextProps.appointmentBooking
		});
		this.fillDates();
		this.fillTiming();
	}

	componentDidMount() {
		if (!this.props.store) {
			this.props.getStore(this.props.match.params.id)
		}
		this.props.getAppointmentDetails(this.props.store.storeid, this.date_today);
	}

	reset = () => {
		console.log("unmount");
		this.props.resetAppointment();
	}

	submitAppointment = (e) => {
		if (!this.props.selectedDate) {
			document.querySelector('#err').style.display = 'block';
		}
		else if (!this.props.selectedTime) {
			document.querySelector('#err1').style.display = 'block';
			document.querySelector('#err').style.display = 'none';
		}
		else if (!this.props.personCount) {
			document.querySelector('#err2').style.display = 'block';
			document.querySelector('#err').style.display = 'none';
			document.querySelector('#err1').style.display = 'none';

		}
		else {
			e.preventDefault();
			this.props.triggerLoading();
			this.props.makeAppointment(new Date(this.props.selectedDate.getFullYear(), this.props.selectedDate.getMonth(), this.props.selectedDate.getDate(), this.props.selectedTime.slice(0, 2), this.props.selectedTime.slice(2, 4)).toString(),
				this.props.store.storeid,
				this.props.user.username,
				"Appointment Description",
				parseInt(this.props.personCount))
		}
	}

	render() {
		return (
			<div className="store-page">

				{this.state.isLoading ? <Popup type="spinner" title="Please wait.." /> : null}
				{this.state.appointment ?
					<Popup
						type="success"
						subtitle={`Your appointment with ${this.props.store.StoreName} at ${this.props.selectedTime.slice(0, 2)}:${this.props.selectedTime.slice(2, 4)} for ${this.monthNames[this.props.selectedDate.getMonth()]} ${this.props.selectedDate.getDate()}, ${this.props.selectedDate.getFullYear()} is booked successfully.`}
						btn_to="/"
						btn_text="Back to Home"
						trigger={this.reset}
					/>
					: null}

				<div className="store_details">
					<StoreCard store={this.props.store} />
					<RatingBox storeid={this.props.store.storeid} />
				</div>
				<div className="calendar_container">
					<CalendarWrapper storeid={this.props.store.storeid} disabledDates={this.disabledDates} />
					<TimeSet timing={this.timing} />
					<div className="persons_heading">No. of Persons</div>
					<PersonCountSelector persons={5} />
					<div id='err' className='booking_error_message' style={({ display: 'none', color: "red", "marginBottom": "1rem" })} >
						Please Select a Date
                      </div>
					<div id='err1' className='booking_error_message' style={({ display: 'none', color: "red", "marginBottom": "1rem" })} >
						Please Select a Time
                      </div>
					<div id='err2' className='booking_error_message' style={({ display: 'none', color: "red", "marginBottom": "1rem" })} >
						Please Select No. of People
                      </div>
					{this.props.isLoggedIn ?
						<button className="book_appt_btn" onClick={this.submitAppointment}>Book Now</button>
						: <Link to="/login"><div className="book_appt_btn">Book Now</div></Link>
					}
				</div>
			</div>
		)

	}
}


const mapStateToProps = (state, ownProps) => {
	return {
		store: state.stores.details
			? state.stores.details.find((obj) =>
				obj ? obj.storeid === ownProps.match.params.id : null
			)
			: false,
		appointments: state.appointments,
		selectedDate: state.selectedDate,
		isLoggedIn: state.login.isLoggedIn,
		selectedTime: state.selectedTime,
		personCount: state.personCount,
		user: state.login.userDetails,
		isLoading: state.progress.isLoading,
		appointmentBooking: state.appointmentBooking
	};
};

export default connect(mapStateToProps, {
	getAppointmentDetails,
	makeAppointment,
	triggerLoading,
	getStore,
	resetAppointment
})(StoreAppointment);
