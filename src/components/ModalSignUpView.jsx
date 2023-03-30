import React, { useState } from "react";
import styles from "../styles/authModal.module.css";
import useSignUpWithEmailPassword from "../customHooks/useSignUpWithEmailPassword";
const ModalSignUpView = ({
    closeIcon,
    closeModal,
    googleIcon,
    setLoginViewVisible,
}) => {
    const [formInput, setFormInput, signUpWithEmail] =
        useSignUpWithEmailPassword();
    const singUpGoogle = () => {
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
                onClick={singUpGoogle}
            >
                <img src={googleIcon} alt="google" />
                <p>Sing-up with google</p>
            </button>
            <h3>Sign-up with email and password</h3>
            <form className={styles.loginForm} onSubmit={signUpWithEmail}>
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
                <input type="submit" value="Sign Up" />
                <p>
                    ALREADY HAVE AN ACCOUNT?{" "}
                    <span
                        className={styles.loginViewLink}
                        onClick={() => setLoginViewVisible(true)}
                    >
                        LOG IN
                    </span>
                </p>
            </form>
        </div>
    );
};

export default ModalSignUpView;
