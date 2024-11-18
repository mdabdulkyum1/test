import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function MainLayout() {
  return (
    <div className="font-poppins">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default MainLayout;
