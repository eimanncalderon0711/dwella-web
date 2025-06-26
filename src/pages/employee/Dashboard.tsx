import { Col, Container, Row, Table } from "react-bootstrap"
import Header from "../../components/Header"
import Card from "../../components/employee/cards/Card"

function Dashboard() {
  return (
    <Container className="pt-5 d-flex overflow-auto flex-column">

      {/* Header page */}
      <Header path={'employee'}>
        <div className="d-flex">
            <h3 className='fw-bold'>Dashboard</h3>
        </div>
      </Header>

      {/* Cards info */}
      <Row className="d-flex flex-column gy-3 flex-md-row pt-3 pt-md-5">
        <Col xs={12} md={6}>
            <Card title="Overdue Accounts" quantity="3" path="/employee/over-due-accounts"/>
        </Col>
        <Col xs={12} md={6}>
            <Card title="Unverified Payments" quantity="6" path="/employee/unverified-payments"/>
        </Col>
        <Col xs={12} md={6}>
            <Card title="Pending Notices" quantity="4" path="/employee/pending-notices"/>
        </Col>
        <Col xs={12} md={6}>
            <Card title="Open Inquries" quantity="3" path="/employee/open-inquiries"/>
        </Col>
      </Row>

      <Row className="mt-3 pb-3">
        <h4 className="fw-bold">Today's Task</h4>
        <div className="overflow-auto">
          <Table responsive={"sm"} className='table-bordered'>
            <thead>
              <tr className="text-nowrap">
                <th style={{backgroundColor:"#F2F2F7"}}>Task</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Due Time/Date</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Priority</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-nowrap">
                <td>Follow up with Unit 2B on overdue payment</td>
                <td>April 28</td>
                <td>High</td>
              </tr>
              <tr className="text-nowrap">
                <td>Review May Maintenance Notice</td>
                <td>April 28</td>
                <td>Medium</td>
              </tr>
              <tr className="text-nowrap">
                <td>Verify payment for Unit 4C</td>
                <td>April 28</td>
                <td>High</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Row>

    </Container>
  )
}

export default Dashboard