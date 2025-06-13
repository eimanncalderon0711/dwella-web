import { Button, Col, Container, Row, Stack } from "react-bootstrap"
import  logo from "../../assets/_ 1.png"

function Dashboard() {
  return (
    <Stack className="mt-5 flex-grow-1">
      <Container>
        <Row className="gap-3">
            <Col className="gap-5 d-flex border bg-warning">
                
            </Col>
            <Col className="border">
              <div className="h-75 w-25"><img src={logo} alt="" /></div>
            </Col>
        </Row>
      </Container>
    </Stack>
  )
}

export default Dashboard