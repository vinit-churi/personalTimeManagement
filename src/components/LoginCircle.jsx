import React from "react";
import { logoutUser } from "../auth/auth";
const LoginSignUpBtn = ({ data }) => {
    return <div onClick={logoutUser}>LoginSignUpBtn</div>;
};

export default LoginSignUpBtn;
