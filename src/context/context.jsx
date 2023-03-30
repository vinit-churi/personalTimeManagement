import { createContext, useState } from "react";
const context = createContext({});
const value = {
    isLoggedIn: true,
    userData: null,
    data: null,
    theme: "light",
    currentTime: null,
    timeWasted: null,
    timeUsed: null,
    showModal: false,
};

const ContextProvider = ({ children }) => {
    const [contextState, setContextState] = useState(value);
    return (
        <context.Provider value={{ AppContext: contextState, setContextState }}>
            {children}
        </context.Provider>
    );
};
export { ContextProvider, context };
