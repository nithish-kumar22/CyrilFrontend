import React from "react";
import Chart from "react-google-charts";
import "../CSS/Therapistdashboard.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";

import axios from "axios";
import Cookies from "js-cookie";

const AppointmentData = [
  ["Month", Cookies.get("email")],
  ["Jan", 0],
  ["Feb", 0],
  ["Mar", 0],
  ["Apr", 0],
  ["May", 0],
  ["Jun", 0],
  ["Jul", 0],
  ["Aug", 0],
  ["Sep", 0],
  ["Oct", 0],
  ["Nov", 0],
  ["Dec", 0],
];

const AppointmentChartOptions = {
  title: "Appointments",
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

const PaymentData = [
  ["Month", "Amount"],
  ["Jan", 0],
  ["Feb", 0],
  ["Mar", 0],
  ["Apr", 0],
  ["May", 0],
  ["Jun", 0],
  ["Jul", 0],
  ["Aug", 0],
  ["Sep", 0],
  ["Oct", 0],
  ["Nov", 0],
  ["Dec", 0],
];
const PaymentChartOptions = {
  title: "Payments",
  hAxis: {
    title: "Month",
  },
  vAxis: {
    title: "Amount",
  },
  series: {
    1: { curveType: "function" },
  },
};

export default class Therapistdashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
      showDropMenu: false,
      token: Cookies.get("jwtToken") || "",
      email: Cookies.get("email") || "",
      noofappointments: 0,
      totalamount: 0,
      therapistname: "",
      tapp: [],
      paymentData: [],
    };
  }

  async componentDidMount() {
    document.addEventListener("click", (event) => {
      this.handleClickOutside(event);
      this.handleDropClickOutside(event);
    });

    await axios
      .get(`http://localhost:1337/api/getname/${this.state.email}`, {
        headers: {
          Authorization: `Bearer ${this.state.token}`,
        },
      })
      .then((res) => this.setState({ therapistname: res.data }))
      .catch((e) => console.log(e));

    await axios
      .get(`http://localhost:1337/api/payments`, {
        headers: {
          Authorization: `Bearer ${this.state.token}`,
        },
      })
      .then((res) => {
        var pay = 0;
        var resArray = [];

        for (var j = 1; j < PaymentData.length; j++) {
          PaymentData[j][1] = 0;
        }

        for (var i = 0; i < res.data.data.length; i++) {
          console.log("Therapist " + res.data.data[i].attributes.provider);
          if (
            this.state.therapistname == res.data.data[i].attributes.provider
          ) {
            pay += res.data.data[i].attributes.amount;
            resArray.push(res.data.data[i].attributes);

            var month = res.data.data[i].attributes.payment_date.split("/");
            PaymentData[month[1]][1] += 1;
          }
        }
        this.setState({ totalamount: pay });
        this.setState({ paymentData: resArray });
      })
      .catch((e) => console.log(e));

    await axios
      .get("http://localhost:1337/api/bookings", {
        headers: {
          Authorization: `Bearer ${this.state.token}`,
        },
      })
      .then((res) => {
        this.setState({ nooftherapists: res.data.data.length });
        var count = 0;
        var resArray = [];

        for (var j = 1; j < AppointmentData.length; j++) {
          AppointmentData[j][1] = 0;
        }

        for (var i = 0; i < res.data.data.length; i++) {
          if (
            res.data.data[i].attributes.therapist_name ===
            this.state.therapistname
          ) {
            count += 1;
            var app = `${res.data.data[i].attributes.date} ${res.data.data[i].attributes.timeslot}`;
            resArray.push(app);
            var month = res.data.data[i].attributes.date.split("/");
            AppointmentData[month[1]][1] += 1;
            console.log(AppointmentData[month[1]][1]);
          }
        }
        this.setState({ tapp: resArray });
        this.setState({ noofappointments: count });
      })
      .catch((err) => console.log(err));
  }

  componentWillUnmount() {
    document.removeEventListener("click", (event) => {
      this.handleClickOutside(event);
      this.handleDropClickOutside(event);
    });
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

  logout = () => {
    this.setState({ token: "" });
    Cookies.remove("jwtToken");
    Cookies.remove("email");
    Cookies.remove("usertype");
    window.location.replace("http://localhost:3000/");
  };

  handleDropClickOutside = (event) => {
    if (!event.target.matches("#dropbtn")) {
      this.setState({ showDropMenu: false });
    }

    // if (
    //   this.dropdownRef.current &&
    //   !this.dropdownRef.current.contains(event.target)
    // ) {
    //   this.setState({ isOpen: false });
    // }
  };

  handleDropMenu = () => {
    this.setState((prevState) => ({
      showDropMenu: !prevState.showDropMenu,
    }));
  };

  render() {
    return (
      <div id="container">
        <div id="page-title-div" style={{ height: "70px" }}>
          <div id="left-page-title">
            <p id="therapisttxt">Therapist dashboard</p>
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
                  (window.location.href = `https://clinicfrontend.netlify.app/listappointments`)
                }
              >
                Appointments
              </li>
            </ul>
          )}
          <div>
            <FaUserCircle
              id="dropbtn"
              onClick={() => this.handleDropMenu()}
              color="#000"
              size={25}
              style={{ cursor: "pointer", marginRight: "20px" }}
            />
            {this.state.showDropMenu && this.state.token && (
              <ul ref={this.state.dropdownRef}>
                <li onClick={() => this.logout()}>LogOut</li>
              </ul>
            )}
          </div>
        </div>
        <div id="admin-page-stats-div">
          <div
            id="therapist-stats-left"
            style={{ animation: "search-btn 2s ease-in-out" }}
          >
            <p style={{ fontWeight: "bold" }}>
              Total no of appointments: {this.state.noofappointments}
            </p>
            <p style={{ fontWeight: "bold" }}>
              Total amounts earned: {this.state.totalamount}
            </p>
          </div>
          <div style={{ animation: "search 2s ease-in-out" }}>
            <p id="therapist-stats-left" style={{ fontWeight: "bold" }}>
              Upcoming appointment:
            </p>
            <div
              style={{
                width: "250px",
                height: "150px",
                backgroundColor: "#fff",
                borderTopRightRadius: "20px",
                borderTopLeftRadius: "20px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.7)",
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
                <p>{this.state.tapp[0]}</p>
                <p>{this.state.tapp[1]}</p>
              </div>
            </div>
          </div>
          <div id="payment-container-div" style={{ backgroundColor: "#fff" }}>
            <table id="therapist-dashboard-table">
              <th>
                <td>Payments</td>
              </th>
              {this.state.paymentData.map((val, key) => {
                return (
                  <tr>
                    <td>
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <FaRegCalendarAlt
                          size={20}
                          color="#000"
                          style={{ marginTop: "5px" }}
                        />
                        <p style={{ marginLeft: "10px" }}>{val.payment_date}</p>
                      </div>
                    </td>
                    <td>
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <FaDollarSign
                          size={20}
                          color="#000"
                          style={{ marginTop: "5px" }}
                        />
                        <p style={{ marginLeft: "5px" }}>{val.amount}</p>
                      </div>
                    </td>
                    <td>
                      <div>
                        <p>{val.name}</p>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
        <div id="therapistchart">
          <Chart
            width={"100%"}
            height={"410px"}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={AppointmentData}
            options={AppointmentChartOptions}
            rootProps={{ "data-testid": "2" }}
          />
          <Chart
            width={"100%"}
            height={"410px"}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={PaymentData}
            options={PaymentChartOptions}
            rootProps={{ "data-testid": "2" }}
          />
        </div>
      </div>
    );
  }
}
