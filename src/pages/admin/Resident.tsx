import { Container } from 'react-bootstrap'
import Header from '../../components/Header'
import Search from '../../components/Search'
import { IoMdAdd } from 'react-icons/io'
import ResidentListTable from '../../components/admin/tables/ResidentListTable'
import { useGetUsers } from '../../hooks/user/useGetUsers'

function Resident() {

    const {users, loading, error} = useGetUsers();
  
    if (loading) return <p>Loading users...</p>;
    if (error) return <p>Error: {error}</p>;
  
    const residentUsers = users.filter((user) => user.role === 'resident');

  return (
    <Container className="pt-sm-5 d-flex overflow-auto flex-column">

      {/* Header component */}
      <Header path={'admin'}>
        <div className="d-flex gap-3">
            <h3 className='fw-bold'>Residents</h3>
        </div>
      </Header>
      
      {/* Search engine component with Add resident button*/}
      <Search>
        <div className="align-self-start">
            <a href='/admin/resident/add-resident' className="text-decoration-none d-flex align-items-center gap-3 text-light px-4 py-3 rounded-3 fw-bold" style={{backgroundColor:"#344CB7"}}>
                <IoMdAdd size={25}/>
                Add Resident
            </a>
        </div>
      </Search>
      
      {/* Resident Table list*/}
      <ResidentListTable users={residentUsers}/>

    </Container>
  )
}

export default Resident