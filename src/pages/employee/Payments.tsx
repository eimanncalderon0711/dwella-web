import { Button, Container } from "react-bootstrap"
import Header from "../../components/Header"
import { IoMdAdd } from "react-icons/io"
import Search from "../../components/Search"
import PaymentsTable from "../../components/employee/tables/PaymentsTable"

function Payments() {
  return (
    <Container className="pt-5 d-flex overflow-auto flex-column">

      {/* Header component */}
      <Header path={'admin'}>
        <a href='' className="text-decoration-none text-white px-4 py-3 rounded-3 d-flex align-items-center gap-2" style={{backgroundColor:"#344CB7"}}>
            <IoMdAdd size={25}/>
            <p className='fw-bold text-center m-auto'>Record Payment</p>
        </a>
      </Header>

      {/* Search engine component with history button to navigate to full history*/}
      <Search>
        <div className="align-self-start">
            <Button className="text-decoration-none border-0 text-black px-5 py-3 rounded-3 fw-bold" style={{backgroundColor:"#CED4F5"}}>Download</Button>
        </div>
      </Search>

      <PaymentsTable/>
    </Container>
  )
}

export default Payments