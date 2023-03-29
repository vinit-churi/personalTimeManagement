import React, { useState } from "react";
import { createPortal } from "react-dom";
import { createPortalRootAndAppendToBody } from "../utils/portal";
import AuthModal from "./AuthModal";
const LoginSignUpBtn = ({ styles }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button
                className={styles.loginSignUp_button}
                onClick={() => setShowModal(true)}
            >
                Login/SignUp
            </button>
            {showModal &&
                createPortal(
                    <AuthModal closeModal={() => setShowModal(false)} />,
                    document.getElementById("portal_root")
                )}
        </>
    );
};

export default LoginSignUpBtn;
