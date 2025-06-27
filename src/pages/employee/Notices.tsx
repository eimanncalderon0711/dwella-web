import { Container } from "react-bootstrap"
import Header from "../../components/Header"
import Search from "../../components/Search"
import NoticeTable from "../../components/employee/tables/NoticeTable"
import { IoMdAdd } from "react-icons/io"

function Notices() {
  return (
    <Container className="pt-5 d-flex overflow-auto flex-column gap-2">
      {/* Header component*/}
      <Header path={'resident'}>
        <div className="d-flex gap-3">
            <h3 className='fw-bold'>Notices</h3>
        </div>
      </Header>
      
      {/* Search engine component*/}
      <Search>
        <div className="align-self-start">
            <a href='/employee/notices/create' className="text-decoration-none d-flex align-items-center gap-3 text-light px-4 py-3 rounded-3 fw-bold" style={{backgroundColor:"#344CB7"}}>
                <IoMdAdd size={25}/>
                Create Notice
            </a>
        </div>
      </Search>
      
      {/* Component table for list of notices */}
      <NoticeTable/>
      
    </Container>
  )
}

export default Notices