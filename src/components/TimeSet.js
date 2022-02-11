import React ,{useState ,useEffect} from 'react';
import "./Timeset.css"
import { connect } from 'react-redux';
import { setSelecetedTime } from '../actions/appointmentActions.js'
import $ from 'jquery';

const TimeSet = (props) => {
    const [ time, setTime ] = useState({})


    const update = (e) => {
        const disableTime = {}
        const times = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

        for (var time in times) {
            disableTime[`time${times[time]}`] = false
        }
        for (time in props.timing) {
            disableTime[time] = props.timing[time]
        }
        setTime(disableTime || {})
    }

    useEffect(update, [props.timing])

    const onClick = (event) => (
        props.setSelecetedTime(event.target.id)
    )
    $(document).on('click', '.timing .row button', function(){
        $(this).addClass('active').siblings().removeClass('active')
    })

    return (
        <div className="TimeSet">
            <div className="timing">
                <div className="row">
                    <button id="1100" disabled={time.btn11} onClick={onClick}>11:00 AM</button>
                    <button id="1200" disabled={time.btn12} onClick={onClick}>12:00 PM</button>
                    <button id="1300" disabled={time.btn13} onClick={onClick}>01:00 PM</button>
                    <button id="1400" disabled={time.btn14} onClick={onClick}>02:00 PM</button>
                    <button id="1500" disabled={time.btn15} onClick={onClick}>03:00 PM</button>
                    <button id="1600" disabled={time.btn16} onClick={onClick}>04:00 PM</button>
                    <button id="1700" disabled={time.btn17} onClick={onClick}>05:00 PM</button>
                    <button id="1800" disabled={time.btn18} onClick={onClick}>06:00 PM</button>
                    <button id="1900" disabled={time.btn19} onClick={onClick}>07:00 PM</button>
                    <button id="2000" disabled={time.btn20} onClick={onClick}>08:00 PM</button>
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, { setSelecetedTime })(TimeSet);
