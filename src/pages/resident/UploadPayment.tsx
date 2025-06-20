import { Col, Container, Form, Row } from 'react-bootstrap'
import Header from '../../components/Header'
import { FaAngleRight } from 'react-icons/fa6'
import UploadFile from '../../components/UploadFile'

function UploadPayment() {
  return (
    <Container className="pt-5 d-flex flex-column w-100" style={{maxWidth:"70rem"}}>
        {/* Header component*/}
        <Header>
            <div className="d-flex gap-3">
                <h3 className='fw-bold'>Upload Payment</h3>
            </div>
        </Header>

        {/* Form page heading */}
        <div className='d-flex align-items-center gap-1 pt-5 mb-3'>
            <span className='text-muted fw-bold d-flex align-items-center'>Financial</span>
            <FaAngleRight size={12}/>
            <span className='text-dark fw-bold d-flex align-items-center'>Upload Payment</span>
        </div>

        {/* Pay now Form */}
        <div className='p-5 rounded-3 mb-5' style={{backgroundColor:"#F2F2F7"}}>
            <h3>Details</h3>
            <Row className='pt-3'>

                {/* Billing Month */}
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formBillingMonth">
                        <Form.Label>Billing Month</Form.Label>
                        <Form.Control type="date"/>
                    </Form.Group>
                </Col>

                {/* Amount Paid */}
                <Col>
                    <Form.Group className="mb-3" controlId="formAmountPayment">
                        <Form.Label>Paid Amount</Form.Label>
                        <Form.Control type="text" placeholder="Enter amount here" />
                    </Form.Group>
                </Col>

                {/* Payment option */}
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formPaymentOption">
                        <Form.Label  >Payment method</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option disabled>{"Select"}</option>
                            <option value="1">Gcash</option>
                            <option value="2">Cash</option>
                            <option value="3">Bank</option>
                        </Form.Select>
                    </Form.Group>
                </Col>

                 {/* Reference Number */}
                <Col>
                    <Form.Group className="mb-3" controlId="formReferenceNumber">
                        <Form.Label>Reference Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter Reference number" />
                    </Form.Group>
                </Col>

                {/* Upload file component for file upload */}
                <Col xs={12}>
                    <UploadFile title='Upload proof of payment'/>
                </Col>

                {/* Remarks text for description */}
                <Col xs={12}>
                    <Form.Group className="mb-3" controlId="formRemarks">
                        <Form.Label >Remarks</Form.Label>
                        <Form.Control as="textarea" type="text" rows={3} placeholder="Remarks"/>
                    </Form.Group>
                </Col>
                <Col className='d-flex gap-3 flex-wrap align-items-center justify-content-end mt-3'>
                    <div className='d-flex flex-grow-1 flex-sm-grow-0 align-items-center justify-content-center px-5 py-3 rounded-3' style={{backgroundColor:"#CED4F5", cursor:"pointer"}}><span className='text-black text-center fw-bold'>Cancel</span></div>
                    <div className='d-flex flex-grow-1 flex-sm-grow-0 align-items-center justify-content-center px-3 py-3 rounded-3' style={{backgroundColor:"#344CB7", cursor:"pointer"}}><span className='text-light text-center fw-bold'>Submit Proof</span></div>
                </Col>
            </Row>
        </div>
    </Container>
  )
}

export default UploadPayment