import React from "react";

import "./UserInput.css";

function UserInput(props) {
    return (
        <div className="single-input">
            <label>{props.label}</label>
            <input onChange={((event) => props.onChangeInput(props.id, event.target.value))}></input>
        </div>
    );
};

export default UserInput;
