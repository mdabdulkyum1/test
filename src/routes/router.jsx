import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import DonationCampaigns from "../pages/DonationCampaigns/DonationCampaigns";
import PrivateRoute from "./PrivateRoute";
import DonationDetails from "../pages/DonationDetails/DonationDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import ProfileInfo from "../components/shared/ProfileInfo/ProfileInfo";
import UpdateProfileInfo from "../components/shared/UpdateProfileInfo/UpdateProfileInfo";
import ForgetPassword from "../components/shared/ForgetPassword/ForgetPassword";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HowToHelp from "../pages/HowToHelp/HowToHelp";
import Contact from "../pages/Contact/Contact";



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
            },
            {
                path: "forget-password",
                element: <ForgetPassword></ForgetPassword>
            },
            {
                path: "help",
                element: <HowToHelp></HowToHelp>
            },
            {
                path: "dashboard",
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute> ,
                children: [
                    {
                        path: "/dashboard",
                        element: <ProfileInfo></ProfileInfo>
                    },
                    {
                        path: "update-profile",
                        element: <UpdateProfileInfo></UpdateProfileInfo>
                    }
                ]
            },
            {
                path: "contact",
                element: <Contact></Contact>
            }

        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
])

export default router;