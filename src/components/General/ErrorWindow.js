import React from "react";

import Card from "./Card";
import Button from "./Button";
import "./ErrorWindow.css";

function ErrorWindow(props) {
    return (
        <div>
            <div className="backdrop" onClick={props.onConfirm}></div>
            <Card className="error-window">
                <header>
                    <h2>{props.title}</h2>
                </header>
                <div className="error-content">
                    <p>{props.message}</p>
                </div>
                <footer>
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
            </Card>
        </div>
    );
};

export default ErrorWindow;
