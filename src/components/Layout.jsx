import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import backgroundImage from "../assets/hourglass_bg_removed.png";
import Navbar from "./Navbar";
import styles from "../styles/layout.module.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Layout = () => {
    const style = {
        backgroundImage: `url(${backgroundImage})`,
    };
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user);
                console.log("look here");
                console.log(auth.currentUser);
            } else {
                console.log("no user");
            }
        });
    }, []);
    return (
        <div style={style} className={styles.rootLayout}>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Layout;
