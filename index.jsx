import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import Structure from "./src/Structure";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Structure/>
    }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={Routes}/>
    </StrictMode>
)