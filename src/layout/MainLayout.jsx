import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="font-poppins">
      <Outlet></Outlet>
    </div>
  );
}

export default MainLayout;
