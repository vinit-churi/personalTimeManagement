import React, { useState, useContext } from "react";
import styles from "../styles/navbar.module.css";
import logo from "../assets/svgexport-33.svg";
import LoginCircle from "./LoginCircle";
import LoginSignUpBtn from "./LoginSignUpBtn";
import { context as contextConsumer } from "../context/context";
const Navbar = () => {
    const { AppContext } = useContext(contextConsumer);
    const { userData, isLoggedIn } = AppContext;
    return (
        <div className={styles.navbar}>
            <img src={logo} alt="logo" className={styles.logo} />
            <div className="nav_options">
                {isLoggedIn ? (
                    <LoginCircle data={userData} />
                ) : (
                    <LoginSignUpBtn styles={styles} />
                )}
            </div>
        </div>
    );
};

export default Navbar;
