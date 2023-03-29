import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/pages/home";
import Dashboard from "../components/pages/dashboard";
import Layout from "../components/Layout";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
        ],
    },
]);
const Router = () => {
    return <RouterProvider router={router} />;
};
export default Router;
