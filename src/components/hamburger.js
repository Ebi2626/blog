import PropTypes from "prop-types";
import React, { useState } from "react";

const Hamburger = () => {
    const[toggled, setToggle] = useState(false)
    const box = {
        height: "80%",
        margin: "5px 20px 5px auto",
        width: 40,
        display: "flex",
        position: "relative",
        flexDirection: "column",
        justifyContent: "center"
    }
    const line = {
        width: "100%",
        height: 4,
        backgroundColor: toggled ? "white": "black",
        marginBottom: 5,
        borderRadius: 15
    }

    return(
        <div style={box} onClick={()=>setToggle(!toggled)}>
            <div style={line}></div>
            <div style={line}></div>
            <div style={line}></div>
        </div>
    )
}

export default Hamburger;