import React from "react";
import "../CSS/AdminDashboard.css";
import Chart from "react-google-charts";
const LineData = [
  ["Month", "Therapist 1", "Therapist 2"],
  ["Jan", 9, 0],
  ["Feb", 10, 5],
  ["Mar", 23, 15],
  ["May", 17, 9],
  ["Jun", 17, 9],
  ["Jul", 17, 9],
  ["Aug", 0, 9],
  ["Sep", 0, 9],
  ["Nov", 0, 9],
  ["Dec", 0, 9],
];
const LineChartOptions = {
  hAxis: {
    title: "Month",
  },
  vAxis: {
    title: "Appointments",
  },
  series: {
    1: { curveType: "function" },
  },
};

export default class Admindashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
    };
  }

  componentDidMount() {
    document.addEventListener("click", (event) =>
      this.handleClickOutside(event)
    );
  }

  componentWillUnmount() {
    document.removeEventListener("click", (event) =>
      this.handleClickOutside(event)
    );
  }

  handleClickOutside = (event) => {
    if (!event.target.matches("#admindropbtn")) {
      this.setState({ showMenu: false });
    }
  };

  handleMenu = () => {
    this.setState((prevState) => ({
      showMenu: !prevState.showMenu,
    }));
  };

  render() {
    return (
      <div id="container">
        <div id="page-title-div" style={{ height: "70px" }}>
          <div id="left-page-title">
            <p id="admintxt">Admin dashboard</p>
          </div>
          <button
            id="admindropbtn"
            className="att-btn"
            onClick={() => this.handleMenu()}
          >
            Quick
          </button>
          {this.state.showMenu && (
            <ul>
              <li
                onClick={() =>
                  (window.location.href = `https://clinicfrontend.netlify.app/sendemail`)
                }
              >
                Email and SMS
              </li>
              <li
                onClick={() =>
                  (window.location.href = `https://clinicfrontend.netlify.app/calendar`)
                }
              >
                Calendar
              </li>
              <li
                onClick={() =>
                  (window.location.href = `https://clinicfrontend.netlify.app/listpayments`)
                }
              >
                Payment
              </li>
              <li
                onClick={() =>
                  (window.location.href = `https://clinicfrontend.netlify.app/services`)
                }
              >
                Services
              </li>
              <li
                onClick={() =>
                  (window.location.href = `https://clinicfrontend.netlify.app/staff`)
                }
              >
                Staff
              </li>
              <li
                onClick={() =>
                  (window.location.href = `https://clinicfrontend.netlify.app/listappointments`)
                }
              >
                Appointments
              </li>
            </ul>
          )}
        </div>
        <div id="admin-page-stats-div">
          <div style={{ animation: "search-btn 2s ease-in-out" }}>
            <p style={{ fontSize: "27px", fontWeight: "bold" }}>
              Total no of therapists: 5
            </p>
            <p style={{ fontSize: "27px", fontWeight: "bold" }}>
              Total no of appointments: 20
            </p>
          </div>
          <div style={{ animation: "search 2s ease-in-out" }}>
            <p style={{ fontSize: "27px", fontWeight: "bold" }}>
              Upcoming appointment:
            </p>
            <div
              style={{
                width: "250px",
                height: "150px",
                backgroundColor: "#fff",
                borderTopRightRadius: "20px",
                borderTopLeftRadius: "20px",
              }}
            >
              <div
                style={{
                  height: "40px",
                  width: "100%",
                  backgroundColor: "#7F9BC9",
                  borderTopRightRadius: "20px",
                  borderTopLeftRadius: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p style={{ position: "relative", top: "8px" }}>February</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "4px",
                  flexDirection: "column",
                }}
              >
                <p>Therapist 1: 08 (9.00AM)</p>
                <p>Therapist 2: 22 (10.30AM)</p>
              </div>
            </div>
          </div>
        </div>
        <div id="adminchart">
          <Chart
            width={"100%"}
            height={"410px"}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={LineData}
            options={LineChartOptions}
            rootProps={{ "data-testid": "2" }}
          />
        </div>
      </div>
    );
  }
}
