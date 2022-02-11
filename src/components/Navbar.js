import React, {Component} from 'react';
import logo from './assets/99HEALTHLOGO.png';
import './Navbar.css'
import DrawerToggleButton from './DrawerToggleButton';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { authLogout, toggleLogoutPopup } from '../actions/loginActions';
import SideDrawer from './SideDrawer.js';

class Navbar extends Component {
    state = {
        SideDrawerOpen: false,
        accountDropdown: false
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {SideDrawerOpen: !prevState.SideDrawerOpen};
        });
    };

    crossPageClickHandler = () => {
        this.setState({SideDrawerOpen: false});
    };

    toggleAccount = () => {
        this.setState({accountDropdown: !this.state.accountDropdown})
    }

    componentDidUpdate(prevProps) {
        if (this.props.logoutPopup){
            setTimeout(() => this.props.toggleLogoutPopup(), 2500)
        }
    }

    render(){
        let sideDrawer;

        if (this.state.SideDrawerOpen){
            sideDrawer = <SideDrawer closeClick={this.crossPageClickHandler}/>;
        };

        return(

            <div id="nav_bar">
                {sideDrawer}
                 <NavLink to="/" >
                    <div><img alt="logo" className="logo" src={logo} /></div>
                </NavLink>
                <ul className="ul">

                    <li className="li">
                        <NavLink exact to="/"  activeClassName='navbar_active' >
                            <div className="navBtn" >
                                HOME
                                </div>
                        </NavLink>
                    </li>

                    <li className="li">
                        <NavLink to="/book_now" activeClassName='navbar_active'>
                            <div className="navBtn">BOOK NOW</div>
                        </NavLink>
                    </li>

                    <li className="li">
                        <NavLink to="/blind-relief-delhi" activeClassName='navbar_active'>
                            <div className="navBtn">NGO</div>
                        </NavLink>
                    </li>

                    <li className="li">
                        <NavLink to="/about_us" activeClassName='navbar_active'>
                            <div className="navBtn">ABOUT US</div>
                        </NavLink>
                    </li>
                    {/*<li className="li">
                        <NavLink to="/ngo" activeClassName='navbar_active'>
                            <div className="navBtn">NGO</div>
                        </NavLink>
                    </li>*/}

                    <li className="li">
                        <NavLink to="/contact_us" activeClassName='navbar_active'>
                            <div className="navBtn">CONTACT US</div>
                        </NavLink>
                    </li>

                  <li className='li'>
                    <NavLink to="/login" activeClassName='navbar_active'>
                      <div className='navBtn' style={!this.props.isLoggedIn ?({display:"block"}):({display:"none"})}>LOGIN</div>
                    </NavLink>
                  </li>

                    {/* when user login display account menu */}
                  <li>
                      <div className="navBtn" onClick={this.toggleAccount} style={this.props.isLoggedIn ?({display:"block"}):({display:"none"})} >
                            <div>{'Hi, '+ this.props.userDetails.first_name}</div>
                            {this.state.accountDropdown?<div className='dropdown'>
                                <Link to="/">
                                    <div onClick={this.props.authLogout} className='menu-item'>Log Out</div>
                                </Link>
                                <Link to="/user_info">
                                    <div className='menu-item'>Profile</div>
                                </Link>
                                {/*<Link to="/my_appointments">
                                    <div className='menu-item'>Appointments</div>
                                </Link>*/}
                            </div>:null}
                    </div>
                </li>
	            </ul>
                <div className="toggle_button">
                  <DrawerToggleButton click={this.drawerToggleClickHandler} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
  isLoggedIn: state.login.isLoggedIn,
  userDetails: state.login.userDetails,
  logoutPopup: state.login.logoutPopup
})

export default connect(mapStateToProps, { authLogout, toggleLogoutPopup })(Navbar);
