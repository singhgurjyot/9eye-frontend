import React, { Component } from "react";
import StarCountSelector from "./ReviewModal";
import "./Appointment.css";
import { backupDomain } from "../backup/backupDomain";
import axios from "axios";
import { months } from "../Months";
import Conformation from "./Conformation";

export default class MainSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Appointments: [
        {
          Appointment_date:
            "Wed Jul 29 2022 11:00:00 GMT+0530 (India Standard Time)",
          Appointment_id: 676484378,
          Description: "Appointment Description",
          No_of_Persons: 3,
          Storeid: "5f07957949516722a46c85bd",
          StoreName: "Gambhir Opticals",
          StoreAddress: "B-1/17, Sector 17, Rohini, Delhi, 110085",
          Phone: 9891646593,
          Email: "vikasmehta4696@gmail.com",
          Store_Type: "Economic",
          OverallRating: 4.0,
        },
        {
          Appointment_date:
            "Fri Jul 31 2020 10:00:00 GMT+0530 (India Standard Time)",
          Appointment_id: 894981378,
          Description: "Appointment Description",
          No_of_Persons: 3,
          Storeid: "5f07957949516722a46c85bd",
          StoreName: "Gambhir Opticals",
          StoreAddress: "B-1/17, Sector 17, Rohini, Delhi, 110085",
          Phone: 9891646593,
          Email: "vikasmehta4696@gmail.com",
          Store_Type: "Economic",
          OverallRating: 4.0,
        },
        {
          Appointment_date:
            "Thu Jul 30 2020 11:00:00 GMT+0530 (India Standard Time)",
          Appointment_id: 26932536,
          Description: "Appointment Description",
          No_of_Persons: 4,
          Storeid: "5f07957949516722a46c85bd",
          StoreName: "Gambhir Opticals",
          StoreAddress: "B-1/17, Sector 17, Rohini, Delhi, 110085",
          Phone: 9891646593,
          Email: "vikasmehta4696@gmail.com",
          Store_Type: "Economic",
          OverallRating: 4.0,
        },
        {
          Appointment_date:
            "Wed Jul 29 2020 12:00:00 GMT+0530 (India Standard Time)",
          Appointment_id: 325089846,
          Description: "Appointment Description",
          No_of_Persons: 4,
          Storeid: "5f07957949516722a46c85a4",
          StoreName: "Sikka Opticals",
          StoreAddress:
            "S.No.11, Moti Bagh South Market, South Moti Bagh, New Delhi, Delhi 110021",
          Phone: 24100634,
          Email: "abc@ab.bc",
          Store_Type: "Economic",
          OverallRating: 4.0,
        },
        {
          Appointment_date:
            "Fri Aug 21 2020 11:00:00 GMT+0530 (India Standard Time)",
          Appointment_id: 2913181882,
          Description: "Appointment Description",
          No_of_Persons: 3,
          Storeid: "5f07957949516722a46c85ba",
          StoreName: "Kabir Eye Clinic",
          StoreAddress: "C-3/18, Manav Chowk, Sector 15, Rohini, Delhi, 110089",
          Phone: 9811387132,
          Email: "nder1969@gmail.com",
          Store_Type: "Economic",
          OverallRating: 4.0,
        },
      ],
      title: "",
      content: "",
      style: { display: "none" },
      index: 0,
      conformation: { display: "none" },
      cancell: { display: "none" },
    };
  }
  componentDidMount() {
    axios({
      method: "GET",
      url: `${backupDomain}/api/getmyappt/`,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return this.setState(() => {
        return { Appointments: res.data };
      });
    });
  }
  render() {
    const cancelled = (e) => {
      const { value } = e.target;
      this.setState({ conformation: { display: "block" }, index: value });
    };
    const clicked = (e) => {
      const { value } = e.target;
      this.setState({ style: { display: "block" }, index: value });
    };
    const hide = () => {
      this.setState({
        style: { display: "none" },
        title: "",
        content: "",
        conformation: { display: "none" },
        cancell: { display: "none" },
      });
    };
    const onchange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    };
    const cancell = (e) => {
      const { Storeid, Appointment_id } = this.state.Appointments[
        this.state.index
      ];
      const store = {
        Storeid: Storeid,
        Appointment_id: Appointment_id,
      };
      axios({
        method: "POST",
        url: `${backupDomain}/api/cancelappt/`,
        data: JSON.stringify(store),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
        this.setState({ cancell: { display: "block" } });
      }).then(()=>{
        setTimeout(()=>{
          hide()
        },1500)
      });
    };
    if (this.state.Appointments.length !== 0) {
      var Appointment = this.state.Appointments.reverse().map((item, index) => {
        let date;
        var x = new Date();
        var ad = item.Appointment_date;
        var res = ad.split(" ");
        var y = `${res[3]}-${months[res[1]][0]}-${res[2]}`;
        if (new Date(y) < x) {
          date = true;
        } else {
          date = false;
        }
        return (
          <div className="appointment" key={index}>
            <h1>{`${res[2]} ${months[res[1]][0]} ${res[3]}`}</h1>
            <div className="appointment-body">
              <p className="bold">Appointment At</p>
              <p>{item.StoreName}</p>
              <p className="bold">Appointment Time</p>
              <p>{res[4].slice(0, 5)}</p>
              <p className="bold">Number of People</p>
              <p>{item.No_of_Persons}</p>
              <p className="bold">Description</p>
              <p>{item.Description}</p>
              <button
                className="button"
                onClick={clicked}
                value={index}
                disabled={!date}
              >
                <i className="far fa-edit"></i> Post a Review
              </button>
              <button
                className="button"
                onClick={cancelled}
                disabled={date}
                value={index}
              >
                Cancle
              </button>
            </div>
          </div>
        );
      });
    }

    return (
      <div className="Appointments">
        {this.state.Appointments.length === 0 ? null : (
          <StarCountSelector
            hide={hide}
            state={this.state}
            onchange={onchange}
          />
        )}
        <h1 className="heading">Appointments</h1>
        {this.state.Appointments.length === 0 ? (
          <h1>No Appointments</h1>
        ) : (
          <div class="appointment-container">{Appointment}</div>
        )}
        <Conformation
          hide={hide}
          style={this.state.conformation}
          cancell={cancell}
          cancelstl={this.state.cancell}
        />
      </div>
    );
  }
}
