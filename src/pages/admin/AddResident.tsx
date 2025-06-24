import { Col, Container, Form, Row } from "react-bootstrap"
import Header from "../../components/Header"
import { FaAngleRight } from "react-icons/fa6"

function AddResident() {
  return (
    <Container className="pt-sm-5 pt-5 pb-3 d-flex flex-column w-100" style={{maxWidth:"70rem"}}>
        {/* Header component*/}
        <Header path={'admin'}>
            <div className="d-flex gap-3">
                <h3 className='fw-bold'>Add Resident</h3>
            </div>
        </Header>

        {/* Form page heading */}
        <div className='d-flex align-items-center gap-1 pt-5 mb-3'>
            <span className='text-muted fw-bold d-flex align-items-center'>Residents</span>
            <FaAngleRight size={12}/>
            <span className='text-dark fw-bold d-flex align-items-center'>Add Resident</span>
        </div>

        {/* Pay now Form */}
        <div className='p-5 rounded-3 mb-5' style={{backgroundColor:"#F2F2F7"}}>
            <h3>Details</h3>
            <Row className='pt-3'>

                {/* Fullname */}
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formFullName">
                        <Form.Label >Fullname</Form.Label>
                        <Form.Control type="text" placeholder="ex. EJ Gwapo" />
                    </Form.Group>
                </Col>

                 {/* Contact Number */}
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formContactNumber">
                        <Form.Label >Contact Number</Form.Label>
                        <Form.Control type="number" placeholder="Phone number" />
                    </Form.Group>
                </Col>

                {/* Email Address */}
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formUnitNumber">
                        <Form.Label >Email address</Form.Label>
                        <Form.Control type="text" placeholder="e.g., miguel.santos@email.com" />
                    </Form.Group>
                </Col>

                {/* Unit Number */}
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formUnitNumber">
                        <Form.Label >Unit Number</Form.Label>
                        <Form.Control type="number" placeholder="Unit number" />
                    </Form.Group>
                </Col>
                
                {/* Move-in Date */}
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formMoveInDate">
                        <Form.Label >Move-in date</Form.Label>
                        <Form.Control type="date"/>
                    </Form.Group>
                </Col>

                {/* Initial Payment */}
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formInitialPayment">
                        <Form.Label >Initial Payment</Form.Label>
                        <Form.Control type="date"/>
                    </Form.Group>
                </Col>

                {/* Account status */}
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formAccountStatus">
                        <Form.Label >Account Status</Form.Label>
                        <Form.Select  aria-label="Default select example">
                            <option value={undefined}>Select</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </Form.Select>
                    </Form.Group>
                </Col>

                <Col className='d-flex gap-3 flex-wrap align-items-center justify-content-end mt-3'>
                    <div className='d-flex flex-grow-1 flex-sm-grow-0 align-items-center justify-content-center px-5 py-3 rounded-3' style={{backgroundColor:"#CED4F5", cursor:"pointer"}}><span className='text-black text-center fw-bold'>Cancel</span></div>
                    <div className='d-flex flex-grow-1 flex-sm-grow-0 align-items-center justify-content-center px-3 py-3 rounded-3' style={{backgroundColor:"#344CB7", cursor:"pointer"}}><span className='text-light text-center fw-bold'>Add Resident</span></div>
                </Col>
            </Row>
        </div>
    </Container>
  )
}

export default AddResident