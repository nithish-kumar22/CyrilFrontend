import React from "react";
import { Component } from "react";
import "../CSS/Booking.css";

export default class Booking extends Component {
  constructor(props) {
    super(props);
  }

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
    event.currentTarget += " active";
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
                onClick={(event) => this.tabClicked(event, "service-content")}
              >
                <p>Service</p>
              </div>
              <div id="time" className="tablinks">
                <p>Time</p>
              </div>
              <div
                id="details"
                className="tablinks"
                onClick={(event) => this.tabClicked(event, "details")}
              >
                <p>Details</p>
              </div>
              <div
                id="payment"
                className="tablinks"
                onClick={(event) => this.tabClicked(event, "payment")}
              >
                <p>Payment</p>
              </div>
              <div
                id="done"
                className="tablinks"
                onClick={(event) => this.tabClicked(event, "done")}
              >
                <p>Done</p>
              </div>
            </div>
            <div id="right-booking">
              <div id="service-content" className="tabcontent">
                <p onClick={(event) => this.tabClicked(event, "time-content")}>
                  This is Service page
                </p>
              </div>
              <div id="time-content" className="tabcontent">
                <p
                  onClick={(event) => this.tabClicked(event, "details-content")}
                >
                  This is time page
                </p>
              </div>
              <div id="details-content" className="tabcontent">
                <p>This is details page</p>
              </div>
              <div id="payment-content" className="tabcontent">
                <p>This is payment page</p>
              </div>
              <div id="done-content" className="tabcontent">
                <p>This is done page</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
