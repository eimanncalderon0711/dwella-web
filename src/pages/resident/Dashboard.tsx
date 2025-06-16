import { Container } from "react-bootstrap"
import Cards from "../../components/resident/cards/Cards";
import Header from "../../components/Header";
import AnnouncementsTable from "../../components/resident/tables/AnnouncementsTable";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { Link } from "@tanstack/react-router";



function Dashboard() {
  return (
    <Container className="pt-5 d-flex overflow-auto flex-column gap-5">

      {/* Header page */}
      <Header>
        <div className="d-flex gap-3">
            <div className="d-flex align-items-center gap-2 p-3 rounded-3" style={{backgroundColor: "#CED4F5",}}>
                <FaPhone/>
                <Link to="/dashboard" className="text-decoration-none text-black fw-bold">Contact Admin</Link>
            </div>

            <div className="d-flex align-items-center gap-2 p-3 rounded-3" style={{backgroundColor: "#344CB7"}}>
                <MdOutlineAccountBalanceWallet size={25} color="white"/>
                <Link to="/resident/paynow" className="text-decoration-none text-light fw-bold">Pay Now</Link>
            </div>
        </div>
      </Header>
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