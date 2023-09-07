import React from "react";

import "./Button.css";

function Button(props) {
    const classNames = 'button ' + props.className;

    return (
        <button className={classNames} type={props.type || "button"} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;
