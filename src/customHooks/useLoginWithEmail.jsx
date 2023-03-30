import { useState, useEffect } from "react";
import { loginAccountWithEmail } from "../auth/auth";
const useLoginWithEmail = () => {
    const [formInput, setFormInput] = useState({
        email: "",
        password: "",
    });
    const signInWithEmail = (event) => {
        event.preventDefault();
        console.log("useEffect running", formInput);
        loginAccountWithEmail(...Object.values(formInput));
    };
    return [formInput, setFormInput, signInWithEmail];
};

export default useLoginWithEmail;
