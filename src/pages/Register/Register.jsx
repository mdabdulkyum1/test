import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
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
  const { handelLoginWithGoogle, handelRegister } = useContext(AuthContext);
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
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        }).then(() => {});
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErr(errorMessage);
      });
  };

  return (
    <div className="w-10/12 mx-auto py-12">
      <h1 className="text-center text-heading text-3xl font-bold my-6">
        Register
      </h1>

      <div className="flex flex-col justify-center items-center lg:flex-row gap-6">
        <div className="lg:w-1/2">
          <form onSubmit={handelFormRegister} className="">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo Url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <label className="input input-bordered flex items-center gap-2">
                <input
                  type={`${showPassword ? "text" : "password"}`}
                  placeholder="password"
                  name="password"
                  className="grow"
                  required
                />

                <span onClick={handelShowPassword}>
                  {showPassword ? (
                    <FaEye className="cursor-pointer" />
                  ) : (
                    <IoIosEyeOff className="cursor-pointer" />
                  )}
                </span>
              </label>
            </div>
            {err && <p className="text-red-500 mt-1">{err}</p>}
            <div className="form-control mt-6">
              <button className="btn bg-ice-blue">Register</button>
            </div>
          </form>
          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-heading font-bold">
              Login
            </Link>
          </p>
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-2xl font-bold mb-4">Continue With</h1>
          <div className="">
            <button
              onClick={handelGoogleLogin}
              className="btn outline outline-ice-blue"
              type="submit"
            >
              <FcGoogle />
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
