import React, { useState } from "react";

import Card from "../General/Card";
import UserInput from "./UserInput";
import "./NewUser.css";

const emptyInputs = {
    username: "",
    age: ""
};

function NewUser(props) {
    const [userInput, setUserInput] = useState(emptyInputs);
    const submitHandler = (event) => {
        event.preventDefault();
        props.onAddUser(userInput);

        setUserInput(emptyInputs);
    };

    const changeInputHandler = (id, value) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                [id]: value
            };
        });
    };

    return (
        <Card className="form-div">
            <form onSubmit={submitHandler}>
                <UserInput id="username" label="Username" value={userInput["username"]} onChangeInput={changeInputHandler} />
                <UserInput id="age" label="Age (Years)" value={userInput["age"]} onChangeInput={changeInputHandler} />
                <button type="submit">Add User</button>
            </form>
        </Card>
    );
};

export default NewUser;
