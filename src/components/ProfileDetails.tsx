import { useNavigate } from "@tanstack/react-router"
import { Col, Row } from "react-bootstrap"
import { MdArrowOutward } from "react-icons/md"

function ProfileDetails() {

    const navigate = useNavigate();

  
  return (
    <div className="p-4 rounded-3 m-auto" style={{ backgroundColor: "#F2F2F7", width: "90%"}}>

        {/* Details Heading */}
        <Row>
            <Col className="d-flex justify-content-between align-items-center">
                <div className="fs-4 fw-bold">Details</div>
                <div onClick={() => navigate({to: '/resident/edit-profile'})} className="bg-primary px-3 py-2 text-light d-flex gap-2 align-items-center rounded-3" style={{cursor:"pointer"}}>
                    <span className="fw-bold">Edit</span>
                    <MdArrowOutward size={25}/>
                </div>
            </Col>
        </Row>
        <hr />

        {/* Profile Full Details */}
        <Row className="d-flex flex-column">
            <Col className="d-flex justify-content-between flex-wrap gap-2">
                <div>
                    <span className="">Fullname</span>
                    <p className="fs-5 fw-bold">Trexy Balansag</p>
                    <span className="">Email</span>
                    <p className="fs-5 fw-bold">trexybalansag@gmail.com</p>
                </div>
                <div>
                    <span className="">Unit Number</span>
                    <p className="fs-5 fw-bold">3A</p>
                    <span className="">Date registered</span>
                    <p className="fs-5 fw-bold">March 5, 2025</p>
                </div>
                <div>
                    <span className="">Contact Number</span>
                    <p className="fs-5 fw-bold">09171234567</p>
                    <span className="">Status</span>
                    <p className="fs-5 fw-bold">Active</p>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default ProfileDetails