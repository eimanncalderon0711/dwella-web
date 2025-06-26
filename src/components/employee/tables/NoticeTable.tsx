import { Table } from "react-bootstrap"

function NoticeTable() {
  return (
    <div className="w-100 d-flex flex-column">
        <div className="overflow-auto">
          <Table responsive={"sm"} className='table-bordered'>
            <thead>
              <tr className="text-nowrap">
                <th style={{backgroundColor:"#F2F2F7"}}>Title</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Type</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Target Audience</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Date Sent</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Status</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-nowrap">
                <td>Water Interruption – May 6</td>
                <td>Maintenance</td>
                <td>All Residents</td>
                <td>April 25, 2025</td>
                <td>Sent</td>
                <td>View</td>
              </tr>
              <tr className="text-nowrap">
                <td>Reminder: HOA Dues May 5</td>
                <td>Dues Reminder</td>
                <td>Units 1A–5C</td>
                <td>April 24, 2025</td>
                <td>Sent</td>
                <td>View</td>
              </tr>
              <tr className="text-nowrap">
                <td>Community Cleanup – May 10</td>
                <td>Event</td>
                <td>All Residents</td>
                <td>April 23, 2025</td>
                <td>Sent</td>
                <td>View</td>
              </tr>
              <tr className="text-nowrap">
                <td>Pool Maintenance Notification</td>
                <td>Maintenance</td>
                <td>Units 6A–8B</td>
                <td>April 22, 2025</td>
                <td>Sent</td>
                <td>View</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
  )
}

export default NoticeTable