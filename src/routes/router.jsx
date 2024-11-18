import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import DonationCampaigns from "../pages/DonationCampaigns/DonationCampaigns";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "profile",
                element: <h1>Profile</h1>
            },
            {
                path: "campaigns",
                element: <DonationCampaigns></DonationCampaigns>
            }
        ]
    }
])

export default router;