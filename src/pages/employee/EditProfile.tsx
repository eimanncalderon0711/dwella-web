import { Button, Col, Container, Form, Row } from "react-bootstrap"
import Header from "../../components/Header"
import { FaAngleRight } from "react-icons/fa6"
import type { User } from "../../models/User.model"
import { useEffect, useState } from "react"
import { useUpdateUser } from "../../hooks/user/useUpdateUser"
import { useAuth } from "../../contexts/auth/AuthContext"
import { useGetUser } from "../../hooks/user/useGetUser"
import { useNavigate } from "@tanstack/react-router"

const initialData: User = {
    first_name: "",
    last_name: "",
    middle_name: "",
    email:"",
    phone_number: "",
}

function EditProfile() {
  
  const [data, setData] = useState<User>(initialData);
  const {user, setUser} = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
   
    const getUser = async () => {
        const response = await useGetUser(user?.id)
    
        setData(response ?? initialData)
    }
    getUser();
  },[user])

  const updateProfile = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
         const response = await useUpdateUser(user?.id, data);
         setUser(response)
         console.log(response)
    } catch (error) {
            console.error(error)
    }
    setData(initialData)
  }

  return (
    <Container className="pt-5 d-flex flex-column w-100" style={{maxWidth:"70rem"}}>
        {/* Header component*/}
        <Header path={'employee'}>
            <div className="d-flex gap-3">
                <h3 className='fw-bold'>Edit Profile</h3>
            </div>
        </Header>

        {/* Form page heading */}
        <div className='d-flex align-items-center gap-1 pt-5 mb-3'>
            <span className='text-muted fw-bold d-flex align-items-center'>View Profile</span>
            <FaAngleRight size={12}/>
            <span className='text-dark fw-bold d-flex align-items-center'>Edit Profile</span>
        </div>

        {/* Pay now Form */}
        <Form onSubmit={updateProfile} className='p-5 rounded-3 mb-5' style={{backgroundColor:"#F2F2F7"}}>
            <h3>Details</h3>
            <Row className='pt-3'>

                {/* First Name */}
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formFirstName">
                        <Form.Label >First Name</Form.Label>
                        <Form.Control name="firstName" value={data.first_name} onChange={(e) => setData((data) => ({...data, first_name: e.target.value})) } type="text" placeholder="e.g., Juan" />
                    </Form.Group>
                </Col>
                
                 {/* Middle Name */}
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formMiddleName">
                        <Form.Label >Middle Name</Form.Label>
                        <Form.Control name="middleName" value={data.middle_name} onChange={(e) => setData((data) => ({...data, middle_name:e.target.value})) } type="text" placeholder="e.g., Lopez" />
                    </Form.Group>
                </Col>

                {/* Last Name */}
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formLastName">
                        <Form.Label >Last Name</Form.Label>
                        <Form.Control name="lastName" value={data.last_name} onChange={(e) => setData((data) => ({...data, last_name:e.target.value})) } type="text" placeholder="e.g., Dela Cruz" />
                    </Form.Group>
                </Col>

                {/* Email Address */}
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formUnitNumber">
                        <Form.Label >Email address</Form.Label>
                        <Form.Control name="email" value={data.email} onChange={(e) => setData((data) => ({...data, email:e.target.value})) } type="text" placeholder="e.g., miguel.santos@email.com" />
                    </Form.Group>
                </Col>

                {/* Contact Number */}
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formContactNumber">
                        <Form.Label >Contact Number</Form.Label>
                        <Form.Control name="contactNumber" value={data.phone_number} onChange={(e) => setData((data) => ({...data, phone_number:e.target.value})) } type="number" placeholder="e.g., 09123456789" />
                    </Form.Group>
                </Col>

                {/* Address */}
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formAddress">
                        <Form.Label >Address</Form.Label>
                        <Form.Control type="text" placeholder="e.g., Cagayan De Oro City" />
                    </Form.Group>
                </Col>

                <Col className='d-flex gap-3 flex-wrap align-items-center justify-content-end mt-3'>
                    <div onClick={() => navigate({to:'/employee'})} className='d-flex flex-grow-1 flex-sm-grow-0 align-items-center justify-content-center px-5 py-3 rounded-3' style={{backgroundColor:"#CED4F5", cursor:"pointer"}}><span className='text-black text-center fw-bold'>Cancel</span></div>
                    <Button type="submit" className='d-flex border-0 flex-grow-1 flex-sm-grow-0 align-items-center justify-content-center px-3 py-3 rounded-3' style={{backgroundColor:"#344CB7", cursor:"pointer"}}><span className='text-light text-center fw-bold'>Save Changes</span></Button>
                </Col>
            </Row>
        </Form>
    </Container>
  )
}

export default EditProfile