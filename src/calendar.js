import React from "react";

function Calendar({ ...props }) {
    const { handleChange } = props;
    return <div className="btn-group">
        <button className="btn btn-outline-primary" value={1} onClick={(e) => handleChange(e.target.value) }>Day 1</button>
        <button className="btn btn-outline-primary" value={2} onClick={(e) => handleChange(e.target.value) }>Day 2</button>
        <button className="btn btn-outline-primary" value={3} onClick={(e) => handleChange(e.target.value) }>Day 3</button>
        <button className="btn btn-outline-primary" value={4} onClick={(e) => handleChange(e.target.value) }>Day 4</button>
        <button className="btn btn-outline-primary" value={5} onClick={(e) => handleChange(e.target.value) }>Day 5</button>
    </div>;
}

export default Calendar;