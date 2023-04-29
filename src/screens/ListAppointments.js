import React from "react";
import "../CSS/ListAppointments.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import axios from "axios";

export default class ListAppointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      upcomingdata: [],
      pastdata: [],
      canceldata: [],
    };
  }

  async componentDidMount() {
    document.getElementById("defaultOpen").click();

    const content = document.getElementById("container");
    const viewportHeight = window.innerHeight;

    if (content.offsetHeight > viewportHeight) {
      content.style.height = "100%";
    } else {
      content.style.height = "100vh";
    }

    await axios
      .get("http://localhost:1337/api/bookings", {
        headers: {
          Authorization: `Bearer ${this.state.token}`,
        },
      })
      .then((res) => {
        var upcome = [];
        var past = [];
        for (var i = 0; i < res.data.data.length; i++) {
          if (new Date(res.data.data[i].attributes.date) < new Date()) {
            upcome.push({
              employee: res.data.data[i].attributes.therapist_name,
              customer: res.data.data[i].attributes.customer_name,
              service: res.data.data[i].attributes.service,
              date: res.data.data[i].attributes.date.slice(0, 10),
              timeslot: res.data.data[i].attributes.timeslot,
            });
          } else {
            past.push({
              employee: res.data.data[i].attributes.therapist_name,
              customer: res.data.data[i].attributes.customer_name,
              service: res.data.data[i].attributes.service,
              date: res.data.data[i].attributes.date,
              timeslot: res.data.data[i].attributes.timeslot,
            });
          }
        }
        this.setState({ upcomingdata: upcome });
        this.setState({ pastdata: past });
      })
      .catch((e) => console.log(e));
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
      <div id="container">
        <div id="top-bar">
          <div id="top-left">
            <p id="cyril">Cyril John Mathew | </p>
            <p id="hpy">Happiness sustains!</p>
          </div>
          <div id="top-right">
            <div>
              <FaPhoneAlt color="#000" size={17} />
              <p>8714772868</p>
            </div>
            <div>
              <MdEmail color="#000" size={17} />
              <p>cyriljon@yahoo.com</p>
            </div>
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
          <p
            style={{
              fontWeight: "700",
              fontSize: "30px",
              animation: "book-app 1s ease-in-out",
            }}
          >
            Appointments
          </p>
          <div className="list-appointments-tab" style={{ zIndex: 1 }}>
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
            <select name="employee-type" id="appointment-service-type">
              <option value="null" selected>
                Employee
              </option>
              <option value="1">Mr Westn Howk</option>
            </select>
            <select name="customer-type" id="appointment-service-type">
              <option value="null" selected>
                Customer
              </option>
              <option value="1">Mark P Daye</option>
            </select>
            <select name="service-type" id="appointment-service-type">
              <option value="null" selected>
                Service
              </option>
              <option value="individual">Individual therapy</option>
              <option value="couple">Couple therapy</option>
            </select>
            <select name="event-type" id="appointment-service-type">
              <option value="null" selected>
                Event
              </option>
              <option value="individual">One-to-One</option>
            </select>
            <DatePicker
              id="appointment-date-picker"
              portalId="root-portal"
              selected={this.state.startDate}
              onChange={(date) => this.getDate(date)}
              minDate={new Date()}
              dateFormat="d/MM/yyyy"
            />
          </div>
          <div id="upcoming-content" className="apptabcontent">
            <div
              style={{
                overflowX: "auto",
                paddingTop: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflowY: "hidden",
              }}
            >
              <table id="appointments-table">
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
                display: "flex",
                justifyContent: "flex-end",
                flexDirection: "row",
                paddingTop: "30px",
                paddingBottom: "30px",
              }}
            >
              <button className="att-btn" id="create">
                Create
              </button>
            </div>
          </div>
          <div id="past-content" className="apptabcontent">
            <div
              style={{
                overflowX: "auto",
                paddingTop: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: "30px",
                overflowY: "hidden",
              }}
            >
              <table id="appointments-table">
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
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: "30px",
                overflowY: "hidden",
              }}
            >
              <table id="appointments-table">
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
