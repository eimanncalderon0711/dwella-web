import { Container, Table } from "react-bootstrap"

function PaymentHistoryTable() {
  return (
    <Container className="w-100 d-flex flex-column gap-3">
        <div className="fw-bold" style={{fontSize:"20px"}}><span style={{borderBottom:"#344CB7 5px solid"}}>Payment History</span></div>
        <div className="overflow-auto">
          <Table responsive={"sm"} className='table-bordered'>
            <thead>
              <tr className="text-nowrap">
                <th style={{backgroundColor:"#F2F2F7"}}>Date</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Amount</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Method</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Status</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Receipt</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-nowrap">
                <td>Apr 27, 2025</td>
                <td>₱2,500</td>
                <td>Gcash</td>
                <td>Paid</td>
                <td className='text-md-center' style={{color:"blue"}}>Download</td>
              </tr>
              <tr className="text-nowrap">
                <td>Mar 25, 2025</td>
                <td>₱2,500</td>
                <td>Bank Transfer</td>
                <td>Paid</td>
                <td className='text-md-center' style={{color:"blue"}}>Download</td>
              </tr>
              <tr className="text-nowrap">
                <td>Feb 25, 2025</td>
                <td>₱2,500</td>
                <td>Gcash</td>
                <td>Paid</td>
                <td className='text-md-center' style={{color:"blue"}}>Download</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
  )
}

export default PaymentHistoryTable