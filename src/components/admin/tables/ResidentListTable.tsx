import { Table } from 'react-bootstrap'
import { FaPencilAlt, FaRegTrashAlt } from 'react-icons/fa'
import { IoMdEye } from 'react-icons/io'
import type { User } from '../../../models/User.model'
import { useNavigate } from '@tanstack/react-router';
import { useAuth } from '../../../contexts/auth/AuthContext';

type ResidentListTableProps = {
  users: User[];
};

function ResidentListTable({users}: ResidentListTableProps) {

  const navigate = useNavigate();

  const {role} = useAuth();

  console.log(role)

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
              {users.map((user: User) => (
                <tr key={user.id} className="text-nowrap">
                    <td>{user.first_name} {user.middle_name}</td>
                    <td>2C</td>
                    <td>{user.phone_number}</td>
                    <td>{user.email}</td>
                    <td>Paid</td>
                    <td>₱0.00</td>
                    <td>Mar 15, 2025</td>
                    <td className='d-flex align-items-center justify-content-center gap-2'>
                        <div onClick={() => navigate({to:`/${role}/resident/$residentId`, params:{residentId: user.id?.toString() ?? ''}})} className='text-primary fw-bold fs-5'><FaPencilAlt /></div>
                        <div className='text-danger fw-bold fs-5'><FaRegTrashAlt /></div>
                        <div className='text-primary fw-bold fs-5'><IoMdEye /></div>
                    </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {users.length < 1 && <h3 className='text-center'>No Resident Available</h3>}
        </div>
      </div>
  )
}

export default ResidentListTable