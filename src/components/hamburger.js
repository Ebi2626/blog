//import PropTypes from "prop-types";
import navItems from "./../data/navItems";
import { Link } from "gatsby";
import React, { useState } from "react";

const Hamburger = () => {
    const[toggled, setToggle] = useState(false);
    const[windowBlock, setWindowBlock] = useState(false);
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
        display: "inline-block",
        width: "100%",
        height: 4,
        backgroundColor: "white",
        marginBottom: 5,
        transition: "all .3s linear",
        opacity: 1,
        borderRadius: 15
    }
    const line1Style = {
        width: "100%",
        height: 4,
        backgroundColor:"white",
        marginBottom: 5,
        borderRadius: 15,
        transition: "all .3s linear",
        transform: "translateY(5px) rotate(45deg)"
    }
    const line2Style = {
        transition: "all .3s linear",
        opacity: 0
    }
    const line3Style = {
        width: "100%",
        height: 4,
        backgroundColor:"white",
        marginBottom: 5,
        borderRadius: 15,
        transition: "all .3s linear",
        transform: "translateY(-5px) rotate(-45deg)"
    }
    const openedMenu = {
        width: "100vw",
        height: "calc(100vh - 100px)",
        top: 100,
        left: 0,
        margin: 0,
        listStyleType: "none",
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "white"
    }
    if (windowBlock){
        document.body.style.overflowY = "hidden";
    } else {
        document.body.style.overflowY = "auto";
    }

    return(
        <div style={box} onClick={()=>{
            !toggled ? setWindowBlock(true) : setWindowBlock(false);
            setToggle(!toggled);}}>
            <div style={toggled ? line1Style : line }></div>
            <div style={toggled ? line2Style : line }></div>
            <div style={toggled ? line3Style : line }></div>
            {toggled ? <ul style={openedMenu}>
            {navItems.map(el =>(
                    <li><Link style={{color:"black", textDecoration: "none"}} to={el.toLowerCase().replace(" ", "-")}>{el}</Link></li>
                ))}
            </ul>: null}
        </div>
    )
}

export default Hamburger;