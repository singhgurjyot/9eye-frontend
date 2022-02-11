import React, {Component} from "react";
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { authLogout, toggleLogoutPopup } from '../actions/loginActions.js'
import './SideSection.css'

class SideSection extends Component {
    render() {
        const {user} = this.props;
        return (<div className="side-section">
            <div className="side-menu-top">
                <p className="side-menu-title side-menu-name">{`${user.first_name} ${user.last_name}`}</p>
                <p className="side-menu-title side-menu-email">{user.email}</p>
            </div>
            <div className="side-menu">
                <Link to="/user_info" className="side-menu-item">My Account</Link>
                {/*<Link to="/my_appointments" className="side-menu-item">My Appointments</Link>*/}
                <Link to="/" className="side-menu-item" onClick={() => this.props.authLogout()}>Logout</Link>
            </div>
        </div>);
    }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, { authLogout, toggleLogoutPopup })(SideSection);
