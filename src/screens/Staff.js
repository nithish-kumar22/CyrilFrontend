import React from "react";
import "../CSS/Staff.css";
import ReactDOM from "react-dom";
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
      staffData: [
        {
          name: "John",
          email: "cyrilm87@gmail.com",
          phone: "908765567",
          services: "Individual therapy",
        },
        {
          name: "Jack",
          email: "jack@gmail.com",
          phone: "908765567",
          services: "Couple therapy",
        },
      ],
      filteredData: [],
      searchTerm: "",
    };
  }

  componentDidUpdate() {
    const tableRows = document.querySelectorAll(
      "#staff-table tr:nth-child(even)"
    );
    tableRows.forEach((row) => {
      row.className = "fadeInAnim";
      const computedStyles = window.getComputedStyle(row);
      console.log(computedStyles.backgroundColor);
      const styleToApply = {
        backgroundColor: computedStyles.backgroundColor,

        // and so on
      };
      Object.assign(row.style, styleToApply);
    });
  }

  componentDidMount() {
    document.getElementById("defaultOpen").click();
    var day = document.getElementsByClassName("day");
    for (let i = 0; i < day.length; i++) {
      day[i].value = "Hello";
    }

    const content = document.getElementById("container");
    const viewportHeight = window.innerHeight;

    if (content.offsetHeight > viewportHeight) {
      content.style.height = "100%";
    } else {
      content.style.height = "100vh";
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

  getHeaderStaffCB = () => {
    var hcb = document.getElementById("headerstaffcheckbox");
    var checkbox = document.getElementsByClassName("staffcheckbox");

    if (hcb.checked) {
      for (let i = 0; i < checkbox.length; i++) checkbox[i].checked = true;
    }
    if (!hcb.checked) {
      for (let i = 0; i < checkbox.length; i++) checkbox[i].checked = false;
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

  deletestaff = () => {
    var checkbox = document.getElementsByClassName("staffcheckbox");
    var table = document.getElementById("staff-table");

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

  filterTable = () => {
    var searchTerm = document.getElementById("staff-search").value;
    var staffcat = document.getElementById("staff-categories").value;
    const filteredData = this.state.staffData.filter((row) => {
      return (
        row.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        row.services.toLowerCase().includes(staffcat.toLowerCase())
      );
    });
    this.setState({ filteredData: filteredData });
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

  editRow = (event) => {
    var extra = document.getElementById("edit-staff-modal");
    extra.style.display = "block";
    //var index = event.target.parentNode.parentNode.closest("tr").rowIndex;

    var saveStaff = document.getElementById("save-staff");
    saveStaff.onclick = () => {
      var checkbox = document.getElementsByClassName("servicecheckbox");
      var table = document.getElementById("payments-table");
      for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
          for (let j = 0; j < table.rows[i].cells.length - 1; j++) {
            alert(table.rows[i + 1].cells[j].innerHTML);
            if (this.state.data.services) {
            }
          }
        }
      }
    };
  };

  closeExtraModal = () => {
    var extra = document.getElementById("edit-staff-modal");
    extra.style.display = "none";
  };

  createStaff = () => {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";

    var table = document.getElementById("staff-table");
    var fullname = document.getElementById("staff-full-name");
    var row = table.insertRow(table.rows.length);

    row.className = "fadeInAnim";

    // var cell1 = row.insertCell(0);
    // var cell2 = row.insertCell(1);
    // var cell3 = row.insertCell(2);
    // var cell4 = row.insertCell(3);
    // var cell5 = row.insertCell(4);
    // var cell6 = row.insertCell(5);

    // cell1.innerHTML = fullname.value;
    // cell2.innerHTML = "";
    // cell3.innerHTML = "";
    // cell4.innerHTML = "";
    // cell5.innerHTML = ` <input
    //   type="checkbox"
    //   name="check"
    //   class="staffcheckbox"
    // />`;
    // ReactDOM.render(
    //   <FaEdit
    //     class="edit"
    //     size={20}
    //     color="#000"
    //     style={{ cursor: "pointer" }}
    //     onClick={(event) => this.editRow(event)}
    //   />,
    //   cell6
    // );

    this.setState((prevState) => ({
      staffData: [...prevState.staffData, { name: fullname.value }],
    }));
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
              fontWeight: "600",
              fontSize: "18px",
              animation: "book-app 2s ease-in-out forwards",
            }}
          >
            Staff Members ( 1 )
          </p>

          <div id="staff-filter">
            <input
              id="staff-search"
              type="text"
              placeholder="Quick search staff"
            />
            <input id="staff-categories" type="text" placeholder="Categories" />
            <button
              id="staff-search-btn"
              className="att-btn"
              onClick={() => this.filterTable()}
            >
              Search
            </button>
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
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Services</th>
              <th>
                <input
                  className="staffcheckbox"
                  id="headerstaffcheckbox"
                  type="checkbox"
                  name="check"
                  onClick={() => this.getHeaderStaffCB()}
                />
              </th>
              <th></th>
            </tr>
            {this.state.filteredData.length > 0
              ? this.state.filteredData.map((val, key) => {
                  return (
                    <tr>
                      <td>{val.name}</td>
                      <td>{val.email}</td>
                      <td>{val.phone}</td>
                      <td>{val.services}</td>
                      <td>
                        <input
                          className="staffcheckbox"
                          type="checkbox"
                          name="check"
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
                })
              : this.state.staffData.map((val, key) => {
                  return (
                    <tr style={{ fontSize: "20px" }}>
                      <td>{val.name}</td>
                      <td>{val.email}</td>
                      <td>{val.phone}</td>
                      <td>{val.services}</td>
                      <td>
                        <input
                          className="staffcheckbox"
                          type="checkbox"
                          name="check"
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
          <button
            className="att-btn"
            id="delete-staff"
            onClick={() => this.deletestaff()}
          >
            Delete
          </button>
          <button
            className="att-btn"
            id="create-staff-member"
            onClick={() => this.openModal()}
          >
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
                id="staff-full-name"
                type="text"
                placeholder="Enter full name"
              />
              <button
                className="att-btn"
                onClick={() => this.createStaff()}
                id="create-staff"
              >
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
                <table style={{ width: "100%" }}>
                  <tr style={{ borderBottom: "1px solid black" }}>
                    <th>
                      <input
                        id="headercheckbox"
                        type="checkbox"
                        name="check"
                        className="servicecheckbox"
                        onClick={() => this.getHeaderCB()}
                      />
                    </th>
                    <th>All services</th>
                    <th>Price</th>
                  </tr>
                  {this.state.data.map((val, key) => {
                    return (
                      <tr style={{ textAlign: "center" }} key={key}>
                        <td>
                          <input
                            type="checkbox"
                            name="check"
                            className="servicecheckbox"
                          />
                        </td>
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
                    className="att-btn"
                    style={{ justifyContent: "center" }}
                    onClick={() => this.addslot()}
                  >
                    Add new slots
                  </button>
                </div>
              </div>

              <button className="att-btn" id="save-staff">
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
