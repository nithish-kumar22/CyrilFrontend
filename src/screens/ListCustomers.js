import React from "react";
import "../CSS/ListCustomers.css";

export default class ListCustomers extends React.Component {
  constructor(props) {
    super(props);
  }

  openModal = () => {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  };

  closeModal = () => {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
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
          <p style={{ fontWeight: "700", fontSize: "30px" }}>Customers</p>

          <div style={{ display: "inline-block" }}>
            <input
              id="search"
              type="text"
              placeholder="Quick Search Customer"
            />
            <button id="add-customer" onClick={() => this.openModal()}>
              Add new customer
            </button>
          </div>
        </div>
        <div
          style={{
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            paddingTop: "50px",
            flexDirection: "row",
          }}
        >
          <table id="table">
            <tr style={{ fontSize: "20px" }}>
              <th>Full Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Therapist</th>
              <th>Gender</th>
              <th>Last Appointment</th>
              <th>Total Appointment</th>
              <th>Payment</th>
            </tr>
            <tr>
              <td>cyriljm</td>
              <td>9431309362</td>
              <td>cyriljon@yahoo.com</td>
              <td>Mark P. Daye</td>
              <td>Male</td>
              <td>24.01.23</td>
              <td>2</td>
              <td>$23.00</td>
            </tr>
            <tr>
              <td>cyriljm</td>
              <td>9431309362</td>
              <td>cyriljon@yahoo.com</td>
              <td>Mark P. Daye</td>
              <td>Male</td>
              <td>24.01.23</td>
              <td>2</td>
              <td>$23.00</td>
            </tr>
            <tr>
              <td>cyriljm</td>
              <td>9431309362</td>
              <td>cyriljon@yahoo.com</td>
              <td>Mark P. Daye</td>
              <td>Male</td>
              <td>24.01.23</td>
              <td>2</td>
              <td>$23.00</td>
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
          }}
        >
          <div>
            <button style={{ width: "100px", padding: "5px" }}>Delete</button>
          </div>
        </div>
        <div id="myModal" class="modal">
          <div class="modal-content">
            <p
              onClick={() => this.closeModal()}
              class="close"
              style={{ position: "relative", bottom: "30px" }}
            >
              <span>&times;</span>
            </p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <p>Full name</p>
                <input
                  id="full-name"
                  type="text"
                  placeholder="Enter full name"
                />
                <p>Email</p>
                <input
                  id="email-customer"
                  type="text"
                  className="padding-input"
                  placeholder="Enter email"
                />
                <p>Therapist</p>
                <input
                  id="therapist-cust"
                  type="text"
                  className="padding-input"
                  placeholder="Enter therapist name"
                />
              </div>
              <div>
                <p>Phone</p>
                <input
                  id="phone"
                  className="padding-input"
                  type="number"
                  placeholder="Enter phone number"
                />
                <p>Age</p>
                <input
                  id="age"
                  className="padding-input"
                  type="number"
                  placeholder="Enter age"
                />
              </div>
            </div>

            <button onClick={() => this.createStaff()} id="create-staff">
              Create
            </button>
          </div>
        </div>
      </div>
    );
  }
}
