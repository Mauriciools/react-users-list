import React from "react";

import Card from "../General/Card";
import Button from "../General/Button";
import "./UserItem.css";

function UserItem(props) {
    return (
        <li className="user-item" key={props.id}>
            <Card className="user-info">
                <label>{props.username} - {props.age} years old</label>
                <div className="user-info-buttons">
                    <Button onClick={() => props.onDeleteUser(props.id)}>Delete</Button>
                </div>
            </Card>
        </li>
    );
};

export default UserItem;
