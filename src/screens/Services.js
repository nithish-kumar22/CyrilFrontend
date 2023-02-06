import React from "react";
import "../CSS/Services.css";
import { FaEdit } from "react-icons/fa";

export default class Services extends React.Component {
  componentDidMount() {
    const content = document.getElementById("container");
    const viewportHeight = window.innerHeight;

    if (content.offsetHeight > viewportHeight) {
      content.style.height = "100%";
    } else {
      content.style.height = "100vh";
    }
  }

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
    var table = document.getElementById("service-table");
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
            Services
          </p>

          <div id="service-filter">
            <input
              id="quick-search"
              type="text"
              placeholder="Quick Search services"
            />
            <button
              className="att-btn"
              id="add-services"
              onClick={() => this.openModal()}
            >
              Add services
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
            overflowY: "hidden",
          }}
        >
          <table id="service-table">
            <tr style={{ fontSize: "20px" }}>
              <th>Title</th>
              <th>Category</th>
              <th>Duration</th>
              <th>Price</th>
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
              <td>Individual Theraphy</td>
              <td>Small</td>
              <td>20.00 min</td>
              <td>$ 20.00 </td>
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
              <td>Couple Theraphy</td>
              <td>Small</td>
              <td>30.00 min</td>
              <td>$ 60.00 </td>
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
              <td>Individual Theraphy</td>
              <td>Large</td>
              <td>50.00 min</td>
              <td>$ 70.00 </td>
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
          <div style={{ marginBottom: "20px" }}>
            <button
              className="att-btn"
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
            <p onClick={() => this.closeEditModal()} class="close">
              <span>&times;</span>
            </p>
            <p style={{ fontWeight: "600" }}>Edit the service</p>
            <div id="edit-service-popup">
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
            <button onClick={() => this.saveMail()} id="edit-service-btn">
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}
