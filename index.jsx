import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import Structure from "./src/Structure";
import StructureExplore from "./src/Explore/StructureExplore";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Structure/>
    },
    {
        path:'/Explore',
        element: <StructureExplore/>
    }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={Routes}/>
    </StrictMode>
)