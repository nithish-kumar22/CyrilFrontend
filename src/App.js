
import React from 'react';
import { Component } from 'react';
import './App.css';



export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { expandedRows: [] };
  }

  players = [
    {
      id: 10,
      firstName: "Earvin",
      lastName: "Johnson",
      college: "Michigan State",
      team: "LA Lakers",
      stats: {
        height: "6-9",
        weight: "215 lbs",
        position: "Shooting Guard"
      }
    },
    {
      id: 20,
      firstName: "Michael",
      lastName: "Jordan",
      college: "Michigan State",
      team: "Chicago Bulls",
      projects: [
        {
          id: "1",
          name: "test 1"
        },
        {
          id: "2",
          name: "test 2"
        },
        {
          id: "3",
          name: "test 3"
        }
      ],
      stats: {
        height: "6-6",
        weight: "195 lbs",
        position: "Small Forward"
      }
    },
    {
      id: 30,
      firstName: "Lebron",
      lastName: "James",
      college: "NA",
      team: "LA Lakers",
      projects: [
        {
          id: "1",
          name: "test 1"
        },
        {
          id: "2",
          name: "test 2"
        },
        {
          id: "3",
          name: "test 3"
        }
      ],
      stats: {
        height: "6-8",
        weight: "250 lbs",
        position: "Shooting Guard"
      }
    }
  ]



  handleExpand = player => {
    let newExpandedRows = [...this.state.expandedRows];
    let allExpanded = this.state.allExpanded;
    let idxFound = newExpandedRows.findIndex(id => {
      return id === player.id;
    });

    if (idxFound > -1) {
      console.log("Collapsing " + player.firstName + " " + idxFound);
      newExpandedRows.splice(idxFound, 1);
    } else {
      console.log("Expanding " + player.firstName);
      newExpandedRows.push(player.id);
    }

    console.log("Expanded rows");
    console.log(newExpandedRows);

    this.setState({ expandedRows: [...newExpandedRows] });
  };

  isExpanded = player => {
    const idx = this.state.expandedRows.find(id => {
      return id === player.id;
    });

    return idx > -1;
  };

  expandAll = players => {
    console.log("ExapndedRows: " + this.state.expandedRows.length);
    console.log("Players:      " + players.length);
    if (this.state.expandedRows.length === players.length) {
      let newExpandedRows = [];
      this.setState({ expandedRows: [...newExpandedRows] });
      console.log("Collapsing all...");
    } else {
      let newExpandedRows = players.map(player => player.id);
      this.setState({ expandedRows: [...newExpandedRows] });
      console.log("Expanding all...");
      console.log("Expanded rows " + newExpandedRows.length);
    }
  };

  getRows = player => {
    let rows = [];
    const projects = player.projects || [];

    const firstRow = (
      <tr>
        <td>{player.firstName}</td>
        <td>{player.lastName}</td>
        <td>{player.team}</td>
        <td>
          {projects.length > 0 && (
            <button onClick={() => this.handleExpand(player)}>
              {this.isExpanded(player) ? "-" : "+"}
            </button>
          )}
        </td>
      </tr>
    );

    rows.push(firstRow);

    if (this.isExpanded(player) && projects.length > 0) {
      const projectRows = projects.map(project => (
        <tr className="player-details">
          <td className="player-details" />
          <td colspan="3" className="player-details">
            <br />
            <div className="attribute">
              <div className="attribute-name">Toggle Here: </div>
              <div className="attribute-value">{project.name}</div>
            </div>
            <br />
          </td>
        </tr>
      ));

      rows.push(projectRows);
    }

    return rows;
  };

  getPlayerTable = players => {
    const playerRows = players.map(player => {
      return this.getRows(player);
    });

    return (
      <table className="therapist-table">
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Team</th>
          <th onClick={() => this.expandAll(players)}>
            <button>
              {players.length === this.state.expandedRows.length ? "-" : "+"}
            </button>
          </th>
        </tr>
        {playerRows}
      </table>
    );
  };


render() {
  return (
    <div className="App">
      <div id="top-bar">
        <div id='top-left'>
          <p id='cyril'>Cyril John Mathew    |   </p>
          <p id='hpy'>Happiness sustains!</p>
        </div>
        <div id='top-right'>
          <p>8714772862</p>
          <p>cyriljon@yahoo.com</p>
        </div>
      </div>
      <div id='page-title-div'>
        <div id='left-page-title'>
          <p id="appointment-booking">Appointment Booking</p>
        </div>
        <div id='right-page-title'>
          <p id="cjmab">Cyril John Mathew &gt; Appointment Booking</p>
        </div>
      </div>
      <div id='empty-space'>
      </div>
      <div id='book-appointment'>
        <p id='book-app-text'>Book an Appointment</p>
      </div>
      <div id='empty-space'></div>
      <div id='therapist-list'>
        <p id='therapist-list-text'>Therapists list</p>
      </div>
      <div id='empty-space'></div>
      <div id='filter-div'>
        <div id='left-filter'>
          <div id='filter-text'><p>Filter list by: </p></div>
          <div id='left-filter-content'>
            <p>ONLINE</p>
            <p>OFFLINE</p>
            <p>MALE</p>           
            <p>FEMALE</p>
          </div>
        </div>
        <div id='right-filter'>
          <input id='search' placeholder='Search Available Therapist' type="text"/>
        </div>
      </div>
      <div id='table-div'>{this.getPlayerTable(this.players)}</div>
    </div>
  );
}

}