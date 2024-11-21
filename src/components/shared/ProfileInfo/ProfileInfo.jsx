import { useContext } from "react"
import { AuthContext } from "../../../providers/AuthProviders"


function ProfileInfo() {
    const { user } = useContext(AuthContext)
  return (
    <div className="space-y-2">
        <img src={user?.photoURL} alt={user?.displayName} className="rounded-xl w-[150px] h-250px" />
        <p> <strong>Name: </strong> {user?.displayName}</p>
        <p><strong>Email: </strong>{user?.email}</p>
    </div>
  )
}

export default ProfileInfo