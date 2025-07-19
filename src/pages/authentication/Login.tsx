import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "../../index.css";
import { useAuth } from "../../contexts/auth/AuthContext";
import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { Authentication } from "../../models/Authentication.model";
import { jwtDecode } from "jwt-decode";
import type { ITokenPayload } from "../../interfaces/payloads/ITokenPayload";

const initialAuthentication : Authentication = {
  username: "",
  password: ""
}

function Login() {

  const {login, token} = useAuth();
  const navigate = useNavigate()

  const [auth , setAuth] = useState<Authentication>(initialAuthentication);

    useEffect(() => {
      if (!token) {
        return
      }
      const decoded = jwtDecode<ITokenPayload>(token.access)
      switch (decoded.role) {
        case 'admin':
           navigate({ to: '/admin', replace: true });
           break;
        case 'resident':
           navigate({ to: '/resident/dashboard', replace: true });
           break;
        case 'employee':
           navigate({ to: '/employee', replace: true });
           break;
      }
    }, [token]);

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    
      event.preventDefault();

      try {
        login(auth.username, auth.password);
        setAuth(initialAuthentication);
      } catch (error) {
        console.error(error)
      }
      
  }

  return (
    <Container className="vh-100">
      <Row style={{height: "10%"}}>
        <h1 className="my-auto custom-color fw-bold">Dwella</h1>
      </Row>
      <Row style={{height: "90%"}}>
        <Container className="m-auto">
          
            {/* Form for login */}
            <Form className="custom-form rounded-4" onSubmit={handleLogin}>
              <Form.Label className="d-block text-center fs-2 fw-medium custom-color mb-5">
                  Login in to DWELLA
              </Form.Label>

              {/* Email and password field */}
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="custom-font-size">Email</Form.Label>
                  <Form.Control value={auth.username} onChange={(e) => setAuth((data) => ({...data, username: e.target.value}))} className="custom-font-size" type="text" placeholder="name@example.com" autoComplete="current-email"/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                  <Form.Label className="custom-font-size">Password</Form.Label>
                  <Form.Control value={auth.password} onChange={(e) => setAuth((data) => ({...data, password: e.target.value}))} className="custom-font-size" type="password" placeholder="Enter password" autoComplete="current-password"/>
              </Form.Group>

              {/* Button to redirect to forgot password page */}
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Row>
                  <Col xs={6}>
                      <Form.Check type="checkbox" label="Remember me" />
                  </Col>
                  <Col xs={6} className="text-end">
                      <a href="">Forgot password?</a>
                  </Col>
                  </Row>
              </Form.Group>
              
              {/* Button to login credential  */}
              <Button className="mb-3 d-block w-100 border-0" style={{backgroundColor: "#344CB7"}} type="submit">
                  Login
              </Button>
              
              {/* Button to redirect Sign-up page*/}
              <Form.Group className="mb-3 my-4 d-flex justify-content-center align-items-center">
                  <Form.Text className="d-none d-md-block w-25 bg-secondary me-1" style={{height:"1px"}}></Form.Text>
                  <a href="" className="text-decoration-none text-secondary text-center" style={{fontSize:"12px"}}>Don't have an DWELLA account?</a>
                  <Form.Text className="d-none d-md-block w-25 bg-secondary ms-1" style={{height:"1px"}}></Form.Text>
              </Form.Group>
              
              <a className="d-block mt-4 w-100 text-center rounded-3 text-decoration-none py-2 fw-bold" style={{border: "2px solid #344CB7", color:"#344CB7"}} type="submit">
                  Signup
              </a>
            </Form>
        </Container>
      </Row>
    </Container>
  );
}

export default Login;
