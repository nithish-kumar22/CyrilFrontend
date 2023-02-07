import React from "react";
import ReactDOM from "react-dom";

import "../CSS/Services.css";
import { FaEdit } from "react-icons/fa";

export default class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      serviceData: [
        {
          title: "Individual therapy",
          category: "Small",
          duration: "20.00min",
          price: "$20",
        },
        {
          title: "Couple therapy",
          category: "Large",
          duration: "30.00min",
          price: "$40",
        },
      ],
      filteredData: [],
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

  editRow = (event) => {
    console.log(event.target.parentNode.parentNode.closest("tr").rowIndex);
    var extra = document.getElementById("extraModal");
    extra.style.display = "block";

    var title = document.getElementById("service-modal-title");
    var category = document.getElementById("category-service-modal");
    //var provider = document.getElementById("service-provier");
    var duration = document.getElementById("service-duration");
    var price = document.getElementById("service-price");

    var table = document.getElementById("service-table");
    var id = event.target.parentNode.parentNode.rowIndex;

    title.value = table.rows[id].cells[0].innerHTML;
    category.value = table.rows[id].cells[1].innerHTML;
    //provider.value = table.rows[id].cells[3].innerHTML;
    duration.value = table.rows[id].cells[2].innerHTML;
    price.value = table.rows[id].cells[3].innerHTML;
  };

  closeEditModal = () => {
    var extra = document.getElementById("extraModal");
    extra.style.display = "none";
  };

  createService = () => {
    var serviceTitle = document.getElementById("service-title-modal");
    var table = document.getElementById("service-table");

    var row = table.insertRow(table.rows.length);

    row.className = "fadeInAnim";

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    cell1.innerHTML = serviceTitle.value;
    cell2.innerHTML = "";
    cell3.innerHTML = "";
    cell4.innerHTML = "";
    cell5.innerHTML = ` <input
    type="checkbox"
    name="check"
    class="servicecheckbox"
  />`;
    ReactDOM.render(
      <FaEdit
        class="edit"
        size={20}
        color="#000"
        style={{ cursor: "pointer" }}
        onClick={(event) => this.editRow(event)}
      />,
      cell6
    );

    // this.setState((prevState) => ({
    //   serviceData: [...prevState.data, { title: serviceTitle.value }],
    // }));
  };

  filterTable = () => {
    var searchTerm = document.getElementById("service-search").value;
    var staffcat = document.getElementById("service-categories").value;
    const filteredData = this.state.serviceData.filter((row) => {
      return (
        row.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        row.category.toLowerCase().includes(staffcat.toLowerCase())
      );
    });
    this.setState({ filteredData: filteredData });
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
          //alert(table.rows[i + 1].cells[j].innerHTML);
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
              id="service-search"
              type="text"
              placeholder="Quick Search services"
              style={{ animation: "search-btn 2s ease-in-out forwards" }}
            />
            <input
              id="service-categories"
              type="text"
              placeholder="Categories"
              style={{ animation: "search 2s ease-in-out forwards" }}
            />

            <button
              className="att-btn"
              id="search-services"
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
                  className="servicecheckbox"
                  type="checkbox"
                  name="check"
                  id="headercheckbox"
                  onClick={() => this.getHeaderCB()}
                />
              </th>
              <th></th>
            </tr>
            {this.state.filteredData.length > 0
              ? this.state.filteredData.map((val, key) => {
                  return (
                    <tr>
                      <td>{val.title}</td>
                      <td>{val.category}</td>
                      <td>{val.duration}</td>
                      <td>{val.price}</td>
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
                  );
                })
              : this.state.serviceData.map((val, key) => {
                  return (
                    <tr>
                      <td>{val.title}</td>
                      <td>{val.category}</td>
                      <td>{val.duration}</td>
                      <td>{val.price}</td>
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
                  );
                })}
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
            <button
              className="att-btn"
              id="add-services"
              onClick={() => this.openModal()}
            >
              Add services
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
                  id="service-title-modal"
                  type="text"
                  placeholder="Enter title"
                />
              </div>
            </div>

            <button
              className="att-btn"
              onClick={() => this.createService()}
              id="create-service"
            >
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
