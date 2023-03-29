import React, { useState } from "react";
import styles from "../styles/authModal.module.css";
import closeIcon from "../assets/cross.png";
import googleIcon from "../assets/googleIcon.png";
import grayClockImage from "../assets/gray_clock.jpg";
const AuthModal = ({ closeModal }) => {
    const [formInput, setFormInput] = useState({
        email: "",
        password: "",
    });
    const loginWithGoogle = () => {
        return null;
    };
    const loginWithEmail = () => {
        return null;
    };
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
                <div className={styles.authModalFormSection}>
                    <img
                        className={styles.closeIcon}
                        alt="close"
                        src={closeIcon}
                        onClick={closeModal}
                    />
                    <h1>Welcome to time flow</h1>
                    <button
                        className={styles.loginWithGoogleBtn}
                        onClick={loginWithGoogle}
                    >
                        <img src={googleIcon} alt="google" />
                        <p>Login with google</p>
                    </button>
                    <h3>Login with email and password</h3>
                    <form
                        className={styles.loginForm}
                        onSubmit={loginWithEmail}
                    >
                        <input
                            name="email"
                            type="email"
                            required
                            placeholder="example@domain.com"
                            value={formInput.email}
                            onChange={(e) =>
                                setFormInput((formData) => {
                                    return {
                                        ...formData,
                                        email: e.target.value,
                                    };
                                })
                            }
                        />
                        <input
                            name="password"
                            type="password"
                            required
                            placeholder="password"
                            value={formInput.password}
                            onChange={(e) =>
                                setFormInput((formData) => {
                                    return {
                                        ...formData,
                                        password: e.target.value,
                                    };
                                })
                            }
                        />
                        <input type="submit" value="Sign In" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;
