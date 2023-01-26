import React from "react";
import "../CSS/ListAppointments.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class ListAppointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
  }

  getDate = (date) => {
    this.setState({ startDate: date });
  };

  openTab = (event, tabName) => {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    document.getElementById("upcoming").style.backgroundColor = "#ccc";

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
          <p style={{ fontWeight: "700", fontSize: "30px" }}>Appointments</p>
          <div className="tab">
            <div
              id="upcoming"
              className="tablinks"
              style={{ backgroundColor: "#FF8B8B" }}
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
          <div
            id="upcoming-content"
            className="tabcontent"
            style={{ display: "block" }}
          >
            <div id="list">
              <div>Mr westn howk</div>
              <div>Mark P. Daye</div>
              <div>
                Individual therapy <br /> (pre-booked)
              </div>
              <div>One to one</div>
              <div>
                22.01.23
                <br />
                9.30 - 10.00
              </div>
              <div></div>
            </div>
            <div id="list">
              <div>Mr westn howk</div>
              <div>Mark P. Daye</div>
              <div>
                Individual therapy <br /> (pre-booked)
              </div>
              <div>One to one</div>
              <div>
                22.01.23
                <br />
                9.30 - 10.00
              </div>
              <div></div>
            </div>
            <button id="create">Create</button>
          </div>
          <div id="past-content" className="tabcontent">
            <p>Past</p>
          </div>
          <div id="canceled-content" className="tabcontent">
            <p>Canceled</p>
          </div>
        </div>
      </div>
    );
  }
}
