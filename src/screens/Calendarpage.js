import React from "react";
import BigCalendar from "react-big-calendar/lib/Calendar";
import { momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "../CSS/Calendar.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

import axios from "axios";
import Cookies from "js-cookie";

const localizer = momentLocalizer(moment);

export default class Calendarpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: Cookies.get("jwtToken") || "",
      email: Cookies.get("email") || "",
      therapistname: "",
      events: [
        {
          id: 0,
          title: "Customer A has an appointment with Therapist A",
          allDay: true,
          start: new Date(2023, 0, 29),
          end: new Date(2023, 0, 29),
        },
        {
          id: 1,
          title: "Customer B has an appointment with Therapist B",
          start: new Date(2023, 0, 28),
          end: new Date(2023, 0, 29),
        },
        {
          id: 2,
          title: "Customer V has an appointment with Therapist V",
          start: new Date(2023, 1, 27, 10, 30, 0, 0),
          end: new Date(2023, 1, 27, 12, 30, 0, 0),
        },
        {
          id: 3,
          title: "Customer D has an appointment with Therapist D",
          start: new Date(2023, 0, 27, 12, 0, 0, 0),
          end: new Date(2023, 0, 27, 13, 0, 0, 0),
        },
      ],
    };
  }

  async componentDidMount() {
    await axios
      .get(`http://localhost:1337/api/getname/${this.state.email}`, {
        headers: {
          Authorization: `Bearer ${this.state.token}`,
        },
      })
      .then((res) => this.setState({ therapistname: res.data }))
      .catch((e) => console.log(e));

    await axios
      .get("http://localhost:1337/api/bookings", {
        headers: {
          Authorization: `Bearer ${this.state.token}`,
        },
      })
      .then((res) => {
        var resArray = [];

        for (var i = 0; i < res.data.data.length; i++) {
          if (
            res.data.data[i].attributes.therapist_name ===
            this.state.therapistname
          ) {
            var date = new Date(res.data.data[i].attributes.date);
            var split1 = res.data.data[i].attributes.timeslot.split("-");

            const [hours1, minutes1, period1] = split1[0].split(/[:\s]/);
            const hours241 =
              period1 === "AM"
                ? parseInt(hours1, 10) % 12
                : (parseInt(hours1, 10) % 12) + 12;
            var hrs1 = `${hours241.toString().padStart(2, "0")}`;

            const [hours, minutes, period] = split1[1].split(/[:\s]/);
            const hours24 =
              period === "AM"
                ? parseInt(hours, 10) % 12
                : (parseInt(hours, 10) % 12) + 12;
            var hrs2 = `${hours24.toString().padStart(2, "0")}`;

            console.log(hrs1, hrs2);

            resArray.push({
              id: res.data.data[i].id,
              title: `${res.data.data[i].attributes.customer_name} has an appointment with ${res.data.data[i].attributes.therapist_name}`,
              start: new Date(
                new Date(res.data.data[i].attributes.date).getFullYear(),
                new Date(res.data.data[i].attributes.date).getDate(),
                new Date(res.data.data[i].attributes.date).getMonth(),
                hrs1,
                new Date(`${new Date().getDate()} ${split1[0]}`).getMinutes()
              ),
              end: new Date(
                new Date(res.data.data[i].attributes.date).getFullYear(),
                new Date(res.data.data[i].attributes.date).getDate(),
                new Date(res.data.data[i].attributes.date).getMonth(),
                hrs2,
                new Date(`${new Date().getDate()} ${split1[1]}`).getMinutes()
              ),
            });
          }
        }
        this.setState({ events: resArray });
        console.log(resArray);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="calendar-height">
        <BigCalendar
          id="calendar"
          localizer={localizer}
          events={this.state.events}
          startAccessor="start"
          endAccessor="end"
          views={["month", "week", "day"]}
        />
      </div>
    );
  }
}

// import React from "react";

// import events from "./events";
// import BigCalendar from "react-big-calendar/lib/Calendar";
// import moment from "moment";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));
// // moment.locale("en-GB");
// // const localizer = Calendar.momentLocalizer(moment);

// // const allViews = Object.keys(Calendar.Views).map((k) => Calendar.Views[k]);

// export default class Calendarpage extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div style={{ height: 500 }}>
//         <BigCalendar events={events} startAccessor="start" endAccessor="end" />
//       </div>
//     );
//   }
// }
