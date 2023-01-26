import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./screens/Home";
import Booking from "./screens/Booking";
import ListAppointments from "./screens/ListAppointments";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home {...this.props} />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/listappointments" element={<ListAppointments />} />
        </Routes>
      </Router>
    );
  }
}
