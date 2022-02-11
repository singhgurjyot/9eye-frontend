import React, {Component} from 'react';
import Calendar from 'react-calendar'
import './Calendar.css'
import { differenceInCalendarDays } from 'date-fns';
import { getAppointmentDetails, setSelectedDate } from '../actions/appointmentActions'
import { connect } from 'react-redux';

class CalendarWrapper extends Component {

	today = new Date();

	state = {
		maxDate: new Date(this.today.getFullYear(), this.today.getMonth()+1, this.today.getDate()),
		disabledDates: [new Date("2020-08-15"), new Date("2020-07-02")]
	}

	onChange = (currDate) => {
		this.props.setSelectedDate(currDate);
		this.props.getAppointmentDetails(this.props.storeid, currDate);
	}

	isSameDay(a, b) {
  		return differenceInCalendarDays(a, b) === 0;
	}

	isNextMonth(a, b) {
  		return differenceInCalendarDays(a, b) === 30;
	}

	tileDisabled = ({ date, view }) => {
	  if (view === 'month') {
	    return this.state.disabledDates.find(dDate => this.isSameDay(dDate, date));
	  }
	}

	render() {
		return(
		  <div>
    		<Calendar
				showFixedNumberOfWeeks={true}
				minDetail="month"
				minDate={this.today}
				maxDate={this.state.maxDate}
				onChange={this.onChange}
				value={this.state.selectedDate}
				tileDisabled={this.tileDisabled}
			/>
		</div>
		);
	}
}

const mapStateToProps = state => ({
	selectedDate: state.selectedDate
})

export default connect(mapStateToProps, { setSelectedDate, getAppointmentDetails })(CalendarWrapper);
