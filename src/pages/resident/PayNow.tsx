import { Col, Container, Form, Row } from 'react-bootstrap'
import Header from '../../components/Header'
import { FaAngleRight } from 'react-icons/fa6'
import UploadFile from '../../components/UploadFile';

function PayNow() {

  return (
    <Container className="pt-5 d-flex flex-column w-100" style={{maxWidth:"70rem"}}>
        {/* Header component*/}
        <Header>
            <div className="d-flex gap-3">
                <h3 className='fw-bold'>Pay Now</h3>
            </div>
        </Header>

        {/* Form page heading */}
        <div className='d-flex align-items-center gap-1 pt-5 mb-3'>
            <span className='text-muted fw-bold d-flex align-items-center'>Dashboard</span>
            <FaAngleRight size={12}/>
            <span className='text-dark fw-bold d-flex align-items-center'>Pay Now</span>
        </div>

        {/* Pay now Form */}
        <div className='p-5 rounded-3 mb-5' style={{backgroundColor:"#F2F2F7"}}>
            <h3>Details</h3>
            <Row className='pt-3'>
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Amount to pay</Form.Label>
                        <Form.Control type="text" placeholder="Amount" />
                    </Form.Group>
                </Col>

                {/* Payment option */}
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Payment method</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option disabled>{"Select"}</option>
                            <option value="1">Gcash</option>
                            <option value="2">Cash</option>
                            <option value="3">Bank</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Reference Number</Form.Label>
                        <Form.Control type="text" placeholder="Reference number" />
                    </Form.Group>
                </Col>

                {/* Upload file component for file upload */}
                <Col xs={'12'}>
                    <UploadFile/>
                </Col>

                {/* Remarks text for description */}
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Remarks</Form.Label>
                        <Form.Control as="textarea" type="text" placeholder="Remarks"/>
                    </Form.Group>
                </Col>
            </Row>
        </div>
    </Container>
  )
}

export default PayNow