import React from "react";
import "../CSS/Staff.css";
import { FaEdit } from "react-icons/fa";
import { ReactDOM } from "react";

export default class Staff extends React.Component {
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

  openExtraModal = () => {
    var extra = document.getElementById("extraModal");
    extra.style.display = "block";
  };

  closeExtraModal = () => {
    var extra = document.getElementById("extraModal");
    extra.style.display = "none";
  };

  createStaff = () => {
    var table = document.getElementById("table");

    var row = table.insertRow(-1);

    var fullnamecell = row.insertCell(0);

    var editBtn = row.insertCell(1);
    ReactDOM.render(
      <FaEdit
        style={{ cursor: "pointer" }}
        onClick={() => this.openExtraModal()}
      />,
      editBtn
    );
    // editBtn.innerHTML = (

    // );

    var modal = document.getElementById("myModal");
    modal.style.display = "none";
    var name = document.getElementById("full-name");
    fullnamecell.innerHTML = `<p>${name.value}</p>`;
    name.value = "";
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
          <div id="container">
            <p style={{ fontWeight: "600", fontSize: "18px" }}>
              Staff Members ( 1 )
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <input
                id="search-filter"
                type="text"
                placeholder="Quick search staff"
              />
              <input
                id="categories-filter"
                type="text"
                placeholder="Categories"
              />
              <button id="search-btn">Search</button>
            </div>
            <div
              style={{
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                paddingTop: "50px",
              }}
            >
              <table id="table">
                <tr style={{ fontSize: "20px" }}>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Services</th>
                </tr>
                <tr>
                  <td>John</td>
                  <td>cyrilm87@gmail.com</td>
                  <td>987654289</td>
                  <td>Individual therapy</td>
                  <td>
                    <FaEdit
                      style={{ cursor: "pointer" }}
                      onClick={() => this.openExtraModal()}
                    />
                  </td>
                </tr>
                <tr>
                  <td>John</td>
                  <td>cyrilm87@gmail.com</td>
                  <td>987654289</td>
                  <td>Individual therapy</td>
                  <td>
                    <FaEdit
                      style={{ cursor: "pointer" }}
                      onClick={() => this.openExtraModal()}
                    />
                  </td>
                </tr>
                <tr>
                  <td>John</td>
                  <td>cyrilm87@gmail.com</td>
                  <td>987654289</td>
                  <td>Individual therapy</td>
                  <td>
                    <FaEdit
                      style={{ cursor: "pointer" }}
                      onClick={() => this.openExtraModal()}
                    />
                  </td>
                </tr>
              </table>
            </div>
            <div
              id="button-div"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                paddingTop: "30px",
              }}
            >
              <button>Delete</button>
              <button id="create-staff-member" onClick={() => this.openModal()}>
                Create new staff member
              </button>
              <div id="myModal" class="modal">
                <div class="modal-content">
                  <p onClick={() => this.closeModal()} class="close">
                    <span>&times;</span>
                  </p>
                  <p style={{ fontWeight: "600" }}>Create a New Staff Member</p>
                  <p>Full name</p>
                  <input
                    id="full-name"
                    type="text"
                    placeholder="Enter full name"
                  />
                  <button onClick={() => this.createStaff()} id="create-staff">
                    Create
                  </button>
                </div>
              </div>
              <div id="extraModal" class="modal">
                <div class="modal-content">
                  <p onClick={() => this.closeExtraModal()} class="close">
                    <span>&times;</span>
                  </p>
                  <p style={{ fontWeight: "600" }}>Create a New Staff Member</p>
                  <p>Full name</p>
                  <input
                    id="full-name"
                    type="text"
                    placeholder="Enter full name"
                  />
                  <button onClick={() => this.createStaff()} id="create-staff">
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
