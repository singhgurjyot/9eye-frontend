import React, { Component } from "react";
import "./Conformation.css";

export default class Conformation extends Component {
  render() {
    const { hide, style, cancell, cancelstl } = this.props;
    const yes = () => {
      cancell();
    };
    return (
      <>
        <div className="conformation cancell" style={style}>
          <p className="p">Do You Want To Cancell Your Appointment</p>
          <div className="btns">
            <button className="button btn" onClick={hide}>
              No
            </button>
            <button className="button btn" onClick={yes}>
              Yes
            </button>
          </div>
        </div>
        <div className="conformation" style={cancelstl}>
          <h1 className="h1">Appointment Is Cancelled</h1>
        </div>
      </>
    );
  }
}
