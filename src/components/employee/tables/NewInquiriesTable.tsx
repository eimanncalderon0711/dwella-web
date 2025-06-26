import { Table } from 'react-bootstrap'

function NewInquiriesTable() {
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
                <td>John Cruz</td>
                <td>3A</td>
                <td>Complaint</td>
                <td>April 26, 2025</td>
                <td>Open</td>
                <td className='text-primary'>Respond</td>
              </tr>
              <tr className="text-nowrap">
                <td>Ana Reyes</td>
                <td>5B</td>
                <td>Request</td>
                <td>April 25, 2025</td>
                <td>In Progress</td>
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
            </tbody>
          </Table>
        </div>
      </div>
  )
}

export default NewInquiriesTable