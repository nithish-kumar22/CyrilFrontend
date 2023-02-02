import React from "react";
import "../CSS/Staff.css";
import { FaEdit } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

export default class Staff extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { services: "Individual therapy", price: "$19" },
        { services: "Couple therapy", price: "$19" },
      ],
    };
  }

  componentDidMount() {
    document.getElementById("defaultOpen").click();
    var day = document.getElementsByClassName("day");
    for (let i = 0; i < day.length; i++) {
      day[i].value = "Hello";
    }
  }

  addslot = () => {
    //var tsc = document.getElementById("ts-container");
    var ts = document.getElementById("ts-container-staff");
    ts.insertAdjacentHTML(
      "beforeend",
      `
      <div style={{display: flex;
    
        padding-bottom: 30px;
        flex-direction: row;}}>
      <div style=" display: flex;
        flex-direction: ${window.screen.width <= 600 ? "column" : "row"};
        padding-top: 20px">
    <input
    class="day"
    type="text"
    placeholder="Enter day"
    style="
      padding: 5px;
      width: 100px;
      margin-left: 20px;
    "
  />
    <input
    class="start-time"
    type="text"
    placeholder="Enter start time"
    style="
      padding: 5px;
      width: 100px;
      margin-left: 20px;
    "
    />
    <input
    class="end-time"
    type="text"
    placeholder="Enter end time"
    style="
      padding: 5px;
      width: 100px;
      margin-left: 20px;
    "
    />
    </div>
  </div>`
    );
  };

  openContent = (evt, tabName) => {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  };

  openModal = () => {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  };

  closeModal = () => {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  };

  openExtraModal = () => {
    var extra = document.getElementById("edit-staff-modal");
    extra.style.display = "block";
  };

  closeExtraModal = () => {
    var extra = document.getElementById("edit-staff-modal");
    extra.style.display = "none";
  };

  createStaff = () => {
    var table = document.getElementById("table");

    var row = table.insertRow(-1);

    var fullnamecell = row.insertCell(0);

    //var editBtn = row.insertCell(1);
    // ReactDOM.render(
    //   <FaEdit
    //     style={{ cursor: "pointer" }}
    //     onClick={() => this.openExtraModal()}
    //   />,
    //   editBtn
    // );
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
          <p style={{ fontWeight: "600", fontSize: "18px" }}>
            Staff Members ( 1 )
          </p>

          <div id="staff-filter">
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
            <button id="staff-search-btn">Search</button>
          </div>
        </div>
        <div
          style={{
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            paddingTop: "50px",
            overflowX: "auto",
          }}
        >
          <table id="staff-table">
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
          id="button-bottom-staff-div"
          style={{
            display: "flex",
            justifyContent: "center",
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
              <input id="full-name" type="text" placeholder="Enter full name" />
              <button onClick={() => this.createStaff()} id="create-staff">
                Create
              </button>
            </div>
          </div>
          <div id="edit-staff-modal" class="modal">
            <div class="modal-content">
              <p onClick={() => this.closeExtraModal()} class="close">
                <span>&times;</span>
              </p>
              <p style={{ fontWeight: "600" }}>Create a New Staff Member</p>
              <div class="staff-tab">
                <button
                  class="tablinks"
                  id="defaultOpen"
                  onClick={(event) => this.openContent(event, "details")}
                >
                  Details
                </button>
                <button
                  class="tablinks"
                  onClick={(event) => this.openContent(event, "services")}
                >
                  Services
                </button>
                <button
                  class="tablinks"
                  onClick={(event) => this.openContent(event, "schedule")}
                >
                  Schedule
                </button>
              </div>
              <div id="details" class="tabcontent">
                <div id="edit-staff-details">
                  <div id="edit-staff-details-bottom">
                    <p>Name</p>
                    <input
                      style={{ padding: "5px" }}
                      type="text"
                      placeholder="Enter name"
                    />
                    <p>Email</p>
                    <input
                      style={{ padding: "5px" }}
                      type="text"
                      placeholder="Enter email"
                    />
                    <p>Phone</p>
                    <input
                      style={{ padding: "5px" }}
                      type="text"
                      placeholder="Enter phone"
                    />
                    <p>Description</p>
                    <textarea rows={4} />
                  </div>
                  <div>
                    <div id="placeholder-staff-image">
                      <FaUserCircle size={100} />
                    </div>
                  </div>
                </div>
              </div>

              <div id="services" class="tabcontent">
                <table style={{ width: "100%", border: "none" }}>
                  <tr>
                    <th style={{ borderBottom: "1px solid black" }}>
                      All services
                    </th>
                    <th style={{ borderBottom: "1px solid black" }}>Price</th>
                  </tr>
                  {this.state.data.map((val, key) => {
                    return (
                      <tr style={{ textAlign: "center" }} key={key}>
                        <td>{val.services}</td>
                        <td>{val.price}</td>
                      </tr>
                    );
                  })}
                </table>
              </div>

              <div id="schedule" class="tabcontent">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <div id="ts-container-staff">
                    <div id="ts-staff">
                      <input
                        id="staff-ts-day"
                        className="day"
                        type="text"
                        placeholder="Enter day"
                      />

                      <input
                        id="staff-ts-start"
                        className="Start-time"
                        type="text"
                        placeholder="Enter start time"
                      />
                      <input
                        id="staff-ts-end"
                        className="end-time"
                        type="text"
                        placeholder="Enter end time"
                      />
                    </div>
                  </div>
                  <button
                    style={{ justifyContent: "center" }}
                    onClick={() => this.addslot()}
                  >
                    Add new slots
                  </button>
                </div>
              </div>

              <button onClick={() => this.editStaff()} id="create-staff">
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
