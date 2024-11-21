import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";

function Register() {
  const [err, setErr] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handelShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();
  const { handelLoginWithGoogle, handelRegister, updateProfileInfo } =
    useContext(AuthContext);
  const handelGoogleLogin = () => {
    handelLoginWithGoogle()
      .then((result) => {
        if (result.user) {
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.massage);
      });
  };

  const notify = () => {
    toast.success("Register successfully!", {
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

  const handelFormRegister = (e) => {
    e.preventDefault();

    setErr("");

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      setErr("Password must be at least 6 characters!");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setErr("Password must have an Uppercase letter!");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setErr("Password must have a Lowercase letter!");
      return;
    }

    handelRegister(email, password)
      .then((result) => {
        if (result.user) {
          notify();
          navigate("/");
        }
        updateProfileInfo(name, photo).then(() => {});
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErr(errorMessage);
      });
  };

  return (
    <div className="lg:w-10/12 mx-auto py-12 px-4 sm:px-6 md:px-8">
      <h1 className="text-center text-heading text-2xl sm:text-3xl font-bold my-6">
        Register
      </h1>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
        {/* Registration Form */}
        <div className="w-full lg:w-1/2 bg-white shadow-md rounded-lg p-6">
          <form onSubmit={handelFormRegister}>
            {/* Name Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Email Input */}
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Photo URL Input */}
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
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
            </div>

            {/* Error Message */}
            {err && <p className="text-red-500 mt-1">{err}</p>}

            {/* Register Button */}
            <div className="form-control mt-6">
              <button className="btn bg-ice-blue w-full">Register</button>
            </div>
          </form>

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-heading font-bold">
              Login
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

export default Register;
