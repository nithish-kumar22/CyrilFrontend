import React from "react";
import "../CSS/CreateEvent.css";

export default class CreateEvent extends React.Component {
  constructor(props) {
    super(props);
  }

  addslot = () => {
    //var tsc = document.getElementById("ts-container");
    var ts = document.getElementById("ts-container");
    ts.insertAdjacentHTML(
      "beforeend",
      `<div style="display: "flex";
        flex-direction: "column";
    background-color:black;">
    <div style="display: "flex";
    flex-direction: "row";
    justify-content: "space-between";
    width: "40vw";>
    <div id="day-div">
  <select name="day" id="day" className="dropdown">
    <option value="null" selected>
      Select day
    </option>
    <option value="mon">Monday</option>
    <option value="tues">Tuesday</option>
    <option value="wed">Wednessday</option>
    <option value="thurs">Thursday</option>
    <option value="fri">Friday</option>
    <option value="sat">Saturday</option>
    <option value="sun">Sunday</option>
  </select>
</div>
<div id="start-div">
  <select
    name="start-time"
    id="start-time"
    className="dropdown"
  >
    <option value="null" selected>
      Select
    </option>
    <option value="9">9.00 AM</option>
    <option value="930">9.30 AM</option>
  </select>
</div>
<div id="end-div">
  <select name="end-time" id="end-time" className="dropdown">
    <option value="null" selected>
      Select
    </option>
    <option value="930">9.30 AM</option>
    <option value="10">10.00 AM</option>
  </select>
</div>
</div>

  </div>`
    );
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
          <p style={{ fontSize: "30px", fontWeight: "700" }}>Create an Event</p>

          <div id="event-container">
            <div>
              <p className="text-size">Name of Event</p>
              <select name="event-type" id="event-type" className="dropdown">
                <option value="null" selected>
                  Select
                </option>
                <option value="1to1">One to One meeting</option>
              </select>
              <p className="text-size">Service</p>
              <select
                name="service-type"
                id="service-type"
                style={{ width: "200px" }}
                className="dropdown"
              >
                <option value="null" selected>
                  Service
                </option>
                <option value="individual">Individual therapy</option>
                <option value="couple">Couple therapy</option>
              </select>
              <p className="text-size">Within India</p>
              <select name="living" id="living-type" className="dropdown">
                <option value="null" selected>
                  Select
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <p className="text-size">Duration</p>
              <select name="duration" id="duration-type" className="dropdown">
                <option value="null" selected>
                  Select duration
                </option>
                <option value="30">30 mins</option>
                <option value="60">1 hr</option>
                <option value="90">1 hr 30 mins</option>
              </select>
              <p className="text-size">Period</p>
              <select name="therapist" id="therapist" className="dropdown">
                <option value="null" selected>
                  Select
                </option>
                <option value="se">Start to End</option>
              </select>
            </div>
            <div>
              <p className="text-size">Therapist:</p>
              <select name="therapist" id="therapist" className="dropdown">
                <option value="null" selected>
                  Select
                </option>
                <option value="mark">Mark P. Daye</option>
                <option value="linora">Linora C. Hickson</option>
              </select>
              <p className="text-size">Mode</p>
              <select name="mode-type" id="mode-type" className="dropdown">
                <option value="null" selected>
                  Select mode
                </option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </select>
              <p className="text-size">Booking type</p>
              <select
                name="category-type"
                id="booking-type"
                className="dropdown"
              >
                <option value="null" selected>
                  Select category
                </option>
                <option value="pre">Pre-booking</option>
                <option value="instant">Instant booking</option>
              </select>
              <p className="text-size">Fee</p>
              <select name="fee" id="fee-type" className="dropdown">
                <option value="null" selected>
                  Select
                </option>
                <option value="10">$10.00</option>
                <option value="20">$20.00</option>
                <option value="30">$30.00</option>
                <option value="40">$40.00</option>
              </select>
            </div>
          </div>
          <p className="text-size">Available Time Slots</p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div id="ts-container">
              <div id="ts">
                <div id="day-div">
                  <select name="day" id="day" className="dropdown">
                    <option value="null" selected>
                      Select day
                    </option>
                    <option value="mon">Monday</option>
                    <option value="tues">Tuesday</option>
                    <option value="wed">Wednessday</option>
                    <option value="thurs">Thursday</option>
                    <option value="fri">Friday</option>
                    <option value="sat">Saturday</option>
                    <option value="sun">Sunday</option>
                  </select>
                </div>
                <div id="start-div">
                  <select
                    name="start-time"
                    id="start-time"
                    className="dropdown"
                  >
                    <option value="null" selected>
                      Select
                    </option>
                    <option value="9">9.00 AM</option>
                    <option value="930">9.30 AM</option>
                  </select>
                </div>
                <div id="end-div">
                  <select name="end-time" id="end-time" className="dropdown">
                    <option value="null" selected>
                      Select
                    </option>
                    <option value="930">9.30 AM</option>
                    <option value="10">10.00 AM</option>
                  </select>
                </div>
              </div>
            </div>
            <div style={{ paddingBottom: "30px" }}>
              <button style={{ justifyContent: "flex-end" }}>
                Add new slots
              </button>
              <button
                style={{
                  justifyContent: "flex-end",
                  position: "relative",
                  left: "30px",
                }}
                onClick={() => this.addslot()}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
