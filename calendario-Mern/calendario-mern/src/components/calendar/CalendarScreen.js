import PropTypes from "prop-types";
import { Navbar } from "../ui/Navbar";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { messages } from "../../helper/calendar-messages-esp";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "moment/locale/es";

moment.locale("es");

const CalendarScreen = (props) => {
  const localizer = momentLocalizer(moment);

  const events = [
    {
      title: "cumpleaños de la pupasa :D",
      start: moment().toDate(),
      end: moment().add(1, "hours").toDate(),
      bgcolor: "#fafafa",
      notes:'comprar el pastel',
    },
  ];

  const eventStyleGetter = (event, start, end, isSelected) => {
    // console.log(event, start, end, isSelected);

    const style = {
      backgroundColor: 'red',
      borderRadius: '0px',
      opcaity: 0.0,
      display:'block',
    };

    return {
      style
    }
  };

  return (
    <div className="calendar-screen">
      <Navbar />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={eventStyleGetter}
      />
    </div>
  );
};

CalendarScreen.propTypes = {};

export default CalendarScreen;
