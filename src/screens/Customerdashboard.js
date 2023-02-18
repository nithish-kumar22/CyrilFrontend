import React from "react";
import Chart from "react-google-charts";
import "../CSS/Customerdashboard.css";
import { FaUserAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMale } from "react-icons/fa";

export default class Therapistdashboard extends React.Component {
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

  render() {
    return (
      <div id="container">
        <div id="page-title-div" style={{ height: "70px" }}>
          <div id="left-page-title">
            <p id="therapisttxt">Dashboard</p>
          </div>
        </div>
        <div id="customer-container">
          <div id="container-div">
            <div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <FaUserAlt
                  size={20}
                  color="#000"
                  style={{ marginTop: "5px" }}
                />
                <p style={{ marginLeft: "10px" }}>Cyriljm</p>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <FaPhoneAlt
                  size={20}
                  color="#000"
                  style={{ marginTop: "5px" }}
                />
                <p style={{ marginLeft: "10px" }}>9431309362</p>
              </div>
            </div>
            <div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <MdEmail size={23} color="#000" style={{ marginTop: "5px" }} />
                <p style={{ marginLeft: "10px" }}>cyril@yahoo.com</p>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <FaMale size={23} color="#000" style={{ marginTop: "5px" }} />
                <p style={{ marginLeft: "10px" }}>Male</p>
              </div>
              <button
                className="att-btn"
                style={{ padding: "5px", fontSize: "17px", width: "100px" }}
                onClick={() => this.openModal()}
              >
                Edit
              </button>
            </div>
          </div>
          <div id="customer-appointment-div">
            <div>
              <p style={{ fontWeight: "bold" }}>Last Appointment</p>
              <div style={{ animation: "search 2s ease-in-out" }}>
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
                    <p style={{ position: "relative", top: "8px" }}>February</p>
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
                    <p>08 (9.00AM)</p>
                    <p>15 (10.30AM)</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p style={{ fontWeight: "bold" }}>Upcoming Appointment</p>
              <div style={{ animation: "search 2s ease-in-out" }}>
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
                    <p style={{ position: "relative", top: "8px" }}>February</p>
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
                    <p>20 (9.00AM)</p>
                    <p>22 (10.30AM)</p>
                  </div>
                </div>
              </div>
            </div>
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

            <button
              className="att-btn"
              onClick={() => this.createStaff()}
              id="create-staff"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}
