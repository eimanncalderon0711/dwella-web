import { Container } from "react-bootstrap"
import Header from "../../components/Header"
import Search from "../../components/Search"
import { IoMdAdd } from "react-icons/io"
import EmployeeListTable from "../../components/admin/tables/EmployeeListTable"

function Employees() {
  return (
    <Container className="pt-sm-5 d-flex overflow-auto flex-column">
      {/* Header component */}
      <Header path={'admin'}>
        <div className="d-flex gap-3">
            <h3 className='fw-bold'>Employees</h3>
        </div>
      </Header>

      {/* Search engine component with Add resident button*/}
      <Search>
        <div className="align-self-start">
            <a href='/resident/submit-request' className="text-decoration-none d-flex align-items-center gap-3 text-light px-4 py-3 rounded-3 fw-bold" style={{backgroundColor:"#344CB7"}}>
                <IoMdAdd size={25}/>
                Add Employee
            </a>
        </div>
      </Search>

       {/* List of employee table*/}
       <EmployeeListTable/>

    </Container>
  )
}

export default Employees