import Header from "../../components/Header"
import { Container } from "react-bootstrap"
import Cards from "../../components/resident/cards/Cards"
import PaymentHistoryTable from "../../components/admin/tables/PaymentHistoryTable"

function Dashboard() {
  return (
    <Container className="pt-5 d-flex overflow-auto flex-column">

      {/* Header page */}
      <Header path={'admin'}>
       <div className="d-flex">
            <h3 className='fw-bold'>Dashboard</h3>
        </div>
      </Header>

      {/* Cards info */}
      <div className="d-flex gap-3 flex-column flex-md-row pt-3 pt-md-5">
        <Cards heading="Total Residents" description="120"/>
        <Cards heading="Total Amount Due This Month" description="₱350,000"/>
        <Cards heading="Total Collected Payments This Month" description="₱290,000"/>
      </div>

      <div className="d-flex gap-3 pt-3 flex-column flex-sm-row">
        <Cards heading="Overdue Accounts " description="18"/>
        <Cards heading="Pending Payment Verifications" description="5"/>
      </div>
      
      <PaymentHistoryTable/>
    </Container>

  )
}

export default Dashboard