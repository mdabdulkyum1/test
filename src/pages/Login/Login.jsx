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
  const { handelLoginWithGoogle, handelLogin, handelLogOut, emailRef} = useContext(AuthContext);
  const handelGoogleLogin = () => {
    handelLoginWithGoogle()
    .then(result=> {
      if(result.user){
        navigate(location?.state ? location.state : "/");
      }
    }).catch(error => {
        alert(error.massage)
    })
  }


  const notify = ()=> {
    toast.success('Login successfully!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  const handelFormLogin = e => {
      e.preventDefault();
    
    setErr("")
 
    const email = e.target.email.value;
    const password = e.target.password.value;

    handelLogin(email, password)
    .then((result) => {
      if(result.user){
          notify();

          navigate(location?.state ? location.state : "/");
      }
    })
    .catch((error) => {
      setErr(error?.code)
    });
  
  }
  
  return (
    <div className="w-10/12 mx-auto py-12">
      <h1 onClick={handelLogOut} className="text-center text-heading text-3xl font-bold my-6">
        Login
      </h1>

      <div className="flex flex-col justify-center items-center lg:flex-row gap-6">
        <div className="lg:w-1/2">
          <form onSubmit={handelFormLogin} className="">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                ref={emailRef}
                placeholder="email"
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

              <label className="label">
                <Link to="/forget-password" onChange={()=> {}} className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            {
              err && <p className="text-red-500 mt-1">{err}</p>
            }
            <div className="form-control mt-6">
              <button className="btn bg-ice-blue">Login</button>
            </div>
          </form>
          <p className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <Link to="/register" className="text-heading font-bold">
              Create an account
            </Link>
          </p>
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-2xl font-bold mb-4">Continue With</h1>
          <div className="">
            <button onClick={handelGoogleLogin} className="btn outline outline-ice-blue" type="submit">
              <FcGoogle />
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
