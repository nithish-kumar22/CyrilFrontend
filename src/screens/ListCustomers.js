import React from "react";
import "../CSS/ListCustomers.css";
import { FaEdit } from "react-icons/fa";

export default class ListCustomers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      customerdata: [
        {
          fullname: "Cyril Mathew",
          phone: "7867545442",
          email: "cyril@yahoo.com",
          therapist: "Mark P. Daye",
          gender: "Male",
          lastappointment: "24.01.22",
          totalappointments: 3,
          payment: "$20",
          //checkbox: <this.checkboxReactComponent />,
        },
        {
          fullname: "John",
          phone: "9942824",
          email: "john@yahoo.com",
          therapist: "Robo",
          gender: "Male",
          lastappointment: "24.01.22",
          totalappointments: 3,
          payment: "$30",
          //checkbox: <this.checkboxReactComponent />,
        },
      ],
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

  openModal = () => {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  };

  closeModal = () => {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  };

  checkboxReactComponent = () => {
    return (
      <div>
        <td>
          <input type="checkbox" name="check" className="servicecheckbox" />
        </td>
        <td>
          <FaEdit
            style={{ cursor: "pointer" }}
            onClick={(event) => this.editRow(event)}
          />
        </td>
      </div>
    );
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

  deletecustomer = () => {
    var checkbox = document.getElementsByClassName("servicecheckbox");
    var table = document.getElementById("customer-table");

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

  editRow = (event) => {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";

    var fullname = document.getElementById("full-name");
    var email = document.getElementById("email-customer");
    var therapist = document.getElementById("therapist-cust");
    var phone = document.getElementById("phone");

    var table = document.getElementById("customer-table");
    var id = event.target.parentNode.parentNode.rowIndex;

    fullname.value = table.rows[id].cells[0].innerHTML;
    email.value = table.rows[id].cells[2].innerHTML;
    therapist.value = table.rows[id].cells[3].innerHTML;
    phone.value = table.rows[id].cells[1].innerHTML;
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
              animation: "book-app 1s ease-in-out forwards",
            }}
          >
            Customers
          </p>

          <div id="filter-add-div">
            <input
              id="search-customer"
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
            overflowX: "auto",
            paddingTop: "50px",
            width: "95%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "20px",
          }}
        >
          <table id="customer-table">
            <tr style={{ fontSize: "20px" }}>
              <th>Full Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Therapist</th>
              <th>Gender</th>
              <th>Last Appointment</th>
              <th>Total Appointment</th>
              <th>Payment</th>
              <th>
                <input
                  id="headercheckbox"
                  type="checkbox"
                  name="check"
                  className="servicecheckbox"
                  onClick={() => this.getHeaderCB()}
                />
              </th>
              <th></th>
            </tr>

            {this.state.customerdata.map((val, key) => {
              return (
                <tr style={{ textAlign: "center" }} key={key}>
                  <td>{val.fullname}</td>
                  <td>{val.phone}</td>
                  <td>{val.email}</td>
                  <td>{val.therapist}</td>
                  <td>{val.gender}</td>
                  <td>{val.lastappointment}</td>
                  <td>{val.totalappointments}</td>
                  <td>{val.payment}</td>
                  <td>
                    <input
                      type="checkbox"
                      name="check"
                      className="servicecheckbox"
                    />
                  </td>
                  <td>
                    <FaEdit
                      style={{ cursor: "pointer" }}
                      onClick={(event) => this.editRow(event)}
                    />
                  </td>
                </tr>
              );
            })}

            {/* <tr>
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
            </tr> */}
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
            <button
              className="att-btn"
              onClick={() => this.deletecustomer()}
              style={{ width: "100px", padding: "5px" }}
            >
              Delete
            </button>
          </div>
        </div>
        <div id="myModal" class="modal">
          <div class="modal-content">
            <p onClick={() => this.closeModal()} class="close">
              <span>&times;</span>
            </p>
            <div id="customer-modal-div">
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
