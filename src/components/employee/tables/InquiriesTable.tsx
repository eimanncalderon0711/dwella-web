import { Table } from 'react-bootstrap'

function InquiriesTable() {
  return (
    <div className="w-100 d-flex flex-column">
        <div className="overflow-auto">
          <Table responsive={"sm"} className='table-bordered'>
            <thead>
              <tr className="text-nowrap">
                <th style={{backgroundColor:"#F2F2F7"}}>Resident Name</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Unit Number</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Type</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Date Submitted</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Status</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-nowrap">
                <td>John Cruz</td>
                <td>3A</td>
                <td>Complaint</td>
                <td>April 26, 2025</td>
                <td>Open</td>
                <td className='text-primary'>Respond</td>
              </tr>
              <tr className="text-nowrap">
                <td>Marco Dela Peña</td>
                <td>4C</td>
                <td>Question</td>
                <td>April 28, 2025</td>
                <td>Open</td>
                <td className='text-primary'>Respond</td>
              </tr>
              <tr className="text-nowrap">
                <td>Bianca Santos</td>
                <td>2D</td>
                <td>Complaint</td>
                <td>April 23, 2025</td>
                <td>Resolved</td>
                <td className='text-primary'>View Details</td>
              </tr>
              <tr className="text-nowrap">
                <td>Leo Fernandez</td>
                <td>6A</td>
                <td>Request</td>
                <td>April 22, 2025</td>
                <td>Open</td>
                <td className='text-primary'>Respond</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
  )
}

export default InquiriesTable