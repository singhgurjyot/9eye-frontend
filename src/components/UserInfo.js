import React, { Component } from "react";
import SideSection from "./SideSection";
import UserInfoMain from "./UserInfoMain";
import { connect } from "react-redux";
import './UserInfo.css';
import { changeEmail, addAddress, updateAddress } from "../actions/updateProfileActions";

class UserInfo extends Component {
  constructor() {
    super();
    this.state = {
      display: true,
      value: "",
      style: { display: "none" },
      para: "",
      styles: { display: "none" },
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      pincode: "",
      length: 0,
      index: 0,
    };
  }

  render() {
    let x;
    var address = "";
    const { addressLine1, addressLine2, city, state, pincode } = this.state;
    const setAddress = () => {
      var x = [addressLine1, addressLine2, city, state, pincode];
      x.forEach((item) => {
        if (item.length !== 0) {
          address = address + " " + item;
        } else {
        }
      });
      address = address.slice(1, address.length);
      this.setState({
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        pincode: "",
      });
    };

    const onchange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    };

    const clicked = (e) => {
      x = e.target.getAttribute("value");
      this.setState({ display: false });
      this.setState({ style: { display: "block" } });
      this.setState({ para: x });
    };
    const hide = () => {
      this.setState({ styles: { display: "none" } });
    };
    const change = () => {
      this.setState({ value: "" });
      this.setState({ display: true });
      this.setState({ style: { display: "none" } });
      hide();
      const { para, value } = this.state;
      // console.log(para);
      switch (para) {
        // case "phone_no":
        //   const phone = {
        //     phone_numbe: value,
        //   };
        //   changePhoneNumber(phone);
        //   break;
        case "email":
          const email = {
            new_email: value,
          };
          changeEmail(email);
          break;
        case "address":
          setAddress();
          addAddress(address);
          break;
        case "update":
          setAddress();
          updateAddress(address);
          break;
        default:
          return null;
      }
    };

    const addressclicked = (e) => {
      x = e.target.getAttribute("value");
      var y = e.target.getAttribute("index");
      this.setState({ para: x });
      this.setState({ index: y });
      this.setState({ display: true });
      this.setState({ styles: { display: "block" } });
    };
    return (
      <div className="user-container">
        <SideSection user={this.props.user} />
        <UserInfoMain
          user={this.props.user}
          infor={this.state}
          clicked={clicked}
          onchange={onchange}
          change={change}
          addressclicked={addressclicked}
          hide={hide}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.login.userDetails,
});

export default connect(mapStateToProps, {})(UserInfo);
