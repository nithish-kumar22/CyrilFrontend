import React from "react";
import "../CSS/CreateEvent.css";

export default class CreateEvent extends React.Component {
  createEvent = () => {
    var days = document.getElementsByClassName("day").value;
    var start = document.getElementsByClassName("start-time").value;
    var end = document.getElementsByClassName("end-time").value;
    var day = [];
    var starttime = [];
    var endtime = [];
    for (let i = 0; i < days.length; i++) {
      if (days[i].value !== "") {
        day.push(days[i]);
      }
      if (start[i].value !== "") {
        starttime.push(start[i]);
      }
      if (end[i].value !== "") {
        endtime.push(end[i].value);
      }
    }
    console.log(day);
  };

  deleteSlot = () => {
    var checkbox = document.getElementsByClassName("eventcheckbox");
    var table = document.getElementById("ts-table");
    for (let i = 0; i < checkbox.length; i++) {
      if (checkbox[i].checked) {
        table.rows[i].className = "fadeOut";

        setTimeout(() => {
          table.rows[i].remove();
        }, 2000);
      }
    }
  };

  addslot = () => {
    var table = document.getElementById("ts-table");
    var row = table.insertRow(table.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = `<input
    class="day"
    type="text"
    placeholder="Enter day"
    style=" padding: 5px; "
  />`;

    cell2.innerHTML = ` <input
  className="Start-time"
  type="text"
  placeholder="Enter start time"
  style=" padding: 5px; "/>`;

    cell3.innerHTML = `<input
className="end-time"
type="text"
placeholder="Enter end time"
style=" padding: 5px; "/>`;

    cell4.innerHTML = ` <input
type="checkbox"
name="check"
class="eventcheckbox"
style=" width: 20px; height: 20px; "
/>`;

    //var tsc = document.getElementById("ts-container");
    //   var ts = document.getElementById("ts-container");
    //   ts.insertAdjacentHTML(
    //     "beforeend",
    //     `
    //     <div style={{display: flex;
    //       padding-bottom: 30px;
    //       flex-direction: column;
    //       }}>
    //     <div style=" display: flex;
    //       flex-direction: ${window.screen.width <= 600 ? "column" : "row"};
    //       justify-content: space-between;
    //       width: 40vw;
    //       padding-top: 30px
    //       ">
    //   <input
    //   class="day"
    //   type="text"
    //   placeholder="Enter day"
    //   style=" padding: 5px;"
    // />
    //   <input
    //   class="start-time"
    //   type="text"
    //   placeholder="Enter start time"
    //   style=" padding: 5px;"
    //   />
    //   <input
    //   class="end-time"
    //   type="text"
    //   placeholder="Enter end time"
    //   style=" padding: 5px;"
    //   />
    //   </div>
    // </div>`
    //   );
  };

  day = () => {
    return (
      <input
        className="day"
        type="text"
        placeholder="Enter day"
        style={{ padding: "5px" }}
      />
    );
  };

  startTime = () => {
    return (
      <input
        className="Start-time"
        type="text"
        placeholder="Enter start time"
        style={{ padding: "5px" }}
      />
    );
  };

  endTime = () => {
    return (
      <input
        className="end-time"
        type="text"
        placeholder="Enter end time"
        style={{ padding: "5px" }}
      />
    );
  };

  checkBox = () => {
    return (
      <input
        type="checkbox"
        name="check"
        className="eventcheckbox"
        style={{ width: "20px", height: "20px" }}
      />
    );
  };

  render() {
    return (
      <div id="container">
        <div id="top-bar" style={{ height: "100px" }}>
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
          <p
            style={{
              fontSize: "30px",
              fontWeight: "700",
              animation: "book-app 2s ease-in-out forwards",
            }}
          >
            Create an Event
          </p>

          <div
            id="event-container"
            style={{
              animation: "book-app 2s ease-in-out forwards",
            }}
          >
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
          <p className="text-size" style={{ marginTop: "20px" }}>
            Available Time Slots
          </p>
          <div
            style={{
              overflowX: "auto",
              paddingTop: "50px",
              width: "95%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "30px",
            }}
          >
            <table id="ts-table">
              <tr>
                <td>
                  <input
                    className="day"
                    type="text"
                    placeholder="Enter day"
                    style={{ padding: "5px" }}
                  />
                </td>
                <td>
                  <input
                    className="Start-time"
                    type="text"
                    placeholder="Enter start time"
                    style={{ padding: "5px" }}
                  />
                </td>
                <td>
                  <input
                    className="end-time"
                    type="text"
                    placeholder="Enter end time"
                    style={{ padding: "5px" }}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="check"
                    className="eventcheckbox"
                    style={{ width: "20px", height: "20px" }}
                  />
                </td>
              </tr>
              ;
            </table>
          </div>
          <div style={{ paddingBottom: "30px" }}>
            <button
              className="att-btn"
              style={{ justifyContent: "flex-end" }}
              onClick={() => this.addslot()}
            >
              Add new slots
            </button>
            <button
              className="att-btn"
              id="create-eve-btn"
              onClick={() => this.createEvent()}
            >
              Create
            </button>

            <button
              className="att-btn"
              id="dlt-slot"
              onClick={(event) => this.deleteSlot()}
            >
              Delete Slot
            </button>
          </div>
          {/* <div id="time-slot-cont">
            <div id="ts-container">
              <div id="ts">
                <input
                  className="day"
                  type="text"
                  placeholder="Enter day"
                  style={{ padding: "5px" }}
                />

                <input
                  className="Start-time"
                  type="text"
                  placeholder="Enter start time"
                  style={{ padding: "5px" }}
                />
                <input
                  className="end-time"
                  type="text"
                  placeholder="Enter end time"
                  style={{ padding: "5px" }}
                />
              </div>
            </div>
            <div style={{ paddingBottom: "30px" }}>
              <button
                className="att-btn"
                style={{ justifyContent: "flex-end" }}
                onClick={() => this.addslot()}
              >
                Add new slots
              </button>
              <button
                className="att-btn"
                style={{
                  justifyContent: "flex-end",
                  position: "relative",
                  left: "30px",
                }}
                onClick={() => this.createEvent()}
              >
                Create
              </button>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}
