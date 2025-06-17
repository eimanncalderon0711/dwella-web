import { Container, Table } from 'react-bootstrap'
import { FiEye } from 'react-icons/fi'

function AnnouncementsTable() {
  return (
    <Container className="w-100 d-flex flex-column gap-3">
        <div className="fw-bold" style={{fontSize:"20px"}}><span style={{borderBottom:"#344CB7 5px solid"}}>Announcements</span></div>
        <div className="overflow-auto">
          <Table responsive={"sm"} className='table-bordered'>
            <thead>
              <tr className="text-nowrap">
                <th style={{backgroundColor:"#F2F2F7"}}>Title</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Created By</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Date Created</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-nowrap">
                <td >Monthly Due</td>
                <td>Sheila Mae</td>
                <td>16 Jan 2025 at 9:00 PM</td>
                <td className='text-md-center'><FiEye color="blue" size={20}/></td>
              </tr>
              <tr className="text-nowrap">
                <td >Monthly Due</td>
                <td>Sheila Mae</td>
                <td>16 Jan 2025 at 9:00 PM</td>
                <td className='text-md-center'><FiEye color="blue" size={20}/></td>
              </tr>
              <tr className="text-nowrap">
                <td >Monthly Due</td>
                <td>Sheila Mae</td>
                <td>16 Jan 2025 at 9:00 PM</td>
                <td className='text-md-center'><FiEye color="blue" size={20}/></td>
              </tr>
              <tr className="text-nowrap">
                <td >Monthly Due</td>
                <td>Sheila Mae</td>
                <td>16 Jan 2025 at 9:00 PM</td>
                <td className='text-md-center'><FiEye color="blue" size={20}/></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
  )
}

export default AnnouncementsTable