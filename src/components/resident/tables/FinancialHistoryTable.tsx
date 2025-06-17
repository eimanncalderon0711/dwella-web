import { Table } from 'react-bootstrap'

function FinancialHistoryTable() {
  return (
    <div className="overflow-auto">
          <Table responsive={"sm"} className='table-bordered'>
            <thead>
              <tr className="text-nowrap">
                <th style={{backgroundColor:"#F2F2F7"}}>Date</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Amount</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Due Date</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-nowrap">
                <td>April 2025</td>
                <td>₱2,500</td>
                <td>May 5, 2025</td>
                <td>Unpaid</td>
              </tr>
              <tr className="text-nowrap">
                <td>March 2025</td>
                <td>₱2,500</td>
                <td>April 5, 2025</td>
                <td>Paid</td>
              </tr>
            </tbody>
          </Table>
        </div>
  )
}

export default FinancialHistoryTable