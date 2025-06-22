import { Table } from "react-bootstrap"

function PaymentRecordsTable() {
  return (
    <div className="w-100 d-flex flex-column gap-3 pt-3">
        <div className="overflow-auto">
          <Table responsive={"sm"} className='table-bordered'>
            <thead>
              <tr className="text-nowrap">
                <th style={{backgroundColor:"#F2F2F7"}}>Resident Name</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Amount Paid</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Payment Date</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Payment Method</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Status</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Proof of Payment</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-nowrap">
                <td>Trexy Balansag</td>
                <td>₱2,500</td>
                <td>Apr 27, 2025</td>
                <td>GCash</td>
                <td>Verified</td>
                <td className='text-start text-primary'>View receipt</td>
                <td className='text-start text-primary'>Edit</td>
              </tr>
              <tr className="text-nowrap">
                <td>John Cruz</td>
                <td>₱2,500</td>
                <td>Apr 26, 2025</td>
                <td>Cash (Manual)</td>
                <td>Verified</td>
                <td className='text-start text-primary'>N/A</td>
                <td className='text-start text-primary'>Edit</td>
              </tr>
              <tr className="text-nowrap">
                <td>Anna Reyes</td>
                <td>₱2,500</td>
                <td>Apr 25, 2025</td>
                <td>Bank Transfer</td>
                <td>Pending</td>
                <td className='text-start text-primary'>View receipt</td>
                <td className='text-start text-black'>
                    <span className="text-success">Approve</span> | <span className="text-danger">Reject</span>
                </td>
              </tr>
              <tr className="text-nowrap">
                <td>Mark Dela Cruz</td>
                <td>₱3,000</td>
                <td>Apr 28, 2025</td>
                <td>GCash</td>
                <td>Pending</td>
                <td className='text-start text-primary'>View receipt</td>
                <td className='text-start text-black'>
                    <span className="text-success">Approve</span> | <span className="text-danger">Reject</span>
                </td>
              </tr>
              <tr className="text-nowrap">
                <td>Bea Hernandez</td>
                <td>₱2,000</td>
                <td>Apr 23, 2025</td>
                <td>Cash (Manual)</td>
                <td>Verified</td>
                <td className='text-start text-primary'>N/A</td>
                <td className='text-start text-primary'>Edit</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
  )
}

export default PaymentRecordsTable