import { Button, Col, Container, Form, Row } from "react-bootstrap"
import Header from "../../components/Header"
import { FaAngleRight } from "react-icons/fa6"

function AddEmployee() {
  return (
    <Container className="pt-5 d-flex flex-column w-100" style={{maxWidth:"70rem"}}>
        {/* Header component*/}
        <Header path={'admin'}>
            <div className="d-flex gap-3">
                <h3 className='fw-bold'>Add Employee</h3>
            </div>
        </Header>

        {/* Form page heading */}
        <div className='d-flex align-items-center gap-1 pt-5 mb-3'>
            <span className='text-muted fw-bold d-flex align-items-center'>Employees</span>
            <FaAngleRight size={12}/>
            <span className='text-dark fw-bold d-flex align-items-center'>Add Employee</span>
        </div>

        {/* Add Resident Form */}
        <Form onSubmit={() => alert('hello submit')} className='p-5 rounded-3 mb-5' style={{backgroundColor:"#F2F2F7"}}>
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
                        <Form.Control type="number" placeholder="e.g., 09123456789" />
                    </Form.Group>
                </Col>

                {/* Email Address */}
                <Col>
                    <Form.Group className="mb-3" controlId="formEmailAddress">
                        <Form.Label >Email Address</Form.Label>
                        <Form.Control required type="email" placeholder="e.g., example@gmail.com" />
                    </Form.Group>
                </Col>

                {/* Account role */}
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formAccountRole">
                        <Form.Label >Role</Form.Label>
                        <Form.Select  aria-label="Default select example">
                            <option value={undefined}>Select</option>
                            <option value="active">Employee 1</option>
                            <option value="inactive">Employee 2</option>
                        </Form.Select>
                    </Form.Group>
                </Col>

                {/* Account status */}
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formPaymentOption">
                        <Form.Label >Account Status</Form.Label>
                        <Form.Select  aria-label="Default select example">
                            <option value={undefined}>Select</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </Form.Select>
                    </Form.Group>
                </Col>

                {/* Set defualt Login credentials */}
                <Col xs={12}>
                    <h3 className="fw-bold">Login Credentials</h3>
                </Col>

                {/* Set username */}
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label >Username</Form.Label>
                        <Form.Control required type="email" placeholder="e.g., example123" />
                    </Form.Group>
                </Col>

                {/* Set password */}
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label >Password</Form.Label>
                        <Form.Control required minLength={8} type="password" placeholder="Enter password"/>
                    </Form.Group>
                </Col>

                <Col className='d-flex gap-3 flex-wrap align-items-center justify-content-end mt-3'>
                    <div className='d-flex flex-grow-1 flex-sm-grow-0 align-items-center justify-content-center px-5 py-3 rounded-3' style={{backgroundColor:"#CED4F5", cursor:"pointer"}}><span className='text-black text-center fw-bold'>Cancel</span></div>
                    <Button type="submit" title="Add Employee" className='d-flex flex-grow-1 flex-sm-grow-0 align-items-center justify-content-center fw-bold border-0 px-3 py-3 rounded-3' style={{backgroundColor:"#344CB7", cursor:"pointer"}}>Add Resident</Button>
                </Col>
            </Row>
        </Form>
    </Container>
  )
}

export default AddEmployee