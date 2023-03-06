import React from "react";
import { Component } from "react";
import "../CSS/Booking.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import axios from "axios";
import Cookies from "js-cookie";

export default class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: "",
      dob: null,
      token: Cookies.get("jwtToken") || "",
      usertype: Cookies.get("usertype") || "",
      avtimeslot: ["9.00AM - 10.00AM", "12.00PM - 12.30PM"],
      selectedServiceOption: "",
      selectedTherapistOption: "Akash",
      services: [],
      customerExists: false,
      ts: null,
    };
  }

  async componentDidMount() {
    // this.setState({ token: "" });
    // Cookies.remove("jwtToken");
    // Cookies.remove("email");
    // Cookies.remove("usertype");
    //document.getElementById("defaultOpen").click();

    const params = new URLSearchParams(window.location.search);
    this.setState({ selectedTherapistOption: params.get("therapist_name") });

    this.tabClicked("service", "service-content");

    var name = document.getElementById("booking-input-name");
    var phone = document.getElementById("booking-input-phone");
    var email = document.getElementById("booking-input-email");
    var notes = document.getElementById("booking-notes");
    var dob = this.state.dob;
    var gender = document.getElementById("booking-gender-type");

    await axios
      .get("http://localhost:1337/api/customers", {
        headers: {
          Authorization: `Bearer ${this.state.token}`,
        },
      })
      .then((res) => {
        for (var i = 0; i < res.data.data.length; i++) {
          if (res.data.data[i].attributes.email === Cookies.get("email")) {
            console.log("Hello");
            name.value = res.data.data[i].attributes.name;
            phone.value = res.data.data[i].attributes.phone;
            email.value = res.data.data[i].attributes.email;
            gender.selected = res.data.data[i].attributes.gender;
            this.setState({
              total: res.data.data[i].attributes.totalappointment,
            });
            this.setState({ customerExists: true });
          }
        }
      })
      .catch((err) => console.log(err));

    const boxes = document.querySelectorAll(".tablinks");

    for (let i = 0; i < boxes.length; i++) {
      boxes[i].style.animationDelay = `${i * 0.5}s`;
    }

    const content = document.getElementById("container");
    const viewportHeight = window.innerHeight;

    if (content.offsetHeight > viewportHeight) {
      content.style.height = "100%";
    } else {
      content.style.height = "100vh";
    }

    await axios
      .get("http://localhost:1337/api/services", {
        headers: {
          Authorization: `Bearer ${this.state.token}`,
        },
      })
      .then((res) => {
        var resArray = ["Select"];

        for (var i = 0; i < res.data.data.length; i++) {
          resArray.push(res.data.data[i].attributes.title);
        }

        this.setState({ services: resArray });
      })
      .catch((err) => console.log(err));

    await axios
      .get("http://localhost:1337/api/events", {
        headers: {
          Authorization: `Bearer ${this.state.token}`,
        },
      })
      .then((res) => {
        var resArray = [];

        for (var i = 0; i < res.data.data.length; i++) {
          if (
            res.data.data[i].attributes.therapist ===
            this.state.selectedTherapistOption
          ) {
            if (
              res.data.data[i].attributes.service ===
              this.state.selectedServiceOption
            ) {
              for (
                var k = 0;
                k < res.data.data[i].attributes.timeslot.length;
                k++
              ) {
                var fetchedDate = new Date(
                  res.data.data[i].attributes.timeslot[k].date
                ).getDate();
                var selectDate = new Date().getDate();
                if (fetchedDate === selectDate) {
                  var tsString = `${res.data.data[i].attributes.timeslot[k].start} - ${res.data.data[i].attributes.timeslot[k].end}`;
                  resArray.push(tsString);
                }
              }
            }
          }
        }
        this.setState({ avtimeslot: resArray });
      })
      .catch((err) => console.log(err));
  }

  handleServiceChange = (event) => {
    this.setState({
      selectedServiceOption: event.target.value,
    });
  };

  makePayment = async () => {
    var name = document.getElementById("booking-input-name");
    var phone = document.getElementById("booking-input-phone");
    var email = document.getElementById("booking-input-email");
    var notes = document.getElementById("booking-notes");
    var dob = this.state.dob;
    var gender = document.getElementById("booking-gender-type");
    var service = this.state.selectedServiceOption;
    var category = document.getElementById("booking-category-type");
    var living = document.getElementById("booking-service-type");
    var mode = document.getElementById("booking-mode-type");
    var date = this.state.startDate;

    // var ts = document.getElementsByClassName("booking-slot");
    // var selectedTs = [];
    // for (var i = 0; i < ts.length; i++) {
    //   selectedTs.push(ts[i].value);
    // }

    await fetch(`http://localhost:1337/api/bookings/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.state.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          customer_name: name.value,
          therapist_name: this.state.selectedTherapistOption,
          mode: mode.value,
          category: category.value,
          // period: period.value,
          // duration: duration.value,
          // fee: fee.value,
          date: date,
          service: service,
          timeslot: this.state.ts,
        },
      }),
    })
      .then((r) => {
        console.log(r);
        alert("Your Appointment has booked");
        fetch(`http://localhost:1337/api/customers/`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${this.state.token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              totalappointment: this.state.total + 1,
              lastappointment: new Date(),
            },
          }),
        })
          .then((r) => {
            console.log(r);
            alert("Your Appointment has booked");

            this.closeModal();
          })
          .catch((e) => alert(e.error.message));
        this.closeModal();
      })
      .catch((e) => alert(e.error.message));

    this.tabClicked("done", "done-content");
  };

  handleDateChange = async (date) => {
    this.setState({ startDate: date });
    await axios
      .get("http://localhost:1337/api/events", {
        headers: {
          Authorization: `Bearer ${this.state.token}`,
        },
      })
      .then((res) => {
        var resArray = [];

        for (var i = 0; i < res.data.data.length; i++) {
          if (
            res.data.data[i].attributes.therapist ===
            this.state.selectedTherapistOption
          ) {
            if (
              res.data.data[i].attributes.service ===
              this.state.selectedServiceOption
            ) {
              for (
                var k = 0;
                k < res.data.data[i].attributes.timeslot.length;
                k++
              ) {
                var fetchedDate = new Date(
                  res.data.data[i].attributes.timeslot[k].date
                ).getDate();
                var selectDate = new Date(date).getDate();
                if (fetchedDate === selectDate) {
                  var tsString = `${res.data.data[i].attributes.timeslot[k].start} - ${res.data.data[i].attributes.timeslot[k].end}`;
                  resArray.push(tsString);
                }
              }
            }
          }
        }
        this.setState({ avtimeslot: resArray });
      })
      .catch((err) => console.log(err));
  };

  getDob = (date) => {
    this.setState({ dob: date });
  };

  tabClicked = (event, tabName) => {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    document.getElementById(event).className += " active";
    //event.currentTarget.className += " active";
  };

  render() {
    if (this.state.usertype === "customer") {
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
              <p id="appointment-booking">Appointment Booking</p>
            </div>
            <div id="right-page-title">
              <p id="cjmab">Cyril John Mathew &gt; Appointment Booking</p>
            </div>
          </div>
          <div id="empty-space"></div>
          <div id="container-display">
            <div id="booking-container">
              <div id="left-booking" className="booking-tab">
                <div id="service" className="tablinks">
                  <p>Service</p>
                </div>
                <div id="time" className="tablinks">
                  <p>Time</p>
                </div>
                <div id="details" className="tablinks">
                  <p>Details</p>
                </div>
                <div id="payment" className="tablinks">
                  <p>Payment</p>
                </div>
                <div id="done" className="tablinks">
                  <p>Done</p>
                </div>
              </div>
              <div id="right-booking">
                <div
                  id="service-content"
                  className="tabcontent"
                  style={{ width: "100%" }}
                >
                  <p style={{ fontWeight: "600" }}>Please select service</p>
                  <p style={{ fontWeight: "600" }}>Service</p>
                  <select
                    name="service-type"
                    id="booking-service-type"
                    className="dropdown"
                    value={this.state.selectedServiceOption}
                    onChange={(event) => this.handleServiceChange(event)}
                  >
                    {this.state.services.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {/* <select name="service-type" id="service-type">
                  <option value="null" selected>
                    Select service type
                  </option>
                  <option value="individual">Individual therapy</option>
                  <option value="couple">Couple therapy</option>
                </select> */}
                  <p style={{ fontWeight: "600" }}>Category</p>
                  <select name="category-type" id="booking-category-type">
                    <option value="null" selected>
                      Select category
                    </option>
                    <option value="pre">Pre-booking</option>
                    <option value="instant">Instant booking</option>
                  </select>
                  {/* <p style={{ fontWeight: "600" }}>Therapist</p> */}
                  {/* <select name="therapist" id="service-type">
                  <option value="null" selected>
                    Select therapist
                  </option>
                  <option value="mark">Mark P. Daye</option>
                  <option value="lenora">Lenora C. Hickson</option>
                  <option value="sofia">Sofia Loftus</option>
                </select> */}
                  <p style={{ fontWeight: "600" }}>Are you living in India?</p>
                  <select name="living" id="booking-living-type">
                    <option value="null" selected>
                      Select
                    </option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  <p style={{ fontWeight: "600" }}>Mode</p>
                  <select name="mode-type" id="booking-mode-type">
                    <option value="null" selected>
                      Select mode
                    </option>
                    <option value="online">Online</option>
                    <option value="offline">Offline</option>
                  </select>
                  <div
                    className="att-btn"
                    onClick={(event) => this.tabClicked("time", "time-content")}
                    id="next-btn"
                  >
                    Next
                  </div>
                </div>
                <div
                  id="time-content"
                  className="tabcontent"
                  style={{ width: "100%" }}
                >
                  <p style={{ fontWeight: "600" }}>Date and Time </p>
                  <p style={{ fontWeight: "600" }}>Pick the Date</p>
                  <DatePicker
                    id="booking-date-picker"
                    selected={this.state.startDate}
                    placeholderText="Select date"
                    onChange={(date) => this.handleDateChange(date)}
                    minDate={new Date()}
                    dateFormat="d/MM/yyyy"
                  />
                  <p style={{ fontWeight: "600" }}>Choose a time slot:</p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div id="time-slot-div">
                      {this.state.avtimeslot.map((value, key) => (
                        <div class="slot">
                          <label>
                            <input
                              name="booking"
                              className="booking-slot"
                              type="radio"
                              value={value}
                              onClick={(event) =>
                                this.setState({ ts: event.target.value })
                              }
                            />
                            <span>{value}</span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className="att-btn"
                    onClick={(event) =>
                      this.tabClicked("details", "details-content")
                    }
                    id="next-btn"
                  >
                    Next
                  </div>
                </div>
                <div
                  id="details-content"
                  className="tabcontent"
                  style={{ width: "100%" }}
                >
                  <p style={{ fontWeight: "600" }}>Details:</p>
                  <div id="details-container">
                    <div>
                      <p style={{ fontWeight: "600" }}>Full name:</p>
                      <input
                        id="booking-input-name"
                        placeholder="Enter full name"
                        type="text"
                        className="padding-details-input"
                      />
                    </div>

                    <div>
                      <p style={{ fontWeight: "600" }}>Phone</p>
                      <input
                        id="booking-input-phone"
                        className="padding-details-input"
                        type="text"
                        placeholder="Enter phone number"
                      />
                    </div>

                    <div>
                      <p style={{ fontWeight: "600" }}>Email</p>
                      <input
                        type="text"
                        id="booking-input-email"
                        className="padding-details-input"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <p style={{ fontWeight: "600" }}>Notes</p>
                      <textarea
                        id="booking-notes"
                        name="paragraph_text"
                        cols="30"
                        rows="7"
                        className="padding-details-input"
                        style={{ resize: "none" }}
                      ></textarea>
                    </div>

                    <div>
                      <p style={{ fontWeight: "600" }}>Date of Birth:</p>
                      <DatePicker
                        selected={this.state.dob}
                        onChange={(date) => this.getDob(date)}
                        dateFormat="d/MM/yyyy"
                        className="padding-details-input"
                      />
                    </div>
                    <div>
                      <p style={{ fontWeight: "600" }}>Gender</p>
                      <select
                        id="booking-gender-type"
                        name="gender"
                        style={{ padding: "5px" }}
                      >
                        <option value="s" selected>
                          Select
                        </option>
                        <option value="m">Male</option>
                        <option value="f">Female</option>
                        <option value="t">Other</option>
                      </select>
                    </div>
                  </div>

                  <div
                    className="att-btn"
                    onClick={(event) =>
                      this.tabClicked("payment", "payment-content")
                    }
                    id="next-btn"
                  >
                    Next
                  </div>
                </div>
                <div
                  id="payment-content"
                  className="tabcontent"
                  style={{ width: "100%" }}
                >
                  <p style={{ fontWeight: "600" }}>Payments</p>
                  <p style={{ fontWeight: "600" }}>Summary</p>
                  <div id="summary-container">
                    <div id="summary">
                      <div id="left-summary">
                        <p style={{ fontWeight: "600" }}>Service:</p>
                        <p style={{ fontWeight: "600" }}>Session:</p>
                        <p style={{ fontWeight: "600" }}>Mode:</p>
                      </div>
                      <div>
                        <p>Individual therapy</p>
                        <p>Prebooking</p>
                        <p>Online</p>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "row",
                      }}
                    >
                      <div>
                        <p style={{ fontWeight: "600" }}>Total Amount:</p>
                      </div>
                      <div>
                        <p style={{ fontWeight: "600", paddingRight: "30px" }}>
                          $20
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="att-btn"
                    onClick={(event) => this.makePayment(event)}
                    id="next-btn"
                    style={{ width: "150px" }}
                  >
                    Make Payment
                  </div>
                </div>
                <div
                  id="done-content"
                  className="tabcontent"
                  style={{ width: "100%" }}
                >
                  <p className="done-font-weight">Congratulations</p>
                  <div id="done-container">
                    <div>
                      <p className="done-font-weight">Date:</p>
                      <p>Jan 19,2023</p>
                      <p className="done-font-weight">Employee:</p>
                      <p>Mark P. Daye</p>

                      <p className="done-font-weight">Mode:</p>
                      <p>Online</p>

                      <hr />
                      <p className="done-font-weight">Your Name:</p>
                      <p>Mr. Westn howk</p>
                    </div>
                    <div>
                      <p className="done-font-weight">Local Time:</p>

                      <p>10.00 AM</p>
                      <p className="done-font-weight">Service:</p>
                      <p>Individual therapy</p>
                      <p className="done-font-weight">Payment:</p>
                      <p>$20</p>
                      <hr />
                      <p className="done-font-weight">Email Address:</p>
                      <p>westnhowk@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>You have not access to this page</h1>;
    }
  }
}
