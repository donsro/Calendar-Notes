import React from "react";

function CalendarDay({ ...props }) {
    const isActive = props.dateSelected === props.value ? " active" : "";
    return <button className={`btn btn-outline-primary${isActive}`} {...props}>Day {props.value}</button>
}

function Calendar({ ...props }) {    
    const calendarObject = [1, 2, 3, 4, 5, 6, 7]; // demo only 
    const calendarDays = calendarObject.map(day => (
        <CalendarDay dateSelected={props.dateSelected} key={day.toString()} value={day} onClick={(e) => props.handleChange(e.target.value)} />
    ));
    return <div className="btn-group">
        {calendarDays}
    </div>;
}

export default Calendar;