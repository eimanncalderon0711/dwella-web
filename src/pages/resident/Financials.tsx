import { Container } from "react-bootstrap"
import Header from "../../components/Header";
import { MdOutlineFileUpload } from "react-icons/md";
import { Link } from "@tanstack/react-router";
import FinancialHistoryTable from "../../components/resident/tables/FinancialHistoryTable";
import Search from "../../components/Search";

function Financials() {
  return (
    <Container className="pt-5 d-flex overflow-auto flex-column gap-2">
      <Header>
        <div className="d-flex gap-3">
            <div className="d-flex align-items-center gap-2 p-3 rounded-3" style={{backgroundColor: "#344CB7"}}>
                <MdOutlineFileUpload size={25} color="white"/>
                <a href="#" className="text-decoration-none text-light fw-bold">Upload Payment</a>
            </div>
        </div>
      </Header>
      
      <Search>
        <div className="align-self-start">
            <Link to='/resident' className="text-decoration-none text-black px-5 py-3 rounded-3 fw-bold" style={{backgroundColor:"#CED4F5"}}>History</Link>
        </div>
      </Search>

      {/* Financial history list */}
      <FinancialHistoryTable/>
    </Container>
  )
}

export default Financials;