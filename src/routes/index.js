import {createBrowserRouter } from "react-router-dom";

import App from "../App";
import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Services from "../pages/Services";
import Resource from "../pages/Resource";
import Contact from "../pages/Contact";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Homepage />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "services",
                element: <Services />
            },
            {
                path: "resource",
                element: <Resource />
            },
            {
                path: "contact",
                element: <Contact />
            }
        ]
    }
]);


export default router;
