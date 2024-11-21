import { Link, NavLink } from "react-router-dom";
import winterLogo from "../../assets/winterLogo.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

function Navbar() {
  const { user, handelLogOut, loading } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/campaigns">Donation Campaigns</NavLink>
      </li>
      <li>
        <NavLink to="/help">How to Help</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-primary-bg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-xl text-heading"
          title="Winter Clothing Donation"
        >
          <img
            src={winterLogo}
            alt="Winter Clothing Donation"
            className="w-12 rounded-full"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-2">
            <div className="">
              <img
                src={user?.photoURL}
                alt={user?.displayName}
                title={user?.displayName}
                className="rounded-full w-10 h-10"
              />
            </div>
            <Link
              to="/login"
              onClick={handelLogOut}
              className="btn bg-ice-blue"
            >
              Log Out
            </Link>
          </div>
        ) : loading ? (
          <div className="flex items-center justify-center mb-4">
            <div className="skeleton h-10 w-10"></div>
            <div className="skeleton btn w-20"></div>
          </div>
        ) : (
          <Link to="/login" className="btn bg-ice-blue">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
