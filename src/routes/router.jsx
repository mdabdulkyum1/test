import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <h1 className="btn text-green-700"> Home </h1>
            },
            {
                path: "profile",
                element: <h1>Profile</h1>
            }
        ]
    }
])

export default router;