import React from "react";
import "../CSS/ListAppointments.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaEdit } from "react-icons/fa";

export default class ListAppointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      upcomingdata: [
        {
          employee: "Cyril Mathew",
          customer: "Mark P daye",
          service: "Individual therapy",
          event: "One to one",
          date: "24.01.22",
          timeslot: "9.00 - 9.30AM",
        },
      ],
      pastdata: [
        {
          employee: "Cyril Mathew",
          customer: "Mark P daye",
          service: "Individual therapy",
          event: "One to one",
          date: "24.01.22",
          timeslot: "9.00 - 9.30AM",
        },
      ],
      canceldata: [
        {
          employee: "Cyril Mathew",
          customer: "Mark P daye",
          service: "Individual therapy",
          event: "One to one",
          date: "24.01.22",
          timeslot: "9.00 - 9.30AM",
        },
      ],
    };
  }

  componentDidMount() {
    document.getElementById("defaultOpen").click();
  }

  getDate = (date) => {
    this.setState({ startDate: date });
  };

  openTab = (event, tabName) => {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("apptabcontent");

    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
  };

  render() {
    return (
      <div>
        <div id="top-bar">
          <div id="top-left">
            <p id="cyril">Cyril John Mathew | </p>
            <p id="hpy">Happiness sustains!</p>
          </div>
          <div id="top-right">
            <p>8714772862</p>
            <p>cyriljon@yahoo.com</p>
          </div>
        </div>
        <div id="page-title-div" style={{ height: "70px" }}>
          <div id="left-page-title">
            <p id="appointment-booking">Event Management</p>
          </div>
          <div id="right-page-title">
            <p id="cjmab">Cyril John Mathew &gt; Event Management</p>
          </div>
        </div>
        <div id="empty-space"></div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <p style={{ fontWeight: "700", fontSize: "30px" }}>Appointments</p>
          <div className="list-appointments-tab">
            <div
              id="defaultOpen"
              className="tablinks"
              onClick={(event) => this.openTab(event, "upcoming-content")}
            >
              Upcoming
            </div>
            <div
              className="tablinks"
              onClick={(event) => this.openTab(event, "past-content")}
            >
              Past
            </div>
            <div
              className="tablinks"
              onClick={(event) => this.openTab(event, "canceled-content")}
            >
              Canceled
            </div>
          </div>
          <div id="filter">
            <select name="service-type" id="service-type">
              <option value="null" selected>
                Service
              </option>
              <option value="individual">Individual therapy</option>
              <option value="couple">Couple therapy</option>
            </select>
            <DatePicker
              selected={this.state.startDate}
              onChange={(date) => this.getDate(date)}
              minDate={new Date()}
              style={{ width: "100px" }}
              dateFormat="d/MM/yyyy"
            />
          </div>
          <div id="upcoming-content" className="apptabcontent">
            <div
              style={{
                overflowX: "auto",
                paddingTop: "50px",
                width: "95%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "20px",
              }}
            >
              <table id="customer-table">
                <tr style={{ fontSize: "20px" }}>
                  <th>Employee</th>
                  <th>Customer</th>
                  <th>Service</th>
                  <th>Event</th>
                  <th>Date</th>
                  <th>Time slot</th>
                </tr>

                {this.state.upcomingdata.map((val, key) => {
                  return (
                    <tr style={{ textAlign: "center" }} key={key}>
                      <td>{val.employee}</td>
                      <td>{val.customer}</td>
                      <td>{val.service}</td>
                      <td>{val.event}</td>
                      <td>{val.date}</td>
                      <td>{val.timeslot}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
            <div
              style={{
                width: "80vw",
                display: "flex",
                justifyContent: "flex-end",
                flexDirection: "row",
                paddingTop: "30px",
                paddingBottom: "30px",
              }}
            >
              <button id="create">Create</button>
            </div>
          </div>
          <div id="past-content" className="apptabcontent">
            <div
              style={{
                overflowX: "auto",
                paddingTop: "50px",
                width: "95%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "20px",
              }}
            >
              <table id="customer-table">
                <tr style={{ fontSize: "20px" }}>
                  <th>Employee</th>
                  <th>Customer</th>
                  <th>Service</th>
                  <th>Event</th>
                  <th>Date</th>
                  <th>Time slot</th>
                </tr>

                {this.state.pastdata.map((val, key) => {
                  return (
                    <tr style={{ textAlign: "center" }} key={key}>
                      <td>{val.employee}</td>
                      <td>{val.customer}</td>
                      <td>{val.service}</td>
                      <td>{val.event}</td>
                      <td>{val.date}</td>
                      <td>{val.timeslot}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
          <div id="canceled-content" className="apptabcontent">
            <div
              style={{
                overflowX: "auto",
                paddingTop: "50px",
                width: "95%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "20px",
              }}
            >
              <table id="customer-table">
                <tr style={{ fontSize: "20px" }}>
                  <th>Employee</th>
                  <th>Customer</th>
                  <th>Service</th>
                  <th>Event</th>
                  <th>Date</th>
                  <th>Time slot</th>
                </tr>

                {this.state.canceldata.map((val, key) => {
                  return (
                    <tr style={{ textAlign: "center" }} key={key}>
                      <td>{val.employee}</td>
                      <td>{val.customer}</td>
                      <td>{val.service}</td>
                      <td>{val.event}</td>
                      <td>{val.date}</td>
                      <td>{val.timeslot}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
