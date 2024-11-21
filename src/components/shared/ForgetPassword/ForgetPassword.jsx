import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function ForgetPassword() {
  const { emailRef, handelResetPasswordWithEmail } = useContext(AuthContext);

  const navigate = useNavigate();

  const handelReset = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    handelResetPasswordWithEmail(email).then(() => {
      notify();
      window.open("https://mail.google.com", "_blank");
      navigate("/login");
    });
    e.target.reset();
  };

  const notify = () => {
    toast.info("Password reset email sent!", {
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

  return (
    <div className="my-6">
      <h1 className="text-xl font-bold my-4 text-center">Forget Password</h1>
      <div className="w-4/5 lg:w-1/3 mx-auto">
        <form onSubmit={handelReset}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={emailRef.current?.value && emailRef.current.value}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-ice-blue">Reset Password</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgetPassword;
