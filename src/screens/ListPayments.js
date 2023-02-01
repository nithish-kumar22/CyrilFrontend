import React from "react";
import "../CSS/ListPayments.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class ListPayments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
  }

  getDate = (date) => {
    this.setState({ startDate: date });
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
          <p style={{ fontWeight: "700", fontSize: "30px" }}>Payments</p>

          <div id="payment-filter">
            <select
              name="service-type"
              id="service-type"
              style={{ margin: "10px" }}
            >
              <option value="null" selected>
                Select Service
              </option>
              <option value="individual">Individual therapy</option>
              <option value="couple">Couple therapy</option>
            </select>
            <select
              name="mode-type"
              id="service-type"
              style={{ margin: "10px" }}
            >
              <option value="null" selected>
                Select mode
              </option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
            <select
              name="status-type"
              id="service-type"
              style={{ margin: "10px" }}
            >
              <option value="null" selected>
                Status
              </option>
              <option value="s">Success</option>
              <option value="f">Failure</option>
            </select>
            <DatePicker
              selected={this.state.startDate}
              onChange={(date) => this.getDate(date)}
              dateFormat="d/MM/yyyy"
            />
          </div>
        </div>
        <div
          style={{
            width: "100vw",
            paddingTop: "50px",
            overflowX: "auto",
          }}
        >
          <table id="payments-table">
            <tr style={{ fontSize: "20px" }}>
              <th>No.</th>
              <th>Date</th>
              <th>Type</th>
              <th>Customer</th>
              <th>Provider</th>
              <th>Service</th>
              <th>Appointment Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>1.</td>
              <td>22.01.23</td>
              <td>Paytm</td>
              <td>Mr westn howk</td>
              <td>Mark P. Daye</td>
              <td>Individual Therapy</td>
              <td>24.01.23</td>
              <td>$23.00</td>
              <td>Paid</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>22.01.23</td>
              <td>Paytm</td>
              <td>Mr westn howk</td>
              <td>Mark P. Daye</td>
              <td>Individual Therapy</td>
              <td>24.01.23</td>
              <td>$23.00</td>
              <td>Paid</td>
            </tr>
            <tr>
              <td>3.</td>
              <td>22.01.23</td>
              <td>Paytm</td>
              <td>Mr westn howk</td>
              <td>Mark P. Daye</td>
              <td>Individual Therapy</td>
              <td>24.01.23</td>
              <td>$23.00</td>
              <td>Paid</td>
            </tr>
          </table>
        </div>
        <div
          style={{
            width: "80vw",
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "row",
            paddingTop: "30px",
            paddingBottom: "30px",
          }}
        >
          <div>
            <p style={{ fontWeight: "700", fontSize: "20px" }}>Total $60.00</p>
            <button style={{ width: "100px", padding: "5px" }}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}
