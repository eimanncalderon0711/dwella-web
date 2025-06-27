import { Table } from 'react-bootstrap'

function OverDueAccountTables() {
  return (
    <div className="w-100 d-flex flex-column">
        <div className="overflow-auto">
          <Table responsive={"sm"} className='table-bordered'>
            <thead>
              <tr className="text-nowrap">
                <th style={{backgroundColor:"#F2F2F7"}}>Resident Name</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Unit Number</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Total Amount Due</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Months Due</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Last Payment Date</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-nowrap">
                <td>John Cruz</td>
                <td>3A</td>
                <td>₱2,500</td>
                <td>1 Month</td>
                <td>March 30, 2025</td>
                <td className='text-primary'>Send Reminder</td>
              </tr>
              <tr className="text-nowrap">
                <td>Ana Reyes</td>
                <td>5B</td>
                <td>₱7,500</td>
                <td>3 Months</td>
                <td>January 15, 2025</td>
                <td className='text-primary'>Send Reminder</td>
              </tr>
              <tr className="text-nowrap">
                <td>Marco Dela Peña</td>
                <td>4C</td>
                <td>₱5,000</td>
                <td>2 Months</td>
                <td>February 25, 2025</td>
                <td className='text-primary'>Send Reminder</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
  )
}

export default OverDueAccountTables