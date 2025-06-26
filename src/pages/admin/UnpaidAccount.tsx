import { Container } from "react-bootstrap"
import Header from "../../components/Header"
import Search from "../../components/Search"
import { IoMdAdd } from "react-icons/io"
import UnpaidAccountTable from "../../components/admin/tables/UnpaidAccountTable"

function UnpaidAccount() {
  return (
    <Container className="pt-sm-5 d-flex overflow-auto flex-column">

      {/* Header component */}
      <Header path={'admin'}>
        <div className="d-flex gap-3">
            <h3 className='fw-bold'>Unpaid Accounts</h3>
        </div>
      </Header>
      
      {/* Search engine component with Add resident button*/}
      <Search>
        <div className="align-self-start">
            <a href='/admin/unpaid-accounts/reminders' className="text-decoration-none d-flex align-items-center gap-3 text-light px-4 py-3 rounded-3 fw-bold" style={{backgroundColor:"#344CB7"}}>
                <IoMdAdd size={25}/>
                Create
            </a>
        </div>
      </Search>

      {/* Unpaid accounts list table */}
      <UnpaidAccountTable/>

    </Container>
  )
}

export default UnpaidAccount