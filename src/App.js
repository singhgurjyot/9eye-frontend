import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/footer.js';
import Home from './components/Home.js';
import BookNow from './components/BookNow.js';
import SearchResultsPage from './components/SearchResultsPage';
import StoreAppointment from './components/StoreAppointment.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Chatbox from './components/Chatbox'
import UnderDevPage from './components/UnderDevPage'
import QueryForm from './components/QueryForm.js'
import BlogPage from './components/BlogPage.js'
import ScrollToTop from './components/scrollToTop.js'
import Pagenotfound from './components/Pagenotfound.js'
import Aboutuspage from './components/Aboutuspage.js'
import Forget from './components/Forgetpasswrd'
import Reset from "./components/ResetPassword"
import Legal from './components/Legal';
import UserInfo from './components/UserInfo';
import Myappointments from './components/Myappointments';
import Popup from './components/Popup'
import {connect} from 'react-redux';
import NgoPage from './components/NgoPage';

class App extends Component {
    render(){
        return (
                <Router>
                    <ScrollToTop/>
                    <div className="App">
                    {this.props.logoutPopup && !this.props.logoutSuccess?<Popup type="fail" title="Logout failed" />:null}
                    {this.props.logoutPopup && this.props.logoutSuccess?<Popup type="success" title="You have been successfully Logged Out" />:null}
                        <Navbar />
                        <Chatbox />
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/home" exact component={Home} />
                            <Route path="/book_now" exact component={BookNow} />
                            <Route path="/book_now/results" component={SearchResultsPage} />
                            <Route path="/book_now/storeid=:id" component={StoreAppointment} />
                            <Route path="/login" component={Login} />
                            <Route path="/forgot_password/:uid/:token/" component={Reset} />
                            <Route path="/forgot_password" component={Forget} />
                            <Route path="/signup" component={Signup} />
                            <Route path="/under_development" component={UnderDevPage} />
                            <Route path="/contact_us" component={QueryForm} />
                            <Route path="/blog/blogid=:blogid" component={BlogPage} />
                            <Route path="/about_us" component={Aboutuspage} />
                            <Route path="/blind-relief-delhi" component={NgoPage} />
                            <Route path="/legal/:legaldoc" component={Legal} />
                            <Route path="/user_info" component={UserInfo} />
                            <Route path="/my_appointments" component={Myappointments} />
                            <Route component={Pagenotfound} />
                        </Switch>
                        <Footer />
                    </div>
                </Router>
        );
    }
}

const mapStateToProps = (state) => ({
    logoutPopup: state.login.logoutPopup,
    logoutSuccess: state.login.logoutSuccess
})

export default connect(mapStateToProps, {})(App);
