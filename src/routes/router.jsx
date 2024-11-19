import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import DonationCampaigns from "../pages/DonationCampaigns/DonationCampaigns";
import PrivateRoute from "./PrivateRoute";
import DonationDetails from "../pages/DonationDetails/DonationDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";



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
                element: <PrivateRoute><h1>Profile</h1></PrivateRoute>
            },
            {
                path: "campaigns",
                element: <DonationCampaigns></DonationCampaigns>
            },
            {
                path: "donation-details/:id",
                element: <PrivateRoute><DonationDetails></DonationDetails></PrivateRoute>,
                loader: async ({ params })=> {
                    const res = await fetch('/winterDonations.json');
                    const donateData = await res.json();
                    const singleDonateData = donateData.find(singleData => singleData.id === parseInt(params.id));
                    return singleDonateData;
                }
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            }

        ]
    }
])

export default router;