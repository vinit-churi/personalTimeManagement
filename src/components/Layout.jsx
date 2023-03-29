import React from "react";
import { Outlet } from "react-router-dom";
import backgroundImage from "../assets/hourglass_bg_removed.png";
import Navbar from "./Navbar";
import styles from "../styles/layout.module.css";
const Layout = () => {
    const style = {
        backgroundImage: `url(${backgroundImage})`,
    };
    return (
        <div style={style} className={styles.rootLayout}>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Layout;
