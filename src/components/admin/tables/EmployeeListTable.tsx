import { Table } from 'react-bootstrap'
import { FaPencilAlt, FaRegTrashAlt } from 'react-icons/fa'
import { IoMdEye } from 'react-icons/io'

function EmployeeListTable() {
  return (
    <div className="w-100 d-flex flex-column gap-3 pt-2">
        <div className="overflow-auto">
          <Table responsive={"sm"} className='table-bordered'>
            <thead>
              <tr className="text-nowrap">
                <th style={{backgroundColor:"#F2F2F7"}}>Employee name</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Role</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Contact Number</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Email</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Account Status</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-nowrap">
                    <td>Ninya Kyla</td>
                    <td>Billing Officer</td>
                    <td>09171234567</td>
                    <td>ninyakyla@gmail.com</td>
                    <td>Active</td>
                    <td className='d-flex align-items-center justify-content-center gap-2 '>
                        <div className='text-primary fw-bold fs-5'><FaPencilAlt /></div>
                        <div className='text-danger fw-bold fs-5'><FaRegTrashAlt /></div>
                        <div className='text-primary fw-bold fs-5'><IoMdEye /></div>
                    </td>
              </tr>
              <tr className="text-nowrap">
                    <td>Miguel Santos</td>
                    <td>Communications Officer</td>
                    <td>09179874321</td>
                    <td>miguel.santos@email.com</td>
                    <td>Active</td>
                    <td className='d-flex align-items-center justify-content-center gap-2 '>
                        <div className='text-primary fw-bold fs-5'><FaPencilAlt /></div>
                        <div className='text-danger fw-bold fs-5'><FaRegTrashAlt /></div>
                        <div className='text-primary fw-bold fs-5'><IoMdEye /></div>
                    </td>
              </tr>
              <tr className="text-nowrap">
                    <td>Janine Dela Torre</td>
                    <td>Billing Officer</td>
                    <td>09281239876</td>
                    <td>janine.dt@email.com</td>
                    <td>Inactive</td>
                    <td className='d-flex align-items-center justify-content-center gap-2 '>
                        <div className='text-primary fw-bold fs-5'><FaPencilAlt /></div>
                        <div className='text-danger fw-bold fs-5'><FaRegTrashAlt /></div>
                        <div className='text-primary fw-bold fs-5'><IoMdEye /></div>
                    </td>
              </tr>
              <tr className="text-nowrap">
                    <td>Leo Fernandez</td>
                    <td>Admin Assistant</td>
                    <td>09091231234</td>
                    <td>leo.fernandez@email.com</td>
                    <td>Active</td>
                    <td className='d-flex align-items-center justify-content-center gap-2 '>
                        <div className='text-primary fw-bold fs-5'><FaPencilAlt /></div>
                        <div className='text-danger fw-bold fs-5'><FaRegTrashAlt /></div>
                        <div className='text-primary fw-bold fs-5'><IoMdEye /></div>
                    </td>
              </tr>
              <tr className="text-nowrap">
                    <td>Erika Ramos</td>
                    <td>Communications Officer</td>
                    <td>09361234589</td>
                    <td>erika.ramos@email.com</td>
                    <td>Active</td>
                    <td className='d-flex align-items-center justify-content-center gap-2 '>
                        <div className='text-primary fw-bold fs-5'><FaPencilAlt /></div>
                        <div className='text-danger fw-bold fs-5'><FaRegTrashAlt /></div>
                        <div className='text-primary fw-bold fs-5'><IoMdEye /></div>
                    </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
  )
}

export default EmployeeListTable