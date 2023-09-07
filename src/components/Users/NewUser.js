import React, { useState } from "react";

import Card from "../General/Card";
import Button from "../General/Button";
import ErrorWindow from "../General/ErrorWindow";
import UserInput from "./UserInput";
import "./NewUser.css";

const emptyInputs = {
    username: "",
    age: ""
};

function NewUser(props) {
    const [userInput, setUserInput] = useState(emptyInputs);
    const [error, setError] = useState();

    const submitHandler = (event) => {
        event.preventDefault();

        if (userInput.username.trim().length === 0 || userInput.age.trim().length === 0) {
            setError({
                title: "Invalid input!",
                message: "Please provide a name and age."
            });

            return;
        };

        if (+userInput.age <= 0) {
            setError({
                title: "Invalid age!",
                message: "Please provide an age greater than 0."
            });
        
            return;
        };

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

    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
            {error && <ErrorWindow title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className="form-div">
                <form onSubmit={submitHandler}>
                    <UserInput id="username" label="Username" value={userInput["username"]} onChangeInput={changeInputHandler} />
                    <UserInput id="age" label="Age (Years)" value={userInput["age"]} onChangeInput={changeInputHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default NewUser;
