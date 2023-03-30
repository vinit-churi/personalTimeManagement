import { useState, useEffect } from "react";
import { createAccountWithEmail } from "../auth/auth";
const useSignUpWithEmailPassword = () => {
    const [formInput, setFormInput] = useState({
        email: "",
        password: "",
    });
    const signUpWithEmail = (event) => {
        event.preventDefault();
        console.log("sign up running", formInput);
        createAccountWithEmail(...Object.values(formInput));
        return null;
    };
    return [formInput, setFormInput, signUpWithEmail];
};

export default useSignUpWithEmailPassword;
