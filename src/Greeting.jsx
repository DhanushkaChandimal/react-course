import React from "react";
import "./styleRed.css";

function Greeting(){

    const greetingStyle = {
        color: "green",
        fontSize: "18px",
        textAlign: "center"
    };
    return (
        <>
            <p style={greetingStyle}>Welcome to the world of react!</p>
            <p className="greeting">Import from red.css!</p>
        </>
    );
}

export default Greeting;
