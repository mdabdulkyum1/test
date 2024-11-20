import { useContext } from "react"
import { AuthContext } from "../../../providers/AuthProviders"
import { useNavigate } from "react-router-dom";


function ForgetPassword() {

    const { emailRef, handelResetPasswordWithEmail } = useContext(AuthContext);

    const navigate = useNavigate()

    const handelReset = e => {
        e.preventDefault();


        const email = e.target.email.value;

        handelResetPasswordWithEmail(email)
        .then(() => {
            console.log("Password reset email sent!");
            window.open("https://mail.google.com", "_blank");
            navigate("/login");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
          });


        e.target.reset();
    }


  return (
    <div className="my-6">
       <h1 className="text-xl font-bold my-4 text-center">Forget Password</h1> 
       <div className="w-1/3 mx-auto">
          <form onSubmit={handelReset}>
          <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultChecked="gmail"
                value={emailRef.current?.value ? emailRef.current.value :""}
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
  )
}

export default ForgetPassword