import React from "react";

import Card from "../General/Card";
import "./UserItem.css";

function UserItem(props) {
    return (
        <li className="user-item" key={props.id}>
            <Card className="user-info">
                <label>{props.username} - {props.age} years old</label>
                <button>Test</button>
            </Card>
        </li>
    );
};

export default UserItem;
