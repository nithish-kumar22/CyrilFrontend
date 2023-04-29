import React from "react";
import "../CSS/AdminDashboard.css";
import Chart from "react-google-charts";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import axios from "axios";
import Cookies from "js-cookie";

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
  ["Jan", 9],
  ["Feb", 10],
  ["Mar", 23],
  ["May", 17],
  ["Jun", 17],
  ["Jul", 17],
  ["Aug", 10],
  ["Sep", 13],
  ["Nov", 8],
  ["Dec", 24],
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

export default class Admindashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
      token: Cookies.get("jwtToken") || "",
      nooftherapists: 0,
      noofappointments: 0,
      bmonths: [],
      appointments: [],
      tnames: [],
      upMonth: null,
      paymentData: [],
      Appointment: [
        { Month: "Jan", Akash: 2, Kumar: 1 },
        { Month: "Feb", Akash: 3, Kumar: 5 },
      ],
      tchartsData: [],
      AppointmentData: [{ month: "Jan", akash: "10", kumar: "20" }],
    };
  }

  async componentDidMount() {
    document.addEventListener("click", (event) =>
      this.handleClickOutside(event)
    );
    // this.setState({ token: "" });
    // Cookies.remove("jwtToken");
    // Cookies.remove("email");
    // Cookies.remove("usertype");

    var chartData = [];

    await axios
      .get("http://localhost:1337/api/therapists", {
        headers: {
          Authorization: `Bearer ${this.state.token}`,
        },
      })
      .then((res) => {
        var therapistname = ["Month"];
        var tn = [];
        this.setState({ nooftherapists: res.data.data.length });
        for (var i = 0; i < res.data.data.length; i++) {
          therapistname.push(res.data.data[i].attributes.name);
          tn.push(res.data.data[i].attributes.name);
        }
        this.setState({ tnames: tn });
        // chartData.push(therapistname);
        //  this.setState({ tchartsData: chartData });
      })
      .catch((err) => console.log(err));

    await axios
      .get("http://localhost:1337/api/payments", {
        headers: {
          Authorization: `Bearer ${this.state.token}`,
        },
      })
      .then((res) => {
        var resArray = [];

        if (res.data.data.length > 5) {
          for (var i = 0; i < 5; i++) {
            resArray.push(res.data.data[i].attributes);
          }
        } else {
          for (var i = 0; i < res.data.data.length; i++) {
            resArray.push(res.data.data[i].attributes);
          }
        }

        this.setState({ paymentData: resArray });
      })
      .catch((err) => console.log(err));

    await axios
      .get("http://localhost:1337/api/bookings", {
        headers: {
          Authorization: `Bearer ${this.state.token}`,
        },
      })
      .then((res) => {
        var apdata = [];
        var mon = [];
        for (let i = 0; i < res.data.data.length; i++) {
          apdata.push({
            therapist: res.data.data[i].attributes.therapist_name,
            date: res.data.data[i].attributes.date,
          });
          mon.push(
            new Date(res.data.data[i].attributes.date).toLocaleString(
              "default",
              { month: "long" }
            )
          );
        }
        this.setState({ bmonths: mon });

        var appointmentCounts = {};

        apdata.forEach((booking) => {
          var month = new Date(booking.date).toLocaleString("default", {
            month: "long",
          });
          var therapist = booking.therapist;

          if (!appointmentCounts[month]) {
            appointmentCounts[month] = {};
          }
          if (!appointmentCounts[month][therapist]) {
            appointmentCounts[month][therapist] = 0;
          }
          appointmentCounts[month][therapist]++;
        });

        const chartData = [["Month", ...this.state.tnames]];
        const therapists = new Set();
        for (const month in appointmentCounts) {
          therapists.add(month);
        }

        const sortedTherapists = Array.from(therapists).sort();

        const dataRows = sortedTherapists.map((therapist) => {
          const therapistData = [therapist];
          for (const month in appointmentCounts) {
            for (const therapis in appointmentCounts[month][therapist])
              therapistData.push(appointmentCounts[month][therapist] || 0);
          }
          return therapistData;
        });

        const finalData = chartData.concat(dataRows);

        console.log(finalData);

        this.setState({ AppointmentData: chartData });
        // var dt = [];

        // for (const month in appointmentCounts) {
        //   console.log(`Appointments for ${month}:`);
        //   for (const therapist in appointmentCounts[month]) {
        //     console.log(`${therapist}: ${appointmentCounts[month][therapist]}`);

        //     for (let i = 0; i < this.state.tnames.length; i++) {
        //       dt.push([
        //         appointmentCounts[month][this.state.tnames[i]] === undefined
        //           ? 0
        //           : appointmentCounts[month][this.state.tnames[i]],
        //       ]);

        //     }
        //   }
        //   console.log("");
        // }

        // console.log(dt);

        // for (const month in appointmentCounts) {
        //   console.log(`Months for ${month}:`);
        //   for (const therapist in appointmentCounts[month]) {
        //     console.log(`${therapist}: ${appointmentCounts[therapist][month]}`);
        //   }
        //   console.log("");
        // }

        // this.setState({ noofappointments: res.data.data.length });
        // var resArray = [];

        // this.setState({
        //   upMonth: new Date(
        //     res.data.data[0].attributes.date
        //   ).toLocaleDateString("default", { month: "long" }),
        // });
        // for (var i = 0; i < res.data.data.length; i++) {
        //   var date = new Date(res.data.data[i].attributes.date)
        //     .toLocaleDateString("en-US", {
        //       day: "numeric",
        //       month: "numeric",
        //       year: "numeric",
        //     })
        //     .replace(/(\d+)\/(\d+)\/(\d+)/, "$2/$1/$3");
        //   var upcome = `${date} ${res.data.data[i].attributes.timeslot}`;
        //   resArray.push(upcome);
        // }
        // this.setState({ appointments: resArray });

        // var count = 0;
        // var therapistApp = [];
        // var monthApp = [res.data.data.length];

        // for (var j = 0; j < res.data.data.length; j++) {
        //   // for (var k = 0; k < res.data.data.length; k++) {
        //   // console.log(new Date(res.data.data[j].attributes.date).getMonth());
        //   monthApp[new Date(res.data.data[j].attributes.date).getMonth() + 1] =
        //     count += 1;
        //   // }
        // }
        // console.log("Month", monthApp);
      })

      .catch((err) => console.log(err));
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
          <div
            id="stats-div-left"
            style={{ animation: "search-btn 2s ease-in-out" }}
          >
            <p style={{ fontWeight: "bold" }}>
              Total no of therapists: {this.state.nooftherapists}
            </p>
            <p style={{ fontWeight: "bold" }}>
              Total no of appointments: {this.state.noofappointments}
            </p>
            <p style={{ fontWeight: "bold" }}>Total amounts earned: $150</p>
          </div>
          <div style={{ animation: "search 2s ease-in-out" }}>
            <p id="stats-div-left" style={{ fontWeight: "bold" }}>
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
                <p style={{ position: "relative", top: "8px" }}>
                  {this.state.upMonth}
                </p>
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
                <p>{this.state.appointments[0]}</p>
                <p>{this.state.appointments[1]}</p>
              </div>
            </div>
          </div>
          <div id="payment-admin-div" style={{ backgroundColor: "#fff" }}>
            <table id="admin-dashboard-table">
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
                        <p>{val.type}</p>
                      </div>
                    </td>
                    <td>
                      <div>
                        <p>{val.provider}</p>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
        <div id="adminchart">
          <Chart
            width={"100%"}
            height={"410px"}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={this.state.AppointmentData}
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
