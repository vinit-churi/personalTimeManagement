import React from "react";

const LoginSignUpBtn = ({ styles }) => {
    const handleClick = () => {
        console.log("user trying to log in");
        return null;
    };
    return (
        <button className={styles.loginSignUp_button} onClick={handleClick}>
            Login/SignUp
        </button>
    );
};

export default LoginSignUpBtn;
