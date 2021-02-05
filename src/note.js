import React from "react";

function Note({ ...props }) {
    const { handleChange, note, dateSelected } = props;
    return <div className="mb-4">
        <h3>Note</h3>
        <textarea
            className="form-control"
            disabled={!dateSelected}
            onChange={(e) => handleChange(e.target.value, dateSelected)}
            value={note} />
    </div>;
}

export default Note;