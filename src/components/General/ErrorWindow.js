import React from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";
import "./ErrorWindow.css";

function Backdrop(props) {
    return <div className="backdrop" onClick={props.onConfirm}></div>;
};

function Overlay(props) {
    return (
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
    );
};

function ErrorWindow(props) {
    return (
        <div>
            {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<Overlay title={props.title} message={props.message} onConfirm={props.onConfirm} />, document.getElementById('overlay-root'))}
        </div>
    );
};

export default ErrorWindow;
