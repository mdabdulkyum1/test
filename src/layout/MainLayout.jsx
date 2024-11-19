import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from './../components/Footer/Footer';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function MainLayout() {
  return (
    <div className="font-poppins">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default MainLayout;
