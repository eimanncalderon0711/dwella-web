import { Container } from "react-bootstrap"
import Cards from "../../components/resident/cards/Cards";
import AdminHeader from "../../components/resident/header/AdminHeader";
import AnnouncementsTable from "../../components/resident/tables/AnnouncementsTable";



function Dashboard() {
  return (
    <Container className="pt-5 d-flex overflow-auto flex-column gap-5" style={{width:"90%"}}>
      <AdminHeader/>
      {/* Cards info */}
      <div className="d-flex gap-3 flex-column flex-md-row">
        <Cards heading="Pending Dues" description="20,000"/>
        <Cards heading="Due date" description="April 30, 2025"/>
        <Cards heading="Unit Number" description="3A"/>
      </div>

      {/* List of announcements */}
      <AnnouncementsTable/>
    </Container>
  )
}

export default Dashboard