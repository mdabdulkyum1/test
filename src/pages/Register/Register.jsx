import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";


function Register() {
  


  const navigate = useNavigate();
  const { handelLoginWithGoogle, } = useContext(AuthContext);
  const handelGoogleLogin = () => {
    handelLoginWithGoogle()
    .then(result=> {
      if(result.user){
        navigate('/')
      }
    }).catch(error => {
        alert(error.massage)
    })
  }

  return (
    <div className="w-10/12 mx-auto py-12">
      <h1 className="text-center text-heading text-3xl font-bold my-6">
        Register
      </h1>

      <div className="flex flex-col justify-center items-center lg:flex-row gap-6">
        <div className="lg:w-1/2">
          <form className="">
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
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
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

export default Register;
