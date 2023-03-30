import React, { useState } from "react";
import styles from "../styles/authModal.module.css";
import closeIcon from "../assets/cross.png";
import googleIcon from "../assets/googleIcon.png";
import grayClockImage from "../assets/gray_clock.jpg";
import ModalLoginView from "./ModalLoginView";
import ModalSignUpView from "./ModalSignUpView";
const AuthModal = ({ closeModal }) => {
    const [loginViewVisible, setLoginViewVisible] = useState(true);
    const backgroundImg = {
        backgroundImage: `url(${grayClockImage})`,
    };
    return (
        <div className={styles.authModal}>
            <div className={styles.authModalCard}>
                <div
                    style={backgroundImg}
                    className={styles.authMOdalImageSection}
                >
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eveniet hic ducimus maiores ut veniam praesentium?
                    </p>
                </div>
                {loginViewVisible ? (
                    <ModalLoginView
                        {...{
                            closeIcon,
                            closeModal,
                            googleIcon,
                            setLoginViewVisible,
                        }}
                    />
                ) : (
                    <ModalSignUpView
                        {...{
                            closeIcon,
                            closeModal,
                            googleIcon,
                            setLoginViewVisible,
                        }}
                    />
                )}
            </div>
        </div>
    );
};

export default AuthModal;
