import React ,{ useState } from 'react';
import "./PersonCountSelector.css"
import { connect } from 'react-redux';
import { setPersonCount } from '../actions/appointmentActions.js'
import { FaUser } from 'react-icons/fa';

const PersonCountSelector = (props) => {
    const [ personCount, setPersonCount ] = useState(null)
    const [ hover, setHover ] = useState(null)

    return (
        <div className="person_count_selector">
            {[...Array(5)].map((count, i) => {
                const personCountValue = i + 1;

                return (
                    <label>
                        <input type="radio" name="user" value={personCountValue} onClick={() => {setPersonCount(personCountValue); props.setPersonCount(personCountValue)}} />
                        <FaUser className="userIcon" color={personCountValue <= (hover || personCount) ? "#883183" : "#BBBBBB"} size={30} onMouseEnter={() => setHover(personCountValue)} onMouseLeave={() => setHover(null)}/>
                    </label>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, { setPersonCount })(PersonCountSelector);
