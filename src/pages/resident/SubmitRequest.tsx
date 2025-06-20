import { Col, Container, Form, Row } from 'react-bootstrap'
import Header from '../../components/Header'
import { FaAngleRight } from 'react-icons/fa6'
import UploadFile from '../../components/UploadFile'

function SubmitRequest() {
  return (
    <Container className="pt-5 d-flex flex-column w-100" style={{maxWidth:"70rem"}}>
        {/* Header component*/}
        <Header>
            <div className="d-flex gap-3">
                <h3 className='fw-bold'>Submit Request</h3>
            </div>
        </Header>

        {/* Form page heading */}
        <div className='d-flex align-items-center gap-1 pt-5 mb-3'>
            <span className='text-muted fw-bold d-flex align-items-center'>Inquiries</span>
            <FaAngleRight size={12}/>
            <span className='text-dark fw-bold d-flex align-items-center'>Submit Request</span>
        </div>

        {/* Pay now Form */}
        <div className='p-5 rounded-3 mb-5' style={{backgroundColor:"#F2F2F7"}}>
            <h3>Details</h3>
            <Row className='pt-3'>
                {/* Category option */}
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formCategoryOption">
                        <Form.Label>Category</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option >Select</option>
                            <option value="1">Category 1</option>
                            <option value="2">Category 2</option>
                            <option value="3">Category 3</option>
                        </Form.Select>
                    </Form.Group>
                </Col>

                {/* Subject */}
                <Col>
                    <Form.Group className="mb-3" controlId="formSubject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="Enter subject" />
                    </Form.Group>
                </Col>

                {/* Details field */}
                <Col xs={12}>
                    <Form.Group className="mb-3" controlId="formMessage">
                        <Form.Label >Details</Form.Label>
                        <Form.Control as="textarea" type="text" rows={4} placeholder="Enter here..."/>
                    </Form.Group>
                </Col>

                 {/* Upload file component for file upload */}
                <Col xs={'12'}>
                    <UploadFile title='Attach File(Optional)'/>
                </Col>

                <Col className='d-flex gap-3 flex-wrap align-items-center justify-content-end mt-3'>
                    <div className='d-flex flex-grow-1 flex-sm-grow-0 align-items-center justify-content-center px-5 py-3 rounded-3' style={{backgroundColor:"#CED4F5", cursor:"pointer"}}><span className='text-black text-center fw-bold'>Cancel</span></div>
                    <div className='d-flex flex-grow-1 flex-sm-grow-0 align-items-center justify-content-center px-5 py-3 rounded-3' style={{backgroundColor:"#344CB7", cursor:"pointer"}}><span className='text-light text-center fw-bold'>Submit</span></div>
                </Col>
            </Row>
        </div>
    </Container>
  )
}

export default SubmitRequest