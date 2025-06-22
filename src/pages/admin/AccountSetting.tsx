import { Col, Container, Form, Row } from "react-bootstrap"
import Header from "../../components/Header"
import { FaAngleRight } from "react-icons/fa6"

function AccountSetting() {
  return (
    <Container className="pt-5 d-flex flex-column w-100" style={{maxWidth:"70rem"}}>
        {/* Header component*/}
        <Header>
            <div className="d-flex gap-3">
                <h3 className='fw-bold'>Account Settings</h3>
            </div>
        </Header>

        {/* Form page heading */}
        <div className='d-flex align-items-center gap-1 pt-5 mb-3'>
            <span className='text-muted fw-bold d-flex align-items-center'>Dashboard</span>
            <FaAngleRight size={12}/>
            <span className='text-dark fw-bold d-flex align-items-center'>Account Settings</span>
        </div>

        {/* Change password Form */}
        <div className='p-5 rounded-3 mb-5' style={{backgroundColor:"#F2F2F7"}}>
            <Row className='pt-3'>
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label >Enter New Password</Form.Label>
                        <Form.Control type="password" placeholder="New Password" />
                    </Form.Group>
                </Col>

                 <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formConfirmPassword">
                        <Form.Label >Confirm New Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>
                </Col>

                <Col className='d-flex gap-3 flex-wrap align-items-center justify-content-end mt-3'>
                    <div className='d-flex flex-grow-1 flex-sm-grow-0 align-items-center justify-content-center px-3 py-3 rounded-3' style={{backgroundColor:"#344CB7", cursor:"pointer"}}>
                        <span className='text-light text-center fw-bold'>Change Password</span>
                    </div>
                </Col>
            </Row>
        </div>
    </Container>
  )
}

export default AccountSetting