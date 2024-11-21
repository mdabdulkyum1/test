import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";

function Login() {
  const [err, setErr] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();

  const handelShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();
  const { handelLoginWithGoogle, handelLogin, handelLogOut, emailRef } =
    useContext(AuthContext);
  const handelGoogleLogin = () => {
    handelLoginWithGoogle()
      .then((result) => {
        if (result.user) {
          navigate(location?.state ? location.state : "/");
        }
      })
      .catch((error) => {
        alert(error.massage);
      });
  };

  const notify = () => {
    toast.success("Login successfully!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handelFormLogin = (e) => {
    e.preventDefault();

    setErr("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    handelLogin(email, password)
      .then((result) => {
        if (result.user) {
          notify();

          navigate(location?.state ? location.state : "/");
        }
      })
      .catch((error) => {
        setErr(error?.code);
      });
  };

  return (
    <div className="lg:w-10/12 mx-auto py-12 px-4 sm:px-6 md:px-8">
      <h1
        onClick={handelLogOut}
        className="text-center text-heading text-2xl sm:text-3xl font-bold my-6"
      >
        Login
      </h1>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
        {/* Login Form */}
        <div className="w-full lg:w-1/2 bg-white shadow-md rounded-lg p-6">
          <form onSubmit={handelFormLogin}>
            {/* Email Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                ref={emailRef}
                placeholder="Email"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Password Input */}
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={`${showPassword ? "text" : "password"}`}
                  placeholder="Password"
                  name="password"
                  className="w-full outline-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={handelShowPassword}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-800 focus:outline-none"
                >
                  {showPassword ? (
                    <FaEye className="text-xl" />
                  ) : (
                    <IoIosEyeOff className="text-xl" />
                  )}
                </button>
              </div>

              <label className="label">
                <Link
                  to="/forget-password"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>
              </label>
            </div>

            {/* Error Message */}
            {err && <p className="text-red-500 mt-1">{err}</p>}

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button className="btn bg-ice-blue w-full">Login</button>
            </div>
          </form>
          <p className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <Link to="/register" className="text-heading font-bold">
              Create an account
            </Link>
          </p>
        </div>

        {/* Google Login Section */}
        <div className="w-full lg:w-1/2 bg-white shadow-md rounded-lg p-6 text-center">
          <h1 className="text-2xl font-bold mb-4">Continue With</h1>
          <button
            onClick={handelGoogleLogin}
            className="btn outline outline-ice-blue w-full flex justify-center items-center gap-2"
            type="submit"
          >
            <FcGoogle />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
