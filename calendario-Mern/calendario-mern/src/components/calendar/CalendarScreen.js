import { Navbar } from "../ui/Navbar";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { messages } from "../../helper/calendar-messages-esp";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "moment/locale/es";
import { CalendarEvent } from "./CalendarEvent";
import { useState } from "react";
import React from "react";
import { CalendarModal } from "./CalendarModal";

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
      user:{
        _id:'123',
        name:'Antonio',
      }
      
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


  const [lastView, setlastView] = useState(localStorage.getItem('lastView')|| 'month') 
  const onDoubleClick=(e)=>{
    console.log(e)
  }
  const onSelectEvent=(e)=>{
    console.log(e)
  }
  const onViewOnChange=(e)=>{
    setlastView(e);
   localStorage.setItem('lastView',e);
  }

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
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewOnChange}
        //la ultima vista
        view={lastView}
        components={
          {
            event:CalendarEvent
          }
        }
      />
      <CalendarModal/>
    </div>
  );
};



export default CalendarScreen;
