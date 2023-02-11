import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import Booking from "./screens/Booking";
import ListAppointments from "./screens/ListAppointments";
import CreateEvent from "./screens/CreateEvent";
import Staff from "./screens/Staff";
import ListPayments from "./screens/ListPayments";
import ListCustomers from "./screens/ListCustomers";
import Services from "./screens/Services";
import SendEmail from "./screens/SendEmail";
import Calendarpage from "./screens/Calendarpage";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home {...this.props} />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/listappointments" element={<ListAppointments />} />
          <Route path="/event" element={<CreateEvent />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/listpayments" element={<ListPayments />} />
          <Route path="/listcustomers" element={<ListCustomers />} />
          <Route path="/services" element={<Services />} />
          <Route path="/sendemail" element={<SendEmail />} />
          <Route path="/calendar" element={<Calendarpage />} />
        </Routes>
      </Router>
    );
  }
}
