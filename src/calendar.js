import React from "react";

function CalendarDay({ ...props }) {
    const isActive = props.dateSelected === props.value ? " active" : "";
    return <button className={`btn btn-outline-primary${isActive}`} {...props}>Day {props.value}</button>
}

function Calendar({ ...props }) {
    const calendarObject = [1, 2, 3, 4, 5, 6, 7]; // demo only 
    const calendarDays = calendarObject.map(day => (
        <CalendarDay
            key={day.toString()}
            dateSelected={props.dateSelected}
            value={day}
            onClick={(e) => props.handleChange(e.target.value)} />
    ));
    return <div className="btn-group">
        {calendarDays}
    </div>;
}

export default Calendar;