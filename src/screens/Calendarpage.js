import React from "react";
import BigCalendar from "react-big-calendar/lib/Calendar";
import { momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "../CSS/Calendar.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const events = [
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
];

function Calendarpage() {
  return (
    <div className="calendar-height">
      <BigCalendar
        id="calendar"
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={["month", "week", "day"]}
      />
    </div>
  );
}

export default Calendarpage;

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
