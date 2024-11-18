import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from './../components/Footer/Footer';

function MainLayout() {
  return (
    <div className="font-poppins">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default MainLayout;
