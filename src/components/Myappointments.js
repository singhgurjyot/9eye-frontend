import React, { Component } from "react";
import SideSection from "./SideSection";
import Appointment from "./Appointment";
import { connect } from "react-redux";

export class Myappointments extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { UserInfo } = this.state;
    return (
      <div className="container">
        <SideSection user={this.props.user} />
            <Appointment user={this.props.user} />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.login.userDetails,
});

export default connect(mapStateToProps, {})(Myappointments);
