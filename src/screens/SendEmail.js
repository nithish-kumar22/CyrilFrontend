import React from "react";
import "../CSS/SendEmail.css";
import { FaEdit } from "react-icons/fa";

export default class SendEmail extends React.Component {
  editRow = (event) => {
    console.log(event.target.parentNode.parentNode.closest("tr").rowIndex);
    var extra = document.getElementById("extraModal");
    extra.style.display = "block";
  };

  closeEditModal = () => {
    var extra = document.getElementById("extraModal");
    extra.style.display = "none";
  };

  createService = () => {
    var serviceTitle = document.getElementById("service-title");
    alert(serviceTitle.value);
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

  delete = () => {
    var checkbox = document.getElementsByClassName("servicecheckbox");
    var table = document.getElementById("table");
    for (let i = 0; i < checkbox.length; i++) {
      if (checkbox[i].checked) {
        for (let j = 0; j < table.rows[i].cells.length - 1; j++) {
          alert(table.rows[i + 1].cells[j].innerHTML);
        }
      }
    }
  };

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
          <p style={{ fontWeight: "700", fontSize: "30px" }}>
            Email and SMS notification
          </p>

          <div style={{ display: "inline-block" }}>
            <input
              id="search"
              type="text"
              placeholder="Quick Search Customer"
            />
            <button id="add-customer" onClick={() => this.openModal()}>
              New notification
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
              <th>Name</th>
              <th>State</th>
              <th>
                <input
                  type="checkbox"
                  name="check"
                  id="headercheckbox"
                  onClick={() => this.getHeaderCB()}
                />
              </th>
            </tr>
            <tr>
              <td>Appointment approval to customer</td>
              <td>Enabled</td>
              <td>
                <input
                  type="checkbox"
                  name="check"
                  className="servicecheckbox"
                />
                &nbsp;
              </td>
              <td>
                <FaEdit
                  className="edit"
                  size={20}
                  color="#000"
                  style={{ cursor: "pointer" }}
                  onClick={(event) => this.editRow(event)}
                />
              </td>
            </tr>
            <tr>
              <td>Appointment approval to customer</td>
              <td>Enabled</td>
              <td>
                <input
                  type="checkbox"
                  name="check"
                  className="servicecheckbox"
                />
                &nbsp;
              </td>
              <td>
                <FaEdit
                  className="edit"
                  size={20}
                  color="#000"
                  style={{ cursor: "pointer" }}
                  onClick={(event) => this.editRow(event)}
                />
              </td>
            </tr>
            <tr>
              <td>Appointment approval to customer</td>
              <td>Enabled</td>
              <td>
                <input
                  type="checkbox"
                  name="check"
                  className="servicecheckbox"
                />
                &nbsp;
              </td>
              <td>
                <FaEdit
                  className="edit"
                  size={20}
                  color="#000"
                  style={{ cursor: "pointer" }}
                  onClick={(event) => this.editRow(event)}
                />
              </td>
            </tr>
          </table>
        </div>
        <div
          style={{
            width: "65vw",
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "row",
            paddingTop: "30px",
          }}
        >
          <div>
            <button
              onClick={() => this.delete()}
              style={{ width: "100px", padding: "5px" }}
            >
              Delete
            </button>
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
                <p>Title</p>
                <input
                  id="service-title"
                  type="text"
                  placeholder="Enter title"
                />
              </div>
            </div>

            <button onClick={() => this.createService()} id="create-service">
              Create
            </button>
          </div>
        </div>
        <div id="extraModal" class="modal">
          <div class="modal-content">
            <p
              onClick={() => this.closeEditModal()}
              class="close"
              style={{ position: "relative", bottom: "30px" }}
            >
              <span>&times;</span>
            </p>
            <p style={{ fontWeight: "600" }}>Edit the service</p>
            <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "space-evenly",
              }}
            >
              <div>
                <p>Title</p>
                <input
                  id="service-modal-title"
                  type="text"
                  className="padding-input"
                  placeholder="Enter title"
                />
                <p>Category</p>
                <input
                  id="category-service-modal"
                  type="text"
                  className="padding-input"
                  placeholder="Enter category"
                />
                <p>Notes</p>
                <textarea id="service-notes" rows={4} />
              </div>
              <div>
                <p>Provider</p>
                <input
                  id="service-provier"
                  className="padding-input"
                  type="text"
                  placeholder="Enter provider"
                />
                <p>Duration</p>
                <input
                  id="service-duration"
                  className="padding-input"
                  type="number"
                  placeholder="Enter duration"
                />
                <p>Price</p>
                <input
                  id="service-price"
                  className="padding-input"
                  type="number"
                  placeholder="Enter price"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
