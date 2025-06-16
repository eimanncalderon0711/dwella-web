import Header from '../../components/Header'
import { Container } from 'react-bootstrap'
import Search from '../../components/Search'
import { Link } from '@tanstack/react-router'
import { IoMdAdd } from 'react-icons/io'
import InquiriesTable from '../../components/resident/tables/InquiriesTable'

function Inquiries() {
  return (
    <Container className="pt-sm-5 d-flex overflow-auto flex-column">

      {/* Header component */}
      <Header>
        <div className="d-flex gap-3">
            <h3 className='fw-bold'>Inquiries</h3>
        </div>
      </Header>
      
      {/* Search engine component with request button*/}
      <Search>
        <div className="align-self-start">
            <Link to='/resident' className="text-decoration-none d-flex align-items-center gap-3 text-light px-5 py-3 rounded-3 fw-bold" style={{backgroundColor:"#344CB7"}}>
                <IoMdAdd size={25}/>
                Request
            </Link>
        </div>
      </Search>

      {/* Component table for list of inquiries */}
      <InquiriesTable/>
    </Container>
    
  )
}

export default Inquiries