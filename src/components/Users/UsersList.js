import React from "react";

import UserItem from "./UserItem";
import "./UsersList.css";

function UsersList(props) {
    return (
        <div className="users">
            <p>Users registered:</p>
            <ul className="users-list">
                {props.users.map((user) => (
                    <UserItem id={user.id} username={user.username} age={user.age} />
                ))}
            </ul>
        </div>
    );
};

export default UsersList;
