import { FaCamera } from "react-icons/fa6"
import profile from "../assets/_ 1.png"
import { Image } from "react-bootstrap"
import { useAuth } from "../contexts/auth/AuthContext"



function ProfileAvatar() {
  const {user} = useAuth();

  let fullName = user ? `${user.first_name} ${user.middle_name} ${user.last_name}` : null;

  return (
    <div className="p-3 d-flex align-items-center gap-2">

      {/* Profile avatar */}
        <div className="position-relative">
            <Image src={profile} roundedCircle  width={150} height={150}/>
            <div className="position-absolute" style={{bottom:10, right:5, cursor:"pointer"}}>
                <FaCamera size={30} color="#344CB7"/>
            </div>
        </div>
      
      {/* Side profile info */}
        <div className="d-flex flex-column">
            <h3 className="fw-bold fs-5">{fullName}</h3>
            <span className="text-muted">Employee</span>
            <span className="text-muted">Cagayan De Oro City</span>
        </div>
    </div>
  )
}

export default ProfileAvatar