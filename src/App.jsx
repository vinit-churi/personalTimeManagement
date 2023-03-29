import "./App.css";
import Router from "./router/router";
import { ContextProvider } from "./context/context";
function App() {
    return (
        <ContextProvider>
            <Router />
        </ContextProvider>
    );
}

export default App;
