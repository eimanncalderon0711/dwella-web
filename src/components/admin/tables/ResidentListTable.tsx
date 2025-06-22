import { Table } from 'react-bootstrap'
import { FaPencilAlt, FaRegTrashAlt } from 'react-icons/fa'
import { IoMdEye } from 'react-icons/io'

function ResidentListTable() {
  return (
    <div className="w-100 d-flex flex-column gap-3 pt-2">
        <div className="overflow-auto">
          <Table responsive={"sm"} className='table-bordered'>
            <thead>
              <tr className="text-nowrap">
                <th style={{backgroundColor:"#F2F2F7"}}>Resident Name</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Unit</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Contact Number</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Email</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Account Status</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Balance Amount</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Last Payment</th>
                <th style={{backgroundColor:"#F2F2F7"}}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-nowrap">
                    <td>Trexy Balansag</td>
                    <td>3A</td>
                    <td>09171234567</td>
                    <td>trexybalansag@gmail.com</td>
                    <td>Paid</td>
                    <td>₱0.00</td>
                    <td>Apr 27, 2025</td>
                    <td className='d-flex align-items-center justify-content-center gap-2 '>
                        <div className='text-primary fw-bold fs-5'><FaPencilAlt /></div>
                        <div className='text-danger fw-bold fs-5'><FaRegTrashAlt /></div>
                        <div className='text-primary fw-bold fs-5'><IoMdEye /></div>
                    </td>
              </tr>
              <tr className="text-nowrap">
                    <td>Anna Lopez</td>
                    <td>2C</td>
                    <td>09281234567</td>
                    <td>annalopez@email.com</td>
                    <td>Paid</td>
                    <td>₱0.00</td>
                    <td>Mar 15, 2025</td>
                    <td className='d-flex align-items-center justify-content-center gap-2 '>
                        <div className='text-primary fw-bold fs-5'><FaPencilAlt /></div>
                        <div className='text-danger fw-bold fs-5'><FaRegTrashAlt /></div>
                        <div className='text-primary fw-bold fs-5'><IoMdEye /></div>
                    </td>
              </tr>
              <tr className="text-nowrap">
                    <td>Mark Reyes</td>
                    <td>10E</td>
                    <td>09391234567</td>
                    <td>markreyes@email.com</td>
                    <td>Paid</td>
                    <td>₱0.00</td>
                    <td>Apr 25, 2025</td>
                    <td className='d-flex align-items-center justify-content-center gap-2 '>
                        <div className='text-primary fw-bold fs-5'><FaPencilAlt /></div>
                        <div className='text-danger fw-bold fs-5'><FaRegTrashAlt /></div>
                        <div className='text-primary fw-bold fs-5'><IoMdEye /></div>
                    </td>
              </tr>
              <tr className="text-nowrap">
                    <td>John Cruz</td>
                    <td>5B</td>
                    <td>09181234567</td>
                    <td>johncruz@email.com</td>
                    <td>Overdue</td>
                    <td>₱2,500</td>
                    <td>Feb 28, 2025</td>
                    <td className='d-flex align-items-center justify-content-center gap-2 '>
                        <div className='text-primary fw-bold fs-5'><FaPencilAlt /></div>
                        <div className='text-danger fw-bold fs-5'><FaRegTrashAlt /></div>
                        <div className='text-primary fw-bold fs-5'><IoMdEye /></div>
                    </td>
              </tr>
              <tr className="text-nowrap">
                    <td>Lea Santos</td>
                    <td>1D</td>
                    <td>09192234567</td>
                    <td>leasantos@email.com</td>
                    <td>Paid</td>
                    <td>₱0.00</td>
                    <td>Apr 10, 2025</td>
                    <td className='d-flex align-items-center justify-content-center gap-2 '>
                        <div className='text-primary fw-bold fs-5'><FaPencilAlt /></div>
                        <div className='text-danger fw-bold fs-5'><FaRegTrashAlt /></div>
                        <div className='text-primary fw-bold fs-5'><IoMdEye /></div>
                    </td>
              </tr>
              <tr className="text-nowrap">
                    <td>Kevin Dela Cruz</td>
                    <td>6F</td>
                    <td>09451234567</td>
                    <td>kevindc@email.com</td>
                    <td>Overdue</td>
                    <td>₱3,000</td>
                    <td>Apr 20, 2025</td>
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

export default ResidentListTable