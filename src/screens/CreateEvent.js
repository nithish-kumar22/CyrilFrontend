import React from "react";
import "../CSS/CreateEvent.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import axios from "axios";
import Cookies from "js-cookie";

export default class CreateEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceOptions: [],
      selectedTherapistOption: "",
      therapistOptions: [],
      token: Cookies.get("jwtToken") || "",
      price: null,
    };
  }

  handleServiceChange = async (event) => {
    this.setState({
      selectedServiceOption: event.target.value,
    });

    await axios
      .get("http://localhost:1337/api/therapists", {
        headers: {
          Authorization: `Bearer ${this.state.token}`,
        },
      })
      .then((res) => {
        var tOptions = ["Select"];
        for (var i = 0; i < res.data.data.length; i++) {
          for (
            var j = 0;
            j < res.data.data[i].attributes.services.length;
            j++
          ) {
            if (
              res.data.data[i].attributes.services[j].service ===
              event.target.value
            ) {
              tOptions.push(res.data.data[i].attributes.name);
            }
          }
        }
        this.setState({ therapistOptions: tOptions });
      })
      .catch((err) => console.log(err));

    await axios
      .get("http://localhost:1337/api/services", {
        headers: {
          Authorization: `Bearer ${this.state.token}`,
        },
      })
      .then((res) => {
        for (var i = 0; i < res.data.data.length; i++) {
          if (res.data.data[i].attributes.title === event.target.value) {
            this.setState({ price: res.data.data[i].attributes.price });
          }
        }
      })
      .catch((err) => console.log(err));

    if (event.target.value == "Select") {
      await axios
        .get("http://localhost:1337/api/therapists", {
          headers: {
            Authorization: `Bearer ${this.state.token}`,
          },
        })
        .then((res) => {
          var tOptions = ["Select"];
          for (var i = 0; i < res.data.data.length; i++) {
            tOptions.push(res.data.data[i].attributes.name);
          }
          this.setState({ therapistOptions: tOptions });
          console.log(this.state.therapistOptions);
        })
        .catch((err) => console.log(err));
    }
  };

  handleTherapistChange = async (event) => {
    this.setState({
      selectedTherapistOption: event.target.value,
    });

    await axios
      .get("http://localhost:1337/api/therapists", {
        headers: {
          Authorization: `Bearer ${this.state.token}`,
        },
      })
      .then((res) => {
        var sOptions = ["Select"];
        for (var i = 0; i < res.data.data.length; i++) {
          if (res.data.data[i].attributes.name === event.target.value) {
            for (
              var j = 0;
              j < res.data.data[i].attributes.services.length;
              j++
            ) {
              sOptions.push(res.data.data[i].attributes.services[j].service);
            }
          }
        }
        this.setState({ serviceOptions: sOptions });
        console.log(this.state.serviceOptions);
      })
      .catch((err) => console.log(err));

    if (event.target.value == "Select") {
      await axios
        .get("http://localhost:1337/api/services", {
          headers: {
            Authorization: `Bearer ${this.state.token}`,
          },
        })
        .then((res) => {
          var sOptions = ["Select"];
          for (var i = 0; i < res.data.data.length; i++) {
            sOptions.push(res.data.data[i].attributes.title);
          }
          this.setState({ serviceOptions: sOptions });
        })
        .catch((err) => console.log(err));
    }
  };

  async componentDidMount() {
    await axios
      .get("http://localhost:1337/api/therapists", {
        headers: {
          Authorization: `Bearer ${this.state.token}`,
        },
      })
      .then((res) => {
        var tOptions = ["Select"];
        for (var i = 0; i < res.data.data.length; i++) {
          tOptions.push(res.data.data[i].attributes.name);
        }
        this.setState({ therapistOptions: tOptions });
      })
      .catch((err) => console.log(err));

    await axios
      .get("http://localhost:1337/api/services", {
        headers: {
          Authorization: `Bearer ${this.state.token}`,
        },
      })
      .then((res) => {
        var sOptions = ["Select"];
        for (var i = 0; i < res.data.data.length; i++) {
          sOptions.push(res.data.data[i].attributes.title);
        }
        this.setState({ serviceOptions: sOptions });
      })
      .catch((err) => console.log(err));
  }

  createEvent = async () => {
    var days = document.getElementsByClassName("day");
    var start = document.getElementsByClassName("start-time");
    var end = document.getElementsByClassName("end-time");
    var name = document.getElementById("event-name");
    var service = this.state.selectedServiceOption;
    var living = document.getElementById("living-type");
    var duration = document.getElementById("duration-type");
    var period = document.getElementById("period");
    var therapist = this.state.selectedTherapistOption;
    var mode = document.getElementById("event-mode-type");
    var booking = document.getElementById("event-booking-type");
    var fee = document.getElementById("event-fee-type");

    var day = [];
    var starttime = [];
    var endtime = [];
    var ts = [];
    for (var i = 0; i < days.length; i++) {
      if (
        days[i].value !== "" &&
        start[i].value !== "" &&
        end[i].value !== ""
      ) {
        ts = [{ day: days[i].value, start: start[i].value, end: end[i].value }];
      }
    }

    // var resArray = [
    //   {
    //     name: name.value,
    //     therapist: therapist,
    //     mode: mode.value,
    //     bookingtype: booking.value,
    //     period: period.value,
    //     duration: duration.value,
    //     fee: fee.value,
    //     service: service,
    //     timeslot: ts,
    //   },
    // ];
    // console.log(resArray);

    await fetch(`http://localhost:1337/api/events/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.state.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          name: name.value,
          therapist: therapist,
          mode: mode.value,
          bookingtype: booking.value,
          period: period.value,
          duration: duration.value,
          fee: fee.value,
          service: service,
          timeslot: ts,
        },
      }),
    })
      .then((r) => {
        console.log(r);
        alert("New event created");
        this.closeModal();
      })
      .catch((e) => alert(e.error.message));
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

  handleFeeChange = async (num) => {
    if (num.target.value >= this.state.price && this.state.price != null) {
      alert("Fee should not exceed the selected service fee");
      num.target.value = null;
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
  class="start-time"
  type="text"
  placeholder="Enter start time"
  style=" padding: 5px; "/>`;

    cell3.innerHTML = `<input
class="end-time"
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
    if (Cookies.get("usertype") === "customer") {
      return (
        <div id="container">
          <div id="top-bar" style={{ height: "100px" }}>
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
                <input
                  id="event-name"
                  className="padding-input"
                  type="text"
                  placeholder="Enter event name"
                />
                {/* <select name="event-type" id="event-type" className="dropdown">
                <option value="null" selected>
                  Select
                </option>
                <option value="1to1">One to One meeting</option>
              </select> */}
                <p className="text-size">Service</p>
                <select
                  name="service-type"
                  id="event-service-type"
                  className="dropdown"
                  value={this.state.selectedServiceOption}
                  onChange={(event) => this.handleServiceChange(event)}
                >
                  {this.state.serviceOptions.map((option, index) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
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
                <select name="therapist" id="period" className="dropdown">
                  <option value="null" selected>
                    Select
                  </option>
                  <option value="Start to End">Start to End</option>
                </select>
              </div>
              <div>
                <p className="text-size">Therapist:</p>
                <select
                  name="therapist-type"
                  id="event-therapist-type"
                  className="dropdown"
                  value={this.state.selectedTherapistOption}
                  onChange={(event) => this.handleTherapistChange(event)}
                >
                  {this.state.therapistOptions.map((option, index) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <p className="text-size">Mode</p>
                <select
                  name="mode-type"
                  id="event-mode-type"
                  className="dropdown"
                >
                  <option value="null" selected>
                    Select mode
                  </option>
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                </select>
                <p className="text-size">Booking type</p>
                <select
                  name="category-type"
                  id="event-booking-type"
                  className="dropdown"
                >
                  <option value="null" selected>
                    Select category
                  </option>
                  <option value="Pre-booking">Pre-booking</option>
                  <option value="Instant booking">Instant booking</option>
                </select>
                <p className="text-size">Fee</p>
                <input
                  id="event-fee-type"
                  type="number"
                  min="0"
                  placeholder="Enter fee"
                  onChange={(num) => this.handleFeeChange(num)}
                />
                {/* <select name="fee" id="event-fee-type" className="dropdown">
                <option value="null" selected>
                  Select
                </option>
                <option value="10">$10.00</option>
                <option value="20">$20.00</option>
                <option value="30">$30.00</option>
                <option value="40">$40.00</option>
              </select> */}
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
                      className="start-time"
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
    } else {
      return <h1>You don't have access to this page</h1>;
    }
  }
}
