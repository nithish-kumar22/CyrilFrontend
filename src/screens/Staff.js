import React from "react";
import "../CSS/Staff.css";
import ReactDOM from "react-dom";
import { FaEdit } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import axios from "axios";
import Cookies from "js-cookie";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class Staff extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      staffData: [],
      filteredData: [],
      searchTerm: "",
      id: null,
      token: Cookies.get("jwtToken") || "",
      selectedRows: [],
      selectedServiceRows: [],
      tsdata: [],
      dates: [],
      selectedDate: new Date(),
    };
  }

  componentDidUpdate() {
    const tableRows = document.querySelectorAll(
      "#staff-table tr:nth-child(even)"
    );
    tableRows.forEach((row) => {
      row.className = "fadeInAnim";
      const computedStyles = window.getComputedStyle(row);

      const styleToApply = {
        backgroundColor: computedStyles.backgroundColor,

        // and so on
      };
      Object.assign(row.style, styleToApply);
    });
  }

  async componentDidMount() {
    document.getElementById("defaultOpen").click();

    const content = document.getElementById("container");
    const viewportHeight = window.innerHeight;

    if (content.offsetHeight > viewportHeight) {
      content.style.height = "100%";
    } else {
      content.style.height = "100vh";
    }

    await axios
      .get("http://localhost:1337/api/therapists", {
        headers: {
          Authorization: `Bearer ${this.state.token}`,
        },
      })
      .then((res) => {
        var resArray = [];

        for (var i = 0; i < res.data.data.length; i++) {
          resArray.push(res.data.data[i]);
        }
        this.setState({ staffData: resArray });
      })
      .catch((err) => console.log(err));
  }

  addslot = () => {
    var table = document.getElementById("ts-table");
    var row = table.insertRow(table.rows.length);

    row.className = "fadeInAnim";

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    ReactDOM.render(
      // <DatePicker
      //   id="staff-date-picker"
      //   className="staff-date"
      //   selected={this.state.selectedDate}
      //   onChange={(date) => {
      //     this.setState({ selectedDate: date });
      //     // this.setState((prevState) => ({
      //     //   dates: [...prevState.dates, { date: date }],
      //     // }));
      //   }}
      //   minDate={new Date()}
      //   dateFormat="dd/MM/yyyy"
      // />
      <input
        id="staff-ts-day"
        className="day"
        type="text"
        placeholder="Enter day"
        value={val.day}
      />,
      cell1
    );

    cell2.innerHTML = ` <input
    id="staff-ts-start"
    class="start-time"
    type="text"
    placeholder="Enter start time"
    
  />`;
    cell3.innerHTML = `<input
    id="staff-ts-end"
    class="end-time"
    type="text"
    placeholder="Enter end time"
    
  />`;

    //var tsc = document.getElementById("ts-container");
    //   var ts = document.getElementById("ts-container-staff");
    //   ts.insertAdjacentHTML(
    //     "beforeend",
    //     `
    //     <div style={{display: flex;

    //       padding-bottom: 30px;
    //       flex-direction: row;}}>
    //     <div style=" display: flex;
    //       flex-direction: ${window.screen.width <= 600 ? "column" : "row"};
    //       padding-top: 20px">
    //   <input
    //   class="day"
    //   type="text"
    //   placeholder="Enter day"
    //   style="
    //     padding: 5px;
    //     width: 100px;
    //     margin-left: 20px;
    //   "
    // />
    //   <input
    //   class="start-time"
    //   type="text"
    //   placeholder="Enter start time"
    //   style="
    //     padding: 5px;
    //     width: 100px;
    //     margin-left: 20px;
    //   "
    //   />
    //   <input
    //   class="end-time"
    //   type="text"
    //   placeholder="Enter end time"
    //   style="
    //     padding: 5px;
    //     width: 100px;
    //     margin-left: 20px;
    //   "
    //   />
    //   </div>
    // </div>`
    //   );
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

  // getHeaderCB = () => {
  //   var hcb = document.getElementById("headercheckbox");
  //   var checkbox = document.getElementsByClassName("servicecheckbox");

  //   if (hcb.checked) {
  //     for (let i = 0; i < checkbox.length; i++) checkbox[i].checked = true;
  //   }
  //   if (!hcb.checked) {
  //     for (let i = 0; i < checkbox.length; i++) checkbox[i].checked = false;
  //   }
  // };

  deleteService = async () => {
    var checkbox = document.getElementsByClassName("servicemodalcheckbox");
    var table = document.getElementById("staff-service-table");

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

  deletestaff = async () => {
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

    var ids = this.state.selectedRows;

    for (let j = 0; j < ids.length; j++) {
      await fetch(`http://localhost:1337/api/therapists/${ids[j]}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${this.state.token}`,
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log("Customer deleted");
        })
        .catch((e) => {
          alert(e.error.message);
        });
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

  handleRowSelect = (id) => {
    const { selectedRows } = this.state;
    const index = selectedRows.indexOf(id);
    if (index !== -1) {
      selectedRows.splice(index, 1);
    } else {
      selectedRows.push(id);
    }
    this.setState({ selectedRows });
  };

  handleServiceRowSelect = (id) => {
    const { selectedServiceRows } = this.state;
    const index = selectedServiceRows.indexOf(id);
    if (index !== -1) {
      selectedServiceRows.splice(index, 1);
    } else {
      selectedServiceRows.push(id);
    }
    this.setState({ selectedServiceRows });
  };

  openModal = () => {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  };

  closeModal = () => {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  };

  handleDateChange = (index, date) => {
    const newDates = [...this.state.dates];
    newDates[index].date = new Date(date);
    this.setState({ dates: newDates });
  };

  editRow = async (event) => {
    var extra = document.getElementById("edit-staff-modal");
    extra.style.display = "block";
    //var index = event.target.parentNode.parentNode.closest("tr").rowIndex;

    var name = document.getElementById("edit-staff-name");
    var email = document.getElementById("edit-staff-email");
    var phone = document.getElementById("edit-staff-phone");
    var desc = document.getElementById("edit-desc");

    var table = document.getElementById("staff-table");
    //var id = event.target.parentNode.parentNode.rowIndex;
    var id = event.target.parentNode.parentNode.closest("tr").rowIndex;
    name.value = table.rows[id].cells[0].innerHTML;
    email.value = table.rows[id].cells[1].innerHTML;
    desc.value = table.rows[id].cells[2].innerHTML;
    phone.value = table.rows[id].cells[2].innerHTML;

    await axios
      .get("http://localhost:1337/api/therapists", {
        headers: {
          Authorization: `Bearer ${this.state.token}`,
        },
      })
      .then((res) => {
        var resArray = [];

        for (var i = 0; i < res.data.data.length; i++) {
          if (res.data.data[i].attributes.name === name.value) {
            for (
              var j = 0;
              j < res.data.data[i].attributes.timeslot.length;
              j++
            )
              resArray.push(res.data.data[i].attributes.timeslot[j]);
          }
        }

        this.setState({ dates: resArray });
      })
      .catch((err) => console.log(err));

    await axios
      .get("http://localhost:1337/api/events", {
        headers: {
          Authorization: `Bearer ${this.state.token}`,
        },
      })
      .then((res) => {
        var resArray = [];
        var tsArray = [];
        for (var i = 0; i < res.data.data.length; i++) {
          if (res.data.data[i].attributes.therapist === name.value) {
            for (
              let j = 0;
              j < res.data.data[i].attributes.service.length;
              j++
            ) {
              resArray.push(res.data.data[i].attributes.service[j]);
            }
            for (
              let j = 0;
              j < res.data.data[i].attributes.timeslot.length;
              j++
            ) {
              tsArray.push(res.data.data[i].attributes.timeslot[j]);
            }
          }
        }
        this.setState({ data: resArray });
        //this.setState({ tsdata: tsArray });
      })
      .catch((err) => console.log(err));

    // var saveStaff = document.getElementById("save-staff");
    // saveStaff.onclick = () => {
    //   var checkbox = document.getElementsByClassName("servicecheckbox");
    //   var table = document.getElementById("payments-table");
    //   for (let i = 0; i < checkbox.length; i++) {
    //     if (checkbox[i].checked) {
    //       for (let j = 0; j < table.rows[i].cells.length - 1; j++) {
    //         alert(table.rows[i + 1].cells[j].innerHTML);
    //         if (this.state.data.services) {
    //         }
    //       }
    //     }
    //   }
    // };
  };

  updateStaff = async () => {
    var name = document.getElementById("edit-staff-name");
    var email = document.getElementById("edit-staff-email");
    var phone = document.getElementById("edit-staff-phone");
    var desc = document.getElementById("edit-desc");

    var start = document.getElementsByClassName("start-time");
    var end = document.getElementsByClassName("end-time");
    var days = document.getElementsByClassName("day");
    var array = [];

    for (let i = 0; i < start.length; i++) {
      array.push({
        day: days[i].value,
        ts: `${start[i].value} - ${end[i].value}`,
      });
    }

    this.setState({ data: array });

    console.log(array);

    await fetch(`http://localhost:1337/api/therapists/${this.state.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${this.state.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          name: name.value,
          email: email.value,
          phone: phone.value,
          description: desc.value,
          timeslot: array,
        },
      }),
    })
      .then((res) => {
        alert("Staff details updated");
        this.closeExtraModal();
      })
      .catch((e) => {
        alert(e.error.message);
      });
  };

  closeExtraModal = () => {
    var extra = document.getElementById("edit-staff-modal");
    extra.style.display = "none";
  };

  createStaff = async () => {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";

    var table = document.getElementById("staff-table");
    var fullname = document.getElementById("staff-full-name");
    var row = table.insertRow(table.rows.length);

    row.className = "fadeInAnim";

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    cell1.innerHTML = fullname.value;
    cell2.innerHTML = "";
    cell3.innerHTML = "";
    cell4.innerHTML = "";
    cell5.innerHTML = ` <input
      type="checkbox"
      name="check"
      class="staffcheckbox"
    />`;
    ReactDOM.render(
      <FaEdit
        class="edit"
        size={20}
        color="#000"
        style={{ cursor: "pointer" }}
        onClick={(event) => {
          this.editRow(event);
          //this.setState({ id: val.id });
        }}
      />,
      cell6
    );

    // this.setState((prevState) => ({
    //   staffData: [
    //     ...prevState.staffData,
    //     { attributes: { name: fullname.value } },
    //   ],
    // }));

    await fetch(`http://localhost:1337/api/therapists/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.state.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          name: fullname.value,
        },
      }),
    })
      .then((r) => {
        console.log(r);
        alert("New staff created");
        this.closeModal();
      })
      .catch((e) => alert(e.error.message));
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
            <div>
              <FaPhoneAlt color="#000" size={17} />
              <p>8714772868</p>
            </div>
            <div>
              <MdEmail color="#000" size={17} />
              <p>cyriljon@yahoo.com</p>
            </div>
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
            overflowY: "hidden",
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
                      <td>{val.attributes.name}</td>
                      <td>{val.attributes.email}</td>
                      <td>{val.attributes.phone}</td>
                      <td>{val.attributes.services}</td>
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
                          onClick={(event) => {
                            this.editRow(event);
                            this.setState({ id: val.id });
                          }}
                        />
                      </td>
                    </tr>
                  );
                })
              : this.state.staffData.map((val, key) => {
                  return (
                    <tr style={{ fontSize: "20px" }}>
                      <td>
                        {val.attributes.name == null ? "" : val.attributes.name}
                      </td>
                      <td>
                        {val.attributes.email == null
                          ? ""
                          : val.attributes.email}
                      </td>
                      <td>
                        {val.attributes.phone == null
                          ? ""
                          : val.attributes.phone}
                      </td>
                      <td>
                        {val.attributes.services == null
                          ? ""
                          : val.attributes.services[0].service}
                      </td>
                      <td>
                        <input
                          className="staffcheckbox"
                          type="checkbox"
                          name="check"
                          checked={this.state.selectedRows.includes(val.id)}
                          onClick={() => this.handleRowSelect(val.id)}
                        />
                      </td>
                      <td>
                        <FaEdit
                          style={{ cursor: "pointer" }}
                          onClick={(event) => {
                            this.editRow(event);
                            this.setState({ id: val.id });
                          }}
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
                      id="edit-staff-name"
                      style={{ padding: "5px" }}
                      type="text"
                      placeholder="Enter name"
                    />
                    <p>Email</p>
                    <input
                      id="edit-staff-email"
                      style={{ padding: "5px" }}
                      type="text"
                      placeholder="Enter email"
                    />
                    <p>Phone</p>
                    <input
                      id="edit-staff-phone"
                      style={{ padding: "5px" }}
                      type="text"
                      placeholder="Enter phone"
                    />
                    <p>Description</p>
                    <textarea id="edit-desc" rows={4} />
                  </div>
                  <div>
                    <div id="placeholder-staff-image">
                      <FaUserCircle size={100} />
                    </div>
                  </div>
                </div>
              </div>

              <div id="services" class="tabcontent">
                <table style={{ width: "100%" }} id="staff-service-table">
                  <tr style={{ borderBottom: "1px solid black" }}>
                    <th>
                      {/* <input
                        id="headercheckbox"
                        type="checkbox"
                        name="check"
                        className="servicecheckbox"
                        onClick={() => this.getHeaderCB()}
                      /> */}
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
                            className="servicemodalcheckbox"
                            checked={this.state.selectedServiceRows[key]}
                            onClick={() => this.handleServiceRowSelect(val.id)}
                          />
                        </td>
                        <td>{val.service}</td>
                        <td>{val.price}</td>
                      </tr>
                    );
                  })}
                </table>
                <button
                  className="att-btn"
                  onClick={() => this.deleteService()}
                >
                  Delete
                </button>
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
                  {/* <div id="ts-container-staff">
                    <div id="ts-staff"> */}
                  <table id="ts-table">
                    {this.state.dates.map((val, key) => {
                      //console.log(val.date);
                      const timeString = val.start;

                      const time = new Date(`${val.date} ${timeString}`);

                      console.log(time);
                      return (
                        <tr>
                          <td>
                            {/* <DatePicker
                              id="staff-date-picker"
                              className="staff-date"
                              selected={new Date(val.date)}
                              onChange={(date) => {
                                this.handleDateChange(key, date);
                                // this.setState((prevState) => ({
                                //   selectedDates: [
                                //     ...prevState.selectedDates,
                                //     date,
                                //   ],
                                // }));
                              }}
                              minDate={new Date()}
                              dateFormat="h:mm aa"
                            /> */}
                            <input
                              id="staff-ts-day"
                              className="day"
                              type="text"
                              placeholder="Enter day"
                              value={val.day}
                            />
                          </td>
                          <td>
                            {/* <DatePicker
                              id="staff-start-picker"
                              className="staff-start"
                              selected={timeObject}
                              showTimeSelect
                              showTimeSelectOnly
                              timeIntervals={15}
                              dateFormat="h:mm aa"
                              timeCaption="Time"
                            /> */}
                            <input
                              id="staff-ts-start"
                              className="start-time"
                              type="text"
                              placeholder="Enter start time"
                              value={val.start}
                            />
                          </td>
                          <td>
                            {/* <DatePicker
                              id="staff-end-picker"
                              className="staff-end"
                              selected={val.end}
                              showTimeSelect
                              showTimeSelectOnly
                              timeIntervals={15}
                              dateFormat="h:mm aa"
                              timeCaption="Time"
                            /> */}
                            <input
                              id="staff-ts-end"
                              className="end-time"
                              type="text"
                              placeholder="Enter end time"
                              value={val.end}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </table>
                  {/* </div>
                  </div> */}
                  <button
                    className="att-btn"
                    style={{ justifyContent: "center" }}
                    onClick={() => this.addslot()}
                  >
                    Add new slots
                  </button>
                </div>
              </div>

              <button
                className="att-btn"
                id="save-staff"
                onClick={() => this.updateStaff()}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
