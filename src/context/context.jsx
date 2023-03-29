import { createContext, useState } from "react";
const context = createContext({});
const value = {
    isLoggedIn: false,
    userData: null,
    data: null,
    theme: "light",
    currentTime: null,
    timeWasted: null,
    timeUsed: null,
};

const ContextProvider = ({ children }) => {
    const [contextState, setContextState] = useState(value);
    return (
        <context.Provider value={{ ...contextState, setContextState }}>
            {children}
        </context.Provider>
    );
};
export { ContextProvider, context };
