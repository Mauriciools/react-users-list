import React from "react";

import Card from "../General/Card";
import UserItem from "./UserItem";
import "./UsersList.css";

function UsersList(props) {
    return (
        <div className="users">
            <p>Users registered:</p>
            <Card>
                <ul className="users-list">
                    {props.users.map((user) => (
                        <UserItem id={user.id} username={user.username} age={user.age} />
                    ))}
                </ul>
            </Card>
        </div>
    );
};

export default UsersList;
