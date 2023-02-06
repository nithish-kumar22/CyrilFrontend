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

  componentDidMount() {
    const content = document.getElementById("container");
    const viewportHeight = window.innerHeight;

    if (content.offsetHeight > viewportHeight) {
      content.style.height = "100%";
    } else {
      content.style.height = "100vh";
    }
  }

  getDate = (date) => {
    this.setState({ startDate: date });
  };

  getHeaderCB = () => {
    var hcb = document.getElementById("headercheckbox");
    var checkbox = document.getElementsByClassName("servicecheckbox");

    if (hcb.checked) {
      for (let i = 0; i < checkbox.length; i++) checkbox[i].checked = true;
    }
    if (!hcb.checked) {
      for (let i = 0; i < checkbox.length; i++) checkbox[i].checked = false;
    }
  };

  deletepayment = () => {
    var checkbox = document.getElementsByClassName("servicecheckbox");
    var table = document.getElementById("payments-table");

    for (let i = 1; i < checkbox.length; i++) {
      if (checkbox[i].checked) {
        table.rows[i].className = "fadeOut";

        setTimeout(() => {
          table.rows[i].remove();
        }, 2000);
      }
    }

    for (let i = 0; i < checkbox.length; i++) {
      if (checkbox[i].checked) {
        for (let j = 0; j < table.rows[i].cells.length - 1; j++) {
          //alert(table.rows[i].cells[j].innerHTML);
        }
      }
    }
  };

  render() {
    return (
      <div id="container">
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
          <p
            style={{
              fontWeight: "700",
              fontSize: "30px",
              animation: "book-app 2s ease-in-out forwards",
            }}
          >
            Payments
          </p>

          <div id="payment-filter">
            <DatePicker
              className="lefttorightanim"
              selected={this.state.startDate}
              onChange={(date) => this.getDate(date)}
              dateFormat="d/MM/yyyy"
            />
            <select
              className="lefttorightanim"
              name="type"
              id="service-type"
              style={{ margin: "10px" }}
            >
              <option value="null" selected>
                Type
              </option>
              <option value="online">Paytm</option>
              <option value="offline">PhonePe</option>
            </select>
            <select
              name="customer-type"
              className="lefttorightanim"
              id="service-type"
              style={{ margin: "10px" }}
            >
              <option value="null" selected>
                Customer
              </option>
              <option value="1">Mr Westn Howk</option>
            </select>
            <select
              name="provider-type"
              id="service-type"
              style={{ margin: "10px" }}
              className="righttoleftanim"
            >
              <option value="null" selected>
                Provider
              </option>
              <option value="1">Mark P Daye</option>
            </select>
            <select
              name="service-type"
              id="service-type"
              style={{ margin: "10px" }}
              className="righttoleftanim"
            >
              <option value="null" selected>
                Select Service
              </option>
              <option value="individual">Individual therapy</option>
              <option value="couple">Couple therapy</option>
            </select>

            <select
              className="righttoleftanim"
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
          </div>
        </div>
        <div
          style={{
            width: "100vw",
            paddingTop: "50px",
            overflowX: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflowY: "hidden",
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

              <th>
                <input
                  id="headercheckbox"
                  type="checkbox"
                  name="check"
                  className="servicecheckbox"
                  onClick={() => this.getHeaderCB()}
                />
                &nbsp;
              </th>
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
              <td>
                <input
                  type="checkbox"
                  name="check"
                  className="servicecheckbox"
                />
                &nbsp;
              </td>
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
              <td>
                <input
                  type="checkbox"
                  name="check"
                  className="servicecheckbox"
                />
                &nbsp;
              </td>
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
              <td>
                <input
                  type="checkbox"
                  name="check"
                  className="servicecheckbox"
                />
                &nbsp;
              </td>
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
            <button
              className="att-btn"
              onClick={() => this.deletepayment()}
              style={{ width: "100px", padding: "5px" }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}
