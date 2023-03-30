import React, { useState, useContext } from "react";
import { createPortal } from "react-dom";
import { createPortalRootAndAppendToBody } from "../utils/portal";
import AuthModal from "./AuthModal";
import { context as contextConsumer } from "../context/context";
const LoginSignUpBtn = ({ styles }) => {
    const { AppContext, setContextState } = useContext(contextConsumer);
    const { showModal } = AppContext;
    return (
        <>
            <button
                className={styles.loginSignUp_button}
                onClick={() =>
                    setContextState((state) => ({ ...state, showModal: true }))
                }
            >
                Login/SignUp
            </button>
            {showModal &&
                createPortal(
                    <AuthModal
                        closeModal={() =>
                            setContextState((state) => ({
                                ...state,
                                showModal: false,
                            }))
                        }
                    />,
                    document.getElementById("portal_root")
                )}
        </>
    );
};

export default LoginSignUpBtn;
