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

  sendEmail = () => {
    var senderEmail = document.getElementById("sender-email");
    var receiverEmail = document.getElementById("receiver-email");
    var subject = document.getElementById("subject");
    var main = document.getElementById("main-body");
    if (
      senderEmail.value !== "" &&
      receiverEmail.value !== "" &&
      subject.value !== "" &&
      main.value !== ""
    ) {
      alert("Success");
    }
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
    var table = document.getElementById("email-table");
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
          <p id="email-sms-text">Email and SMS notification</p>

          <div id="email-filter-div">
            <input
              id="search"
              type="text"
              placeholder="Quick Search Customer"
            />
            <button id="send-new" onClick={() => this.openModal()}>
              Send New notification
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
            overflowX: "auto",
          }}
        >
          <table id="email-table">
            <tr style={{ fontSize: "20px" }}>
              <th>Receiver</th>
              <th>Desc</th>
              <th>State</th>
              <th>
                <input
                  type="checkbox"
                  name="check"
                  id="headercheckbox"
                  onClick={() => this.getHeaderCB()}
                />
              </th>
              <th></th>
            </tr>
            <tr>
              <td>abc@gmail.com</td>
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
              <td>xyz@gmail.com</td>
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
              <td>abc@gmail.com</td>
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
            paddingBottom: "30px",
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
            <p onClick={() => this.closeModal()} class="close">
              <span>&times;</span>
            </p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <p>Sender</p>
                <input
                  id="sender-email"
                  type="text"
                  placeholder="Enter sender email"
                />
                <p>Receiver</p>
                <input
                  id="receiver-email"
                  type="text"
                  placeholder="Enter receiver email"
                />
                <p>Subject</p>
                <input id="subject" type="text" placeholder="Enter subject" />
                <textarea
                  id="main-body"
                  style={{ width: "70%", marginTop: "20px", resize: "none" }}
                  rows={8}
                />
              </div>
            </div>

            <button onClick={() => this.sendEmail()} id="create-service">
              Send
            </button>
          </div>
        </div>
        <div id="extraModal" class="modal">
          <div class="modal-content">
            <p onClick={() => this.closeEditModal()} class="close">
              <span>&times;</span>
            </p>
            <p style={{ fontWeight: "600", fontSize: "20px" }}>Edit the mail</p>
            <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "space-evenly",
              }}
            >
              <div>
                <p>Description</p>
                <input
                  id="service-modal-title"
                  type="text"
                  className="padding-input"
                  placeholder="Enter description"
                />
                <p>State</p>
                <input
                  id="category-service-modal"
                  type="text"
                  className="padding-input"
                  placeholder="State"
                />
                <button onClick={() => this.saveMail()} id="create-service">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
