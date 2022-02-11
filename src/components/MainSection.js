import React, {Component} from "react";
import "./MainSection.css";

export default class MainSection extends Component {
    render() {
        let feild,
            type,
            address;
        const {infor, change, onchange, user, hide} = this.props;
        const {
            styles,
            style,
            value,
            para,
            display,
            addressLine1,
            addressLine2,
            city,
            state,
            pincode
        } = infor;

        var keys = Object.keys(user.address);
        var add = [<div className="info">
            <div className="par">
                <a href="#" className="add" value="address" onClick={this.props.addressclicked}>
                    {'+ Add Address'}
                </a>
            </div>
        </div>
            ];

        var addresses = keys.map((item, index) => {
            return (<div className="info" key={item}>
                <h3>
                    {
                        index === 0
                            ? <div>
                                    Address
                                </div>
                            : null
                    }</h3>
                <div className="par">
                    <p>
                        {user.address[item]}
                    </p>{" "}
                </div>{" "}
                <button onClick={this.props.addressclicked} value="update" index={item} disabled={!display}>
                    <i className="fas fa-pencil-alt" index={item} value="update">
                        {" "}
                    </i>{" "}
                </button>{" "}
            </div>);
        });

        switch (keys.length) {
            case(1, 2):
                address = [
                    ...addresses,
                    add
                ];
                break;
            case 3:
                address = addresses;
                break;
            default:
                address = add;
        }
        switch (para) {
            case "first_name":
                feild = "First Name";
                type = "text";
                break;
            case "last_name":
                feild = "Last Name";
                type = "text";
                break;
            case "phone_no":
                feild = "Phone No";
                type = "number";
                break;
            case "email":
                feild = "Email ID";
                type = "email";
                break;
        }

        const placeholder = `Change ${feild}`;
        return (<div className="mainsection">
            <p className="mainsection-heading">
                Personal Information
            </p>
            <div className="modal" style={style}>
                <h1>
                    Change your {feild}
                </h1>
                <input name="value" type={type} onChange={onchange} value={value} placeholder={placeholder}/>{" "}
                <button className="button btn" onClick={change}>
                    Change
                </button>
            </div>
            {/* Address Bar Modal */}
            <div className="modal addressbar" style={styles}>
                <div class="close_button" onClick={hide}>
                    <svg version="1.1" fill="#ffffff" class="close_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 352">
                        <path d="M242.7,176L342.8,75.9c12.3-12.3,12.3-32.2,0-44.5L320.6,9.2c-12.3-12.3-32.2-12.3-44.5,0L176,109.3L75.9,9.2
                    C63 .7 - 3.1, 43.7 - 3.1, 31.5, 9.2 L9 .2, 31.4 c - 12.3, 12.3 - 12.3, 32.2, 0, 44.5 L109 .3, 176 L9 .2, 276.1 c - 12.3, 12.3 - 12.3, 32.2, 0, 44.5 l22 .2, 22.2 c12 .3, 12.3, 32.2, 12.3, 44.5, 0 L176, 242.7 l100 .1, 100.1 c12 .3, 12.3, 32.2, 12.3, 44.5, 0 l22 .2 - 22.2 c12 .3 - 12.3, 12.3 - 32.2, 0 - 44.5 L242 .7, 176 z ">
                            {" "}
                        </path>{" "}
                    </svg>{" "}
                </div>{" "}
                <h3>
                    Add New Addresses
                </h3>{" "}
                <input name="addressLine1" type="text" onChange={onchange} value={addressLine1} placeholder="Address Line 1"/>
                <input name="addressLine2" type="text" onChange={onchange} value={addressLine2} placeholder="Address Line 2"/>
                <div className="citystate">
                    <input name="city" type="text" onChange={onchange} value={city} placeholder="City"/>
                    <input name="state" type="text" onChange={onchange} value={state} placeholder="State"/>
                </div>{" "}
                <input name="pincode" type="text" onChange={onchange} value={pincode} placeholder="Pincode"/>
                <button style={{
                        fontSize: "20px"
                    }} className="button btn" onClick={change}>
                    Add{" "}
                </button>{" "}
            </div>{" "}
            {/* Address bar MOadal end */}

            {/* SMALL SCREEN BEGINS */}{" "}
            <div className="small-screen">
                <div className="info">
                    <h3>First Name</h3>
                    <p className="par">
                        {user.first_name}
                    </p>
                </div>
                <div className="info">
                    <h3>Last Name</h3>
                    <p className="par">
                        {user.last_name}
                    </p>
                </div>
                <div className="info">
                    <h3>User Name</h3>
                    <p className="par">
                        {user.username}
                    </p>
                </div>
                <div className="info">
                    <h3>Email ID</h3>
                    <p className="par">
                        {user.email}
                    </p>
                    <div>
                        <button onClick={this.props.clicked} value="email" disabled={!display}>
                            <i className="fas fa-pencil-alt" value="email"></i>
                        </button>
                    </div>
                </div>
                {address}
            </div>
            {/* SMALL SCREEN ENDS */}{" "}
        </div>);
    }
}
