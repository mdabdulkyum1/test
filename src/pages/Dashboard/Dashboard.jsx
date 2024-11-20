import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProviders"
import { Link, NavLink, Outlet } from "react-router-dom";


function Dashboard() {

    const { user } = useContext(AuthContext);

 
  return (
    <div className="">
        <div className="w-5/6 mx-auto">
           <div className="h-24">
               <h1 className="text-center my-6 font-bold text-3xl">Dashboard</h1>
           </div>
        
        <section className="">
            <div className="flex gap-6">
                <img src={user?.photoURL} alt={user?.displayName} className="rounded-full w-10" />
                <h1 className="font-semibold text-xl">Welcome, {user?.displayName}</h1>
                <Link className="btn bg-frosty-blue" to="/dashboard/update-profile">Update Profile</Link>
            </div>
        </section>
        <section className="grid grid-cols-12 my-12">
            <aside className="col-span-3">
                <ul>
                    <li><NavLink to="/dashboard">General</NavLink></li>
                    <li><NavLink to="/dashboard/update-profile">Update Profile</NavLink></li>
                </ul> 
            </aside>
            <div className="col-span-9">
                <Outlet></Outlet>
            </div>
        </section>
        </div>
    </div>
  )
}

export default Dashboard