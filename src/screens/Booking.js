import React from "react";
import { Component } from "react";
import "../CSS/Booking.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      dob: null,
    };
  }

  getDate = (date) => {
    this.setState({ startDate: date });
  };

  getDob = (date) => {
    this.setState({ dob: date });
  };

  tabClicked = (event, tabName) => {
    var i, tabcontent, tablinks;
    document.getElementById("service").style.backgroundColor = "#7F9BC9";
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
        <div id="page-title-div">
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
            <div id="left-booking" className="tab">
              <div
                id="service"
                className="tablinks"
                style={{ backgroundColor: "white" }}
              >
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
                style={{ display: "block" }}
              >
                <p style={{ fontWeight: "600" }}>Please select service</p>
                <p style={{ fontWeight: "600" }}>Service</p>
                <select name="service-type" id="service-type">
                  <option value="null" selected>
                    Select service type
                  </option>
                  <option value="individual">Individual therapy</option>
                  <option value="couple">Couple therapy</option>
                </select>
                <p style={{ fontWeight: "600" }}>Category</p>
                <select name="category-type" id="service-type">
                  <option value="null" selected>
                    Select category
                  </option>
                  <option value="pre">Pre-booking</option>
                  <option value="instant">Instant booking</option>
                </select>
                <p style={{ fontWeight: "600" }}>Therapist</p>
                <select name="therapist" id="service-type">
                  <option value="null" selected>
                    Select therapist
                  </option>
                  <option value="mark">Mark P. Daye</option>
                  <option value="lenora">Lenora C. Hickson</option>
                  <option value="sofia">Sofia Loftus</option>
                </select>
                <p style={{ fontWeight: "600" }}>Are you living in India?</p>
                <select name="living" id="service-type">
                  <option value="null" selected>
                    Select
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <p style={{ fontWeight: "600" }}>Mode</p>
                <select name="mode-type" id="service-type">
                  <option value="null" selected>
                    Select mode
                  </option>
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                </select>
                <div
                  onClick={(event) => this.tabClicked("time", "time-content")}
                  id="next-btn"
                >
                  Next
                </div>
              </div>
              <div id="time-content" className="tabcontent">
                <p style={{ fontWeight: "600" }}>Date and Time </p>
                <p style={{ fontWeight: "600" }}>Pick the Date</p>
                <DatePicker
                  selected={this.state.startDate}
                  onChange={(date) => this.getDate(date)}
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
                    <div className="ts">8.00 - 12.00</div>
                    <div className="ts">8.00 - 12.00</div>
                    <div className="ts">8.00 - 12.00</div>
                    <div className="ts">8.00 - 12.00</div>
                    <div className="ts"></div>
                    <div className="ts"></div>
                    <div className="ts"></div>
                    <div className="ts"></div>
                    <div className="ts"></div>
                    <div className="ts"></div>
                  </div>
                </div>
                <div
                  onClick={(event) =>
                    this.tabClicked("details", "details-content")
                  }
                  id="next-btn"
                >
                  Next
                </div>
              </div>
              <div id="details-content" className="tabcontent">
                <p style={{ fontWeight: "600" }}>Details:</p>
                <p style={{ fontWeight: "600" }}>Full name:</p>
                <input
                  id="input-name"
                  placeholder="Enter full name"
                  type="text"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <p style={{ fontWeight: "600" }}>Phone</p>
                    <input
                      style={{ padding: "5px" }}
                      type="text"
                      placeholder="Enter phone number"
                    />
                  </div>
                  <div style={{ paddingLeft: "30px" }}>
                    <p style={{ fontWeight: "600" }}>Date of Birth:</p>
                    <DatePicker
                      selected={this.state.dob}
                      onChange={(date) => this.getDob(date)}
                      dateFormat="d/MM/yyyy"
                    />
                  </div>
                </div>
                <p style={{ fontWeight: "600" }}>Email</p>
                <input
                  type="text"
                  id="input-name"
                  placeholder="Enter your email"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <p style={{ fontWeight: "600" }}>Notes</p>
                    <textarea
                      name="paragraph_text"
                      cols="30"
                      rows="7"
                    ></textarea>
                  </div>
                  <div style={{ paddingLeft: "30px" }}>
                    <p style={{ fontWeight: "600" }}>Gender</p>
                    <select name="gender" style={{ padding: "5px" }}>
                      <option value="null" selected>
                        Select
                      </option>
                      <option value="m">Male</option>
                      <option value="f">Female</option>
                      <option value="t">Transgender</option>
                    </select>
                  </div>
                </div>
                <div
                  onClick={(event) =>
                    this.tabClicked("payment", "payment-content")
                  }
                  id="next-btn"
                >
                  Next
                </div>
              </div>
              <div id="payment-content" className="tabcontent">
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
                  onClick={(event) => this.tabClicked("done", "done-content")}
                  id="next-btn"
                >
                  Next
                </div>
              </div>
              <div id="done-content" className="tabcontent">
                <p style={{ fontWeight: "600" }}>Congratulations</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    width: "25vw",
                  }}
                >
                  <div>
                    <p>Date:</p>
                    <p>Local Time:</p>
                    <p>Employee:</p>
                    <p>Service:</p>
                    <p>Mode:</p>
                    <p>Payment:</p>
                    <hr />
                    <p>Your Name:</p>
                    <p>Email Address:</p>
                  </div>
                  <div>
                    <p>Jan 19,2023</p>
                    <p>10.00 AM</p>
                    <p>Mark P. Daye</p>
                    <p>Individual therapy</p>
                    <p>Online</p>
                    <p>$20</p>
                    <hr />
                    <p>Mr. Westn howk</p>
                    <p>westnhowk@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
