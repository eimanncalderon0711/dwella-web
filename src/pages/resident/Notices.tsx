import { Container } from 'react-bootstrap'
import Header from '../../components/Header'
import Search from '../../components/Search'
import NoticeTable from '../../components/resident/tables/NoticeTable'

function Notices() {
  return (
    <Container className="pt-5 d-flex overflow-auto flex-column gap-2">
      {/* Header component*/}
      <Header>
        <div className="d-flex gap-3">
            <h3 className='fw-bold'>Notices</h3>
        </div>
      </Header>
      
      {/* Search engine component*/}
      <Search/>
      
      {/* Component table for list of notices */}
      <NoticeTable/>
      
    </Container>
  )
}

export default Notices