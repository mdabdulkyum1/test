import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function UpdateProfileInfo() {

    const { updateProfileInfo } = useContext(AuthContext);

    const navigate = useNavigate();

    const updateProfile = e => {
        e.preventDefault();  

    const name = e.target.name.value; 
    const photo = e.target.photo.value;

    updateProfileInfo(name,photo)
        .then(()=>{
            notify();
            navigate('/dashboard')
        })

        e.target.reset();
    }

    const notify = () => {
        toast.success('Profile Info update successfully!', {
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

  return (
    <div>
        <h1 className="text-xl font-bold">Update Profile Info :-</h1>
        <form onSubmit={updateProfile}>
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


            <div className="form-control mt-6">
              <button className="btn bg-ice-blue">Update</button>
            </div>
        </form>

    </div>
  )
}

export default UpdateProfileInfo