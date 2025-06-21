import { Col, Container, Row } from "react-bootstrap"
import Header from "../../components/Header"
import { FaAngleRight } from "react-icons/fa6"
import ProfileAvatar from "../../components/admin/ProfileAvatar"
import ProfileStatus from "../../components/admin/ProfileStatus"
import ProfileDetails from "../../components/admin/ProfileDetails"

function Profile() {
  return (
    <Container
      className="pt-5 d-flex flex-column w-100"
      style={{ maxWidth: "70rem" }}
    >
      {/* Header component*/}
      <Header>
        <div className="d-flex gap-3">
          <h3 className="fw-bold">View profile</h3>
        </div>
      </Header>


     {/* Profile heading */}
      <div className="d-flex align-items-center gap-1 pt-5 mb-3">
        <span className="text-muted fw-bold d-flex align-items-center">
          Dashboard
        </span>
        <FaAngleRight size={12} />
        <span className="text-dark fw-bold d-flex align-items-center">
          View Profile
        </span>
      </div>

      {/* Top profile */}
      <Row className="rounded-3" style={{ backgroundColor: "#F2F2F7" }}>
        <Col xs={12} className="d-flex align-items-center flex-wrap justify-content-between m-auto" style={{width:"95%"}}>
          <ProfileAvatar name={"Trexy Sandigan"} role={"President"} location={"Cagayan De Oro City"}/> {/* Avatar photo */}
          <ProfileStatus/>  {/* Online/Offline status */}
        </Col>
      </Row>
      
       {/* Profile details */}
      <Row className="rounded-3 mt-3" style={{ backgroundColor: "#F2F2F7" }}>
          <ProfileDetails/> {/* Full profile details */}
      </Row>


    </Container>
  )
}

export default Profile