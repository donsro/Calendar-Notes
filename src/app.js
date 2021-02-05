import React, { Fragment } from "react";
import Note from "./note.js";
import Calendar from "./calendar.js";

class CalendarApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleNoteInputChange = this.handleNoteInputChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.state = {
            dateSelected: null,
            dates: []
        };
    }

    handleNoteInputChange(val, dateSelected) {
        this.setState({
            dates: this.state.dates.map(el => (el.date === dateSelected ? { ...el, note: val } : el))
        });
    }

    handleDateChange(val) {
        this.setState(state => {
            const intVal = parseInt(val);
            const isDate = state.dates.find(({ date }) => date === intVal);
            const dates = isDate ? state.dates : [...state.dates, { date: intVal, note: "" }];
            return {
                dateSelected: intVal,
                dates,
            };
        });
    }

    updateNoteText(dateSelected, dates) {
        const date = dates.find(({ date }) => date === dateSelected);
        return (date ? date.note : "");
    }

    render() {
        const { dateSelected, dates } = this.state;
        const noteText = dateSelected ? this.updateNoteText(dateSelected, dates) : "";
        return <Fragment>
            <h1>Date selected: {dateSelected}</h1>
            <Note
                note={noteText}
                handleChange={this.handleNoteInputChange}
                dateSelected={dateSelected} />
            <Calendar
                handleChange={this.handleDateChange}
                dateSelected={dateSelected} />
        </Fragment>;
    }
}

export default CalendarApp;