import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import Structure from "./src/Structure";
import Gstructure from "./src/Gstructure";
import Prueba from "./Prueba";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Gstructure/>
    },
    {
        path: '/PEPE',
        element: <Prueba/>
    }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={Routes}/>
    </StrictMode>
)