import React, { useState } from "react";
import styles from "../styles/authModal.module.css";
import useLoginWithEmail from "../customHooks/useLoginWithEmail";
const ModalLoginView = ({
    closeIcon,
    closeModal,
    googleIcon,
    setLoginViewVisible,
}) => {
    // const [formInput, setFormInput] = useState({
    //     email: "",
    //     password: "",
    // });
    // const loginWithEmail = () => {
    //     return null;
    // };
    const [formInput, setFormInput, signInWithEmail] = useLoginWithEmail();
    const loginWithGoogle = () => {
        return null;
    };
    return (
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
            <form className={styles.loginForm} onSubmit={signInWithEmail}>
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
                <p>
                    DON'T HAVE AN ACCOUNT?{" "}
                    <span
                        className={styles.loginViewLink}
                        onClick={() => setLoginViewVisible(false)}
                    >
                        SIGN UP
                    </span>
                </p>
            </form>
        </div>
    );
};

export default ModalLoginView;
