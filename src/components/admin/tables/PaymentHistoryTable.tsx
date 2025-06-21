import { Container, Table } from "react-bootstrap"

function PaymentHistoryTable() {
  return (
    <Container className="w-100 d-flex flex-column gap-3 pt-5">
        <div className="fw-bold" style={{fontSize:"20px"}}><span style={{borderBottom:"#344CB7 5px solid"}}>Payment History</span></div>
        <div className="overflow-auto">
          <Table responsive={"sm"} className='table-bordered'>
            <thead>
              <tr className="text-nowrap">
                <th style={{backgroundColor:"#F2F2F7"}}>Date</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Resident Name</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Unit</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Amount</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Method</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-nowrap">
                <td>Apr 27, 2025</td>
                <td>Trexy Balansag</td>
                <td>3A</td>
                <td>₱2,500</td>
                <td>Gcash</td>
                <td className='text-md-center text-success fw-bold'>Paid</td>
              </tr>
              <tr className="text-nowrap">
                <td>Apr 26, 2025</td>
                <td>John Cruz</td>
                <td>5B</td>
                <td>₱2,500</td>
                <td>Bank Transfer</td>
                <td className='text-md-center text-success fw-bold'>Paid</td>
              </tr>
              <tr className="text-nowrap">
                <td>Apr 25, 2025</td>
                <td>Anna Lopez</td>
                <td>2C</td>
                <td>₱2,500</td>
                <td>Gcash</td>
                <td className='text-md-center text-warning fw-bold'>Pending</td>
              </tr>
              <tr className="text-nowrap">
                <td>Apr 24, 2025</td>
                <td>Mark Reyes</td>
                <td>1B</td>
                <td>₱2,000</td>
                <td>Gcash</td>
                <td className='text-md-center text-success fw-bold'>Paid</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
  )
}

export default PaymentHistoryTable
